# MyCCangel.org Website

Welcome to the MyCCangel.org website repository. This project aims to create a comprehensive website using the Ionic framework and use data analyses tool to help user with advices.This project includes a Python-based Chatbot AI that utilizes advanced natural language processing (NLP) techniques to provide insights, answer user queries, and perform sentiment analysis. Below is an overview of the core features and functionality integrated into the chatbot:

# Disclaimer
The content provided on this website, including all text, graphics, images, and other material, is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always check the advice of your qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.

If you think you may have a medical emergency, call your doctor, go to the emergency department, or call emergency services immediately. 

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Core Functions](#core-functions)
- [Example Usage](Example-usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About the Project


# Key Features
Text Cleaning and Processing: The chatbot cleans and processes user input by removing unwanted characters, stopwords, and converting words to their base forms (lemmatization). This step ensures accurate data for NLP processing and model predictions.

Caching System: A cache mechanism efficiently stores intermediate data (e.g., previous user queries, fetched data) in a JSON file. This reduces redundant API calls and enhances the speed of responses, making interactions smoother.

PDF Analysis: The chatbot can extract and process text from PDF files to provide context-based answers. It breaks down the text into paragraphs, highlights key phrases, and retrieves relevant data related to user queries.

Internet Search for Contextual Expansion: By integrating Bing’s search API, the chatbot expands its knowledge base and provides more comprehensive answers by pulling in information from reliable online sources.

Sentiment Analysis: By assessing user questions, the chatbot determines the user’s emotional tone (positive, neutral, or negative) using a BERT-based sentiment analysis model. This analysis enables adaptive responses and empathy in chatbot interactions.

Summarization and QA: Using transformers, the chatbot summarizes long texts to provide concise answers. Additionally, a question-answering pipeline based on pre-trained NLP models extracts specific answers from context or summarized data.

# Core Functions
get_synonyms_for_list: Generates a list of synonyms for target words to broaden search queries and improve data extraction.

search_paragraphs_in_pdf: Parses PDF files to identify and highlight paragraphs containing the user’s query terms.

sentiment_analysis: Applies a BERT model to analyze user input for sentiment, facilitating empathetic responses tailored to user tone.

answer_question: Uses a question-answering pipeline to retrieve direct answers from contextually relevant text segments or summaries.

# Example Usage
Upon receiving a query like “What is the treatment for IBD?”, the chatbot:

Cleans the query text and extracts keywords.
Searches local PDF files for relevant information, then performs an internet search to gather external resources.
Combines and summarizes these findings to provide a concise, informative response.
Analyzes the sentiment of the response to tailor the delivery tone, ensuring a personalized user experience.


## Features

- **Responsive Design**: The website is designed to be fully responsive (windows, buttons and pages) and accessible on all devices.
- **Community Forums**: Users can participate in discussions and talk to the community.
- **Resource Directory**: 
- **User Authentication**: Secure login and registration for users from the comunity.

## Technologies Used

- **Ionic Framework**: For building a hybrid mobile and web application.
- **Angular**: As the primary web framework.
- **Firebase**: For backend services including authentication and database.
- **HTML5 & CSS3**: For structuring and styling the website.
- **TypeScript**: For writing robust and maintainable code.

## MIT License

Copyright (c) 2015-present Drifty Co.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the Repository**:
    ```bash
    $ git clone git clone https://github.com/myccangel/MyccAngelWeb.git
    ```
2. **Push**:
    ```bash
    $ cd myccangel
    $ git push
    
    ```
3. **Git logs**:
    ```bash
    $ git log
    
    ```
4. **Install Dependencies**:
    ```bash
    $ npm install
    $ npm install ionicons
    ```

5. **Run the Development Server**:
    ```bash
    $ ionic serve
    ```
6. **Create Pages**:
    ```bash
    $ ionic g page pages/'page name'
    ```    
7. **Create Components**:
    ```bash
    $ ionic g component components/'component name'
    ```   
    ```    
8. **Install ngrx**:
    ```bash
    $ npm install @ngrx/store --save
    $ npm install @ngrx/store-devtools --save
    ```   
    ```    
7. **Create Components**:
    ```bash
    $ ionic g component components/'component name'
    ```   
8. **Install firebase**:
    ```bash
    $ npm install @angular/fire firebase
    $ npm install @angular/fire firebase @ngrx/store-devtools

    ```   
9. **Create nest server**:
    ```bash
    $ npm i -g @nestjs/cli
    $ nest new project-name
    ```   
10. **Create resource**:
    ```bash
    $ nest g resource place/name
    ```   
11. **Install class validator/transformer**:
    ```bash
    $ npm i class-validator
    $ npm i class-transformer
    ``` 
12. **Install class validator/transformer**:
    ```bash
    $ npm test
    ```         
