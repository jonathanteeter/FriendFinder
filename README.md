# FriendFinder

## Introduction
This is a full-stack application that will take in information from users' surveys and then display the name and photo of the user with the best overall match.

## What the project does
This a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Requirements
* Survey contains 10 questions to screen for 'best match' friends.
* Each question is answered on a scale from 1 to 5 on the degree to which the user agrees or disagrees.
* The user opts to take the Survey from the home page, provides their name and email address, then answers the questions.
* The user submits the survey. The app provides the user which friend is the best match by reviewing the closest number of answers.
* 'server.js' contains the npm packages:  express, body-parser and path.
* 'htmlRoutes.js' file contains two routes: 
    *  A GET Route to /survey which should display the survey page.
    * A default, catch-all route that leads to home.html which displays the home page.
* 'apiRoutes.js file contains two routes:
    *  A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
    *  A POST routes /api/friends. This is used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
* Application data is saved inside of app/data/friends.js as an array of objects. 
* Deploy to Heroku.

## Why the project is useful
This was an exercise in using these web technologies:  
* Node.js 
* Express.js (Node.js web server framework) that builds single-page, multi-page, or hybrid web applications
* Body Parser (Express middleware) that reads a form's input and stoires it as a JS object accessible through req.body
* Path module (Node.js) that provides a way of working with directories and file paths
* JavaScript with jQuery library

## Limitations
None

## Challenges
- Node.js is a back-end technology that required practice (like with anything) to get it.
- Additional use of NPM packages was useful but required some trial and error.

## Link to [My Portfolio](https://teeterjm58.github.io/Basic-Portfolio/portfolio.html)

