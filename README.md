# AlmaBetter Backend Project 

## Get_Youtube_Subscribers
This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.


## API Endpoints 
1. **"/ "** -> This default route will render the "index.html file" when the app launches. http://localhost:3000/
   ![Screenshot 2024-02-17 152643](https://github.com/Saurabh-Chede/GET-SUBS/assets/82999803/47623523-6c83-4574-9b40-e8aa23625a91)

2. **"/subscribers "** -> This endpoint returns an array of all subscribers in the database. http://localhost:3000/subscribers  
  ![Screenshot 2024-02-17 150313](https://github.com/Saurabh-Chede/GET-SUBS/assets/82999803/5742ed6b-9659-475f-a3a5-868d3eff1090)

3. **"/subscribers/names "** -> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. http://localhost:3000/subscribers/names
   ![Screenshot 2024-02-17 150355](https://github.com/Saurabh-Chede/GET-SUBS/assets/82999803/1e9ac086-6c9a-4e50-875a-72d50c1aca75)

4. **"/subscribers/:id "** -> This returns the details of subscriber whose Id is provided in endpoint. http://localhost:3000/subscribers/:id  
   ![Screenshot 2024-02-17 150546](https://github.com/Saurabh-Chede/GET-SUBS/assets/82999803/971d889e-662a-4115-a020-204f36191445)


## Application Folder Structure
1. [src/app.js] -> For handling requests and responses.

2. [src/index.js] -> To connect and start the server.

3. [src/createDatabase.js] -> To create database on MongoDB.

4. [src/data.js] -> Data that has to be connnected to a database.

5. [src/models/subscribers.js] -> For the schema.
   
6. [src/index.html] -> The home page for the application.


## Installation Guide

You'll need to have **Node.js** and **MongoDB** installed on your computer in order to begin working on the project. 

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install <packageName>**.

Start the server by **node src/index.js**

## Dependencies
Following dependencie are needed to run this application: 

1. express

2. mongoose

## Deployment

Visit to see the working on Youtube : 

Web Deployment : https://get-youtube-subs-1w6c.onrender.com

## Created By

- Saurabh Chede
