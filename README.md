# FriendFinder
This is a full-stack application that will take in information from users' surveys and display the name and photo of the user with the best overall match.  This is basically a compatibility-based "FriendFinder" application.  The answers from the survey are compared with those from other users.

## What the project does
* Survey contains 10 questions to screen for 'best match' friends.
* Each question is answered on a scale from 1 to 5 on the degree to which the user agrees or disagrees.
* The user opts to take the Survey from the home page, provides their name and email address, then answers the questions.
* The user submits the survey. The application deterimines which friend is the best match after reviewing all the answers.
* The user is provided with the name and a picture of thier best match.

## Design & Technology
* This project will meet these design requirements:
    * 'server.js' contains the npm packages:  express, body-parser and path.
    * 'htmlRoutes.js' file contains two routes: 
        *  A GET route to /survey that displays the survey page.
        * A default (catch-all) route that leads to home.html which displays the home page.
    * 'apiRoutes.js' file contains two routes:
        *  A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
        *  A POST routes /api/friends. This is used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
    * Application data is saved inside of app/data/friends.js as an array of objects. 
* Key technologies used to build this application are:
    * HTML and CSS -- Provides the means to create structured documents with style
    * Bootstrap -- Responsive Front-end framework
    * Node.js -- Server-side JavaScript environment 
    * Express.js -- Node.js web server framework
    * Body Parser -- (Express middleware) reads a form's input and stores it as a JavaScript object accessible through "req.body"
    * Path module -- (Node.js) provides a way of working with directories and file paths
    * .gitignore -- node_modules
    * Heroku -- Cloud Application Platform

## Challenges
* Node-Express technology requires some in-depth understanding and practice in how the back-end serves the front-end. 
* Implementing NPM packages requires some trial and error.

## Link to [My Portfolio] 
(https://jonathanteeter.github.io/jtPortfolio/)