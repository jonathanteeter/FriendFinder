# FriendFinder
This is a full-stack application that will take in information from users' surveys and display the name and photo of the user with the best overall match.  This is basically a compatibility-based "FriendFinder" application.  The answers from the survey are compared with those from other users.

## Design & Technology
* Survey contains 10 questions to screen for 'best match' friends.
* Each question is answered on a scale from 1 to 5 on the degree to which the user agrees or disagrees.
* The user opts to take the Survey from the home page, provides their name and email address, then answers the questions.
* The user submits the survey. The app provides the user which friend is the best match by reviewing the closest number of answers.
* Here are the Design requirements:
    * 'server.js' contains the npm packages:  express, body-parser and path.
    * 'htmlRoutes.js' file contains two routes: 
        *  A GET route to /survey that displays the survey page.
        * A default (catch-all) route that leads to home.html which displays the home page.
    * 'apiRoutes.js' file contains two routes:
        *  A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
        *  A POST routes /api/friends. This is used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
    * Application data is saved inside of app/data/friends.js as an array of objects. 
    * Deploy to Heroku.
* Key technologies used to build this application are:
    * Node.js 
    * Express.js (Node.js web server framework) that builds single-page, multi-page, or hybrid web applications
    * Body Parser (Express middleware) that reads a form's input and stores it as a JavaScript object accessible through "req.body"
    * Path module (Node.js) that provides a way of working with directories and file paths
    * JavaScript with jQuery library
    * Heroku (Cloud Application Platform)

## Challenges
* Node-Express technology requires some in-depth understanding and practice in how the back-end serves the front-end. 
* Implementing NPM packages requires some trial and error.

## Link to [My Portfolio] 
(https://jonathanteeter.github.io/jtPortfolio/)