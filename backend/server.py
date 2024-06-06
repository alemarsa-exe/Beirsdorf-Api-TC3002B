from flask import Flask, jsonify, send_from_directory, request
import pickle
import joblib
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
import os
from json_to_csv import json_to_csv
from pre_processing import dataLoader, cleanData, rem_stopwords_tokenize, Lemmatization, make_sentences

app = Flask(__name__, static_folder='../frontend/spam-detection-api/build')



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

    # Dev only
    print("Data al llegar: \n", data)

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
    print("Processed dataframed for stop words: \n", processed_data)
    processed_data = Lemmatization(processed_data, 'combined_text')
    print("Lemmatization dataframed for stop words: \n", processed_data)
    processed_data = make_sentences(processed_data, 'combined_text')
    print("Make sentences: \n", processed_data)


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
    print("Prediction:", response['prediction'])
    print("Probability:", response['probability'])

    return jsonify(response)


'''
    # NUEVA FUNCION
    #------------------------------

    # Combine relevant fields into a single text string
    email_data = processed_data["combined_text"]

    # Transform the text using the vectorizer BoW (Bag of Words)
    email_features = vectorizer.transform(email_data)

    # Make predictions
    predictions = model.predict(email_features)
    probabilities = model.predict_proba(email_features)

    # Create a list to store response for each email
    responses = []

    # Iterate over each prediction and probability
    for prediction, probability in zip(predictions, probabilities):
        response = {
            'prediction': 'Spam' if prediction == 1 else 'Not Spam',
            'probability': probability[prediction]
        }
        responses.append(response)

    # Print and return the response
    for i, response in enumerate(responses):
        print(f"Email {i + 1} - Prediction: {response['prediction']}, Probability: {response['probability']}")

    return jsonify(responses)

'''


def preprocess_email(email_data):
    # Realizar los pasos de preprocesamiento del texto del correo electrónico
    # (limpieza, tokenización, eliminación de stopwords, lematización, etc.)
    preprocessed_text = ...
    return email_data

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









if __name__ == '__main__':
    app.run()
