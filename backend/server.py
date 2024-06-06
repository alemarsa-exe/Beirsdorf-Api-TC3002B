from flask import Flask, jsonify, send_from_directory, request
import pickle
import pandas as pd
import os
import nltk
from nltk.corpus import stopwords
from json_to_csv import json_to_csv
from pre_processing import dataLoader, cleanData
from csv_to_json import csv_to_json
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from flask_cors import CORS


def rem_stopwords_tokenize(data, name):
    stop_words = set(stopwords.words('english'))
    stop_words.update(stopwords.words('german'))
    stop_words.update(stopwords.words('russian'))
    stop_words.update(stopwords.words('french'))
    stop_words.update(stopwords.words('greek'))
    stop_words.update(stopwords.words('italian'))

    if isinstance(data[name], pd.Series):
        x = []
        for i in data[name]:
            word_tokens = word_tokenize(i)
            filtered_sentence = [w for w in word_tokens if not w in stop_words]
            x.append(" ".join(filtered_sentence))
        data[name] = x
    else:
        raise ValueError(f"Expected data[{name}] to be a pandas Series, got {type(data[name])} instead")

    return data


def Lemmatization(data, name):
    lemmatizer = WordNetLemmatizer()
    if isinstance(data[name], pd.Series):
        x = []
        for i in data[name]:
            word_tokens = word_tokenize(i)
            lemmatized_sentence = [lemmatizer.lemmatize(w) for w in word_tokens]
            x.append(" ".join(lemmatized_sentence))
        data[name] = x
    else:
        raise ValueError(f"Expected data[{name}] to be a pandas Series, got {type(data[name])} instead")

    return data


def make_sentences(data, name):
    if isinstance(data[name], pd.Series):
        x = []
        for i in data[name]:
            sentences = nltk.sent_tokenize(i)
            x.append(" ".join(sentences))
        data[name] = x
    else:
        raise ValueError(f"Expected data[{name}] to be a pandas Series, got {type(data[name])} instead")

    return data


nltk.download('stopwords')
nltk.download('punkt')
nltk.download('wordnet')

app = Flask(__name__, static_folder='../frontend/spam-detection-api/build')
CORS(app)

UPLOAD_FOLDER = 'uploads'

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

with open('./models/RandomForest_bow.pkl', 'rb') as file:
    model = pickle.load(file)

with open('bow_vectorizer.pkl', 'rb') as file:
    vectorizer = pickle.load(file)


@app.route('/predict-single', methods=['POST'])
def predict():
    data = request.get_json()

    required_fields = ["Attachment Count", "Attachment Extension", "Email From", "Email Subject"]
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing one or more required fields in JSON'}), 400

    json_to_csv(data, 'output.csv')

    dataframe = dataLoader('output.csv')

    dataframe['combined_text'] = dataframe[['Attachment Count', 'Attachment Extension', 'Email From', 'Email Subject']].apply(lambda x: ' '.join(x.dropna().astype(str)), axis=1)

    cleanData(dataframe, 'combined_text')
    cleanData(dataframe, 'Attachment Count')
    cleanData(dataframe, 'Attachment Extension')
    cleanData(dataframe, 'Email From')
    cleanData(dataframe, 'Email Subject')

    processed_data = rem_stopwords_tokenize(dataframe, 'combined_text')
    processed_data = Lemmatization(processed_data, 'combined_text')
    processed_data = make_sentences(processed_data, 'combined_text')

    email_data = processed_data.loc[0, 'combined_text']
    print("Final processed combined_text for prediction:", email_data)  # Debug statement
    email_features = vectorizer.transform([email_data])

    prediction = model.predict(email_features)[0]
    probability = model.predict_proba(email_features)[0]

    response = {
        'prediction': 'Spam' if prediction == 1 else 'Not Spam',
        'probability': probability[prediction]
    }

    return jsonify(response)


@app.route('/predict-csv', methods=['POST'])
def predict_csv():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '' or not file.filename.endswith('.csv'):
        return jsonify({'error': 'Invalid file format'}), 400

    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)
    dataframe = dataLoader(filepath)

    if 'combined_text' not in dataframe.columns:
        dataframe['combined_text'] = dataframe[['Attachment Count', 'Attachment Extension', 'Email From', 'Email Subject']].apply(lambda x: ' '.join(x.dropna().astype(str)), axis=1)

    print("Dataframe before processing:\n", dataframe)

    predictions = []

    for index, row in dataframe.iterrows():
        row = pd.DataFrame([row])

        cleanData(row, 'combined_text')
        cleanData(row, 'Attachment Count')
        cleanData(row, 'Attachment Extension')
        cleanData(row, 'Email From')
        cleanData(row, 'Email Subject')

        print(f"Combined text after cleaning for row {index}:\n{row['combined_text'].iloc[0]}")

        processed_data = rem_stopwords_tokenize(row, 'combined_text')
        print(f"Combined text after stopwords removal for row {index}:\n{processed_data['combined_text'].iloc[0]}")

        processed_data = Lemmatization(processed_data, 'combined_text')
        print(f"Combined text after lemmatization for row {index}:\n{processed_data['combined_text'].iloc[0]}")

        processed_data = make_sentences(processed_data, 'combined_text')
        print(f"Combined text after making sentences for row {index}:\n{processed_data['combined_text'].iloc[0]}")

        processed_data.reset_index(drop=True, inplace=True)

        email_data = processed_data.loc[0, 'combined_text']
        print(f"Final processed combined_text for row {index}: {email_data}")

        if not email_data.strip():
            print(f"Warning: Processed combined_text for row {index} is empty.")
            email_features = vectorizer.transform([""])
        else:
            email_features = vectorizer.transform([email_data])

        prediction = model.predict(email_features)[0]
        probability = model.predict_proba(email_features)[0]

        response = {
            'Attachment Count': int(row['Attachment Count'].values[0]) if row['Attachment Count'].values[0] else "",
            'Attachment Extension': row['Attachment Extension'].values[0],
            'Email From': row['Email From'].values[0],
            'Email Subject': row['Email Subject'].values[0],
            'prediction': 'Spam' if prediction == 1 else 'Not Spam',
            'probability': probability[prediction]
        }

        predictions.append(response)

        print("Response for row {}:\n{}".format(index, response))

    return jsonify(predictions)


@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Flask!"})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if (path != "" and os.path.exists(app.static_folder + '/' + path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')