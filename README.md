# Assignment for Internship position at “Mobilicis India Private Limited” 

### Given task
Create a “Node.js” Application using Express Framework and MongoDB Database and Connect it to your Frontend Application (Which can be developed using either React or Nextjs)

You must fetch the following data using the API and display it on the frontend in a table format:
1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. Male Users which have phone price greater than 10,000.
3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. Show the data of top 10 cities which have the highest number of users and their average income.

### Implementation

#### Data Uploading to MongoDB
I used Mongo Compass's feature of import json file to upload the data into the DB.

#### APIs
I built 5 api endpoints for 5 different filters given to me. Named: 
- '/api/queryOne'
- '/api/queryTwo'
- '/api/queryThree'
- '/api/queryFour'
- '/api/queryFive'
 All of these endpoints are creating a MongoDB query according to the given criterias and then executing it on the Schema created with help of the json file given.

 The query returns an Array of json objects containing the requested data.
 MongoDB itself filters out the data on the basis of the given query.
 The returned data is sent to the client side for displaying.

 #### Frontend
 Frontend is simply Five Button containing to hit the five different api endpoints.
 The client side sends a GET request to the respective endpoints and recieves a json object array.
 This response is then stored into a state and the table is rendered accordingly.

 ### Important Files and Functions
 - '/src/model/sales.ts'
 This file contains the schema of the MongoDB.

 - '/src/lib/dbConnect.js'
 It contains function to connect to the MongoDB server and creates a global connection for the application. It prevents creation of multiple instances of the connection to the MongoDB Server to prevent load on the server and issues with the NextJS.

- '/src/api'
 Contains all the api end points of the server

- '/src/pages/index.js'
Contains the frontend code of the application.

### Technologies Used in the project
- NextJS: For Frontend and Backend of the application
- TailwindCSS: For CSS Styling
- MongoDB: For hosting the database