# Importar las librerias que se necesitan

import pandas as pd
from nltk.corpus import stopwords
import re
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize


def dataLoader(csv_file):
    # Cargar datos
    data = pd.read_csv(csv_file, delimiter=';', quoting=3, skipinitialspace=True)

    # Quitar valores nulos
    data = data.fillna('')

    # Concatenación de los datos en una sola columna
    data['combined_text'] = data[['Attachment Count', 'Attachment Extension', 'Email From', 'Email Subject']].astype(
        str).agg(' '.join, axis=1)

    # Only for development
    # print(data.info())
    # print(data.head())

    return data


# Clean data
def cleanData(data, name):
    data[name] = data[name].astype(str)
    data[name] = data[name].str.lower()
    # Quitar hashtags
    data[name] = data[name].apply(lambda x: re.sub(r'\B#\S+', '', x))
    # Quitar enlaces
    data[name] = data[name].apply(lambda x: re.sub(r"http\S+", "LINK", x))
    # Quitar caracteres especiales
    data[name] = data[name].apply(lambda x: ' '.join(re.findall(r'\w+', x)))
    # Quitar espacios múltiples
    data[name] = data[name].apply(lambda x: re.sub(r'\s+', ' ', x, flags=re.I))
    # Quitar letras individuales
    data[name] = data[name].apply(lambda x: re.sub(r'\s+[a-zA-Z]\s+', '', x))
    # Quitar identificadores de Twitter
    data[name] = data[name].apply(lambda x: re.sub('@[^\s]+', '', x))


# Remove Stop Words
def rem_stopwords_tokenize(data, name):
    # Define the initial set of English stopwords
    stop_words = set(stopwords.words('english'))
    stop_words.update(stopwords.words('german'))
    stop_words.update(stopwords.words('russian'))
    stop_words.update(stopwords.words('french'))
    stop_words.update(stopwords.words('greek'))
    stop_words.update(stopwords.words('italian'))
    stop_words.update(stopwords.words('portuguese'))
    stop_words.update(stopwords.words('spanish'))
    stop_words.update(stopwords.words('arabic'))

    # Caracteres japoneses
    japanese_stop_words = set(["の", "に", "は", "を", "た", "が", "で", "て", "と", "し", "れ", "さ"])
    stop_words.update(japanese_stop_words)

    # Caracteres chinos
    chinese_stop_words = set(
        ["的", "一", "是", "了", "我", "不", "在", "人", "有", "他", "这", "个", "们", "中", "来", "上", "大", "为",
         "和", "国"])

    stop_words.update(chinese_stop_words)

    def getting(sen):
        example_sent = sen
        word_tokens = word_tokenize(example_sent)
        filtered_sentence = [w for w in word_tokens if not w in stop_words]
        return filtered_sentence

    x = []
    for i in data[name].values:
        x.append(getting(i))
    data[name] = x
    return data


# Lemmatization
def Lemmatization(data, name):
    lemmatizer = WordNetLemmatizer()
    stop_words = set(stopwords.words('english'))

    def getting2(words):
        lemmatized_output = [lemmatizer.lemmatize(w) for w in words]
        without_single_chr = [word for word in lemmatized_output if len(word) > 2]
        cleaned_data_title = [word for word in without_single_chr if not word.isnumeric()]
        return cleaned_data_title

    data[name] = data[name].apply(getting2)
    return data


# Make sentences
def make_sentences(data, name):
    data[name] = data[name].apply(lambda x: ' '.join([i + ' ' for i in x]))
    data[name] = data[name].apply(lambda x: re.sub(r'\s+', ' ', x, flags=re.I))
    return data
