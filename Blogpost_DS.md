# Data Science

## Get Data Set

There were two sources to get Data from: Charity Navigator (US) and DZI (Deutsches Zentralinstitut für soziale Fragen, German). Charity Navigator offered an API to get data, for DZI we needed to scrap the data (thanks to Max and Zubin). The files we got from the API were quite hard to format to a clean data frame so in the end we found a clean data frame in Kaggle. 

## Cleaning Data
Once we had the data in a readable format for us (json and csv) 
First we imported the data in Jupyter notebook, imported Pandas and NumPy libraries and proceed to analyzed the type of data and information we wanted to work with and the columns we consider relevant for the project.
Base on it we created a data frame and continue to eliminate the columns we would not work for our project. We reorder the columns by the importance of the necessary data for the project and rename some columns, then we check there was no duplicate, or incomplete data within our data frame. It was also necesary to check and clean empty rows in the file, in some cases the rows were not with the complete information for in which case we decided to eliminate the whole row. 


### Charity Navigator
First we decided to work with Charity Navigator API (https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=1397) but in order to get the data we had to pay subscription to the API so then we try scrapp some data but it was still dificult in our level. The API offers some free data as a try but we notice that the free data offered was not enought for what we were looking for the porject. We follow mentor advise and we found a satisfactory data base in Kaggle.

### DZI Data

The data we got scrapped from the DZI webpage (https://www.dzi.de/organisation/?keyword=&cat=5) were several json files for each organisation. To create a dataframe with all organisations we used the code in the file Combine_Json_files. The challenge was to go through every file of the 230 organisations. Zubin helped us in the end to create the data frame.

## Explorative Data Analytics

We used pandas and numpy to make some statistical analysis of the data set from Charity Navigator and DZI. 
We initially explore the data by creating a data frame and then visualizing the type f data we had, then the number of rows and columns and the content of every column. We also play with some code in order to just make use of what we learned in the previous phase.
We use conditional function in order to get the highest scores from charities in different categories. (See procees in "Giving Data Cleaning and Analysis.ipyn" file)
We investigated and created boxplots for different categories like scores by categories. (see results and interpreations in Jupyter Notebook)
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
