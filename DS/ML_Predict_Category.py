import pandas as pd
import numpy as np
from nltk.tokenize import word_tokenize
from spacy.lang.en.stop_words import STOP_WORDS
df = pd.read_csv("/Users/Mariane/Documents/Giving/charity_data.csv")
df.head()

df = df[~df.isna()]
df.drop(columns = ['ein', 'tot_exp', 'admin_exp_p', 'fund_eff', 'fund_exp_p', 'program_exp_p', 'fscore', 'tot_rev', 'admin_exp', 'size', 'program_exp', 'fund_exp', 'leader_comp', 'leader_comp_p'], inplace = True)
df

import spacy
import string
from spacy.lang.en.stop_words import STOP_WORDS
from spacy.lang.en import English
import sklearn
from sklearn.base import TransformerMixin
from sklearn.feature_extraction.text import CountVectorizer,TfidfVectorizer
from spacy import displacy
from spacy import tokenizer
from sklearn.pipeline import Pipeline

punctuations = string.punctuation

nlp = spacy.load('en_core_web_sm')
stop_words = spacy.lang.en.stop_words.STOP_WORDS
parser = English()

def spacy_tokenicer(sentence):
    mytokens = parser(sentence)
    mytokens = [word.lemma_.lower().strip() if word.lemma_ != "-PRON-" else word.lower_ for word in mytokens]
    mytokens = [ word for word in mytokens if word not in stop_words and word not in punctuations ]
    return mytokens

class predictors(TransformerMixin):
    def transform(self, X, **transform_params):
        # Cleaning Text
        return [clean_text(text) for text in X]

    def fit(self, X, y=None, **fit_params):
        return self

    def get_params(self, deep=True):
        return {}

def clean_text(text):
    return text.strip().lower()

bow_vector = CountVectorizer(tokenizer = spacy_tokenicer, ngram_range=(1,1))
from sklearn.model_selection import train_test_split

X = df['description']
ylabels = df['category'] 

X_train, X_test, y_train, y_test = train_test_split(X, ylabels, test_size=0.3)
from sklearn.linear_model import LogisticRegression

classifier = LogisticRegression()

pipe = Pipeline([('cleaner', predictors()),
                 ('vectorizer', bow_vector),
                 ('classifier', classifier)])

pipe.fit(X_train,y_train)