from flask import Flask, jsonify, send_from_directory, request
import pickle
import pandas as pd
import os
from json_to_csv import json_to_csv
from pre_processing import dataLoader, cleanData, rem_stopwords_tokenize, Lemmatization, make_sentences
from csv_to_json import csv_to_json

app = Flask(__name__, static_folder='../frontend/spam-detection-api/build')

UPLOAD_FOLDER = 'uploads'

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


# Cargar el modelo y el vectorizador BoW
with open('./models/RandomForest_bow.pkl', 'rb') as file:
    model = pickle.load(file)

with open('bow_vectorizer.pkl', 'rb') as file:
    vectorizer = pickle.load(file)


# Ruta para un solo json
@app.route('/predict-single', methods=['POST'])
def predict():
    # Get data from json
    data = request.get_json()

    # Validate fields in json
    required_fields = ["Attachment Count", "Attachment Extension", "Email From", "Email Subject"]
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing one or more required fields in JSON'}), 400

    #print("Data al llegar: \n", data)

    # Convert data to csv
    json_to_csv(data, 'output.csv')

    # Loading dataframe
    dataframe = dataLoader('output.csv')

    # Dev only
    #print("Dataframe before cleaning: \n", dataframe)

    # Clean all columns
    cleanData(dataframe, 'combined_text')
    cleanData(dataframe, 'Attachment Count')
    cleanData(dataframe, 'Attachment Extension')
    cleanData(dataframe, 'Email From')
    cleanData(dataframe, 'Email Subject')
    #print("Dataframe after cleaning: \n", dataframe)

    # Processed data for stop words
    processed_data = rem_stopwords_tokenize(dataframe, 'combined_text')
    #print("Processed dataframed for stop words: \n", processed_data)
    processed_data = Lemmatization(processed_data, 'combined_text')
    #print("Lemmatization dataframed for stop words: \n", processed_data)
    processed_data = make_sentences(processed_data, 'combined_text')
    #print("Make sentences: \n", processed_data)


    # v2 de la nueva funcion
    # Extracting the relevant fields from the single row
    email_data = processed_data.loc[0, 'combined_text']

    # Transform the text using the vectorizer BoW (Bag of Words)
    email_features = vectorizer.transform([email_data])

    # Make predictions
    prediction = model.predict(email_features)[0]
    probability = model.predict_proba(email_features)[0]

    # Creating the response
    response = {
        'prediction': 'Spam' if prediction == 1 else 'Not Spam',
        'probability': probability[prediction]
    }

    # Printing and returning the response
    #print("Prediction:", response['prediction'])
    #print("Probability:", response['probability'])

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

    print("Dataframe:\n", dataframe)

    predictions = []

    for index, row in dataframe.iterrows():
        # Clean data
        cleanData(row, 'combined_text')
        cleanData(row, 'Attachment Count')
        cleanData(row, 'Attachment Extension')
        cleanData(row, 'Email From')
        cleanData(row, 'Email Subject')

        # Process text data
        processed_data = rem_stopwords_tokenize(row, 'combined_text')
        processed_data = Lemmatization(processed_data, 'combined_text')
        processed_data = make_sentences(processed_data, 'combined_text')

        # Extract text from processed data
        email_data = processed_data.loc[0, 'combined_text']

        # Transform the text using the vectorizer BoW (Bag of Words)
        email_features = vectorizer.transform([email_data])

        # Make predictions
        prediction = model.predict(email_features)[0]
        probability = model.predict_proba(email_features)[0]

        # Creating the response for each row
        response = {
            'original_row': row.to_dict(),
            'prediction': 'Spam' if prediction == 1 else 'Not Spam',
            'probability': probability[prediction]
        }

        # Append the response to predictions list
        predictions.append(response)

    # Returning JSON response with all predictions
    return jsonify(predictions)


@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Flask!"})


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
