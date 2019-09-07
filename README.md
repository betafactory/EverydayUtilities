# Everyday Utilities

Your Everyday Utilities!

![Everyday Utilities](https://user-images.githubusercontent.com/11073943/64046419-76775180-cb89-11e9-8630-89bfcfff0319.png)

## Introduction

Q) Why should you be using these utilities ?

 - Tired of clicking the same spot on your screen again and again? 
 - Got bored of typing the same phrase over and over again during your day? 

A) Repeat yourself with some intelligence, using **everyday utilities**.

## Requirements

 - Python 2.7
 - Pip
 - NPM (Basic Users)
 - Some TPL's (Listed [here](https://github.com/souravbadami/utilities/blob/master/requirements.txt))

## How to use

Install project dependencies based on usage:
 - For advanced users:
   - Install core dependencies using `pip install -r requirements.txt` from project root directory.
 - For basic users:
   - Install core and client dependencies using `pip install -r requirements.txt; cd client; npm install` from project root directory.

### Advanced (CLI)

 - Run `python -m core.<utility-name> <arguements>` from project root directory.

### Basic (EverydayUtilities Dashboard)

 - Start the server using `python main.py`
 - Switch to client directory using `cd client`
 - Start dashboard using `npm start`
 - Navigate your web browser to http://localhost:3000

## Table of contents

 - [SimpleHTTPServerWithUpload](https://github.com/souravbadami/utilities/blob/master/core/SimpleHTTPServerWithUpload.py) - GET/POST/UPLOAD Quick Server.
 - [GoogleImagesDownloader](https://github.com/souravbadami/utilities/blob/master/core/GoogleImagesDownloader.py) - Download Images From Google.
     - argv1: output-directory
     - argv2: search query (use quotes for multiple terms)
 
## Todo

 - Search & Download Books
     - Name
     - Author
