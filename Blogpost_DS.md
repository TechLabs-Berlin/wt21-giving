# Data Science

## Get Data Set

There were two sources to get Data from: Charity Navigator (US) and DZI (Deutsches Zentralinstitut für soziale Fragen, German). Charity Navigator offered an API to get data, for DZI we needed to scrap the data (thanks to Max and Zubin). The files we got from the API were quite hard to format to a clean data frame so in the end we found a clean data frame in Kaggle. 

## Cleaning Data

### Charity Navigator

### DZI Data

The data we got scrapped from the DZI webpage (https://www.dzi.de/organisation/?keyword=&cat=5) were several json files for each organisation. To create a dataframe with all organisations we used the code in the file Combine_Json_files. The challenge was to go through every file of the 230 organisations. Zubin helped us in the end to create the data frame.

## Explorative Data Analytics

We used pandas and numpy to make some statistical analysis of the data set from Charity Navigator and DZI. 
We investigated and created boxplots for different categories like scores by catories. (see results and interpreations in Jupyter Notebook)
We decided to extract top ten lists that could be useful for the app like Top ten list for each categories and in total so that the user can find the best scored charities directly.

## Machine Learning Recommendation System

We had different ideas how to make use of Machine Learning to work with the data

* To recommend matching charities based on users' past giving behavior (problem: no user data available)
* To train model with input of descriptions to predict category or score (might be useful to categorize new charities for app)
* Content based recommendation: Recommend charities based on a text by the user describing his/her preferences about donating (e.g. Donate for animals in )

We decided to go for the last options so the requirement was to build a machine learning algorithm and prepare the text data for that.
We decided to use Spacy as it's a library which provides a lot of models for NLP (natural language processing) and comes with pre trained models

## Libraries used

* Pandas
* Numpy
* Seaborn
* Matplotlib
* NLTK
* Spacy