from flask import Flask, jsonify, send_from_directory, request
import pickle
import joblib
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
import os

app = Flask(__name__, static_folder='../frontend/spam-detection-api/build')



# Cargar el modelo y el vectorizador BoW
with open('./models/RandomForest_bow.pkl', 'rb') as file:
    model = pickle.load(file)

with open('bow_vectorizer.pkl', 'rb') as file:
    vectorizer = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    required_fields = ["Attachment Count", "Attachment Extension", "Email From", "Email Subject"]
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing one or more required fields in JSON'}), 400

    email_from = data["Email From"]
    email_subject = data["Email Subject"]
    #close_notes = data["closeNotes"]

    # Combinar campos relevantes en una sola cadena de texto
    email_data = f"{email_from} {email_subject}"

    # Preprocesar el texto del correo electrónico
    preprocessed_text = preprocess_email(email_data)

    # Transformar el texto utilizando el vectorizador BoW
    email_features = vectorizer.transform([preprocessed_text])

    # Realizar la predicción
    prediction = model.predict(email_features)[0]
    probability = model.predict_proba(email_features)[0]

    # Devolver la respuesta JSON
    response = {
        'prediction': 'Spam' if prediction == 1 else 'Not Spam',
        'probability': probability[prediction]
    }

    print("Response: ", response)

    return jsonify(response)

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
