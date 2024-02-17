# AlmaBetter Backend Project 

## Get_Youtube_Subscribers
This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.


## API Endpoints 
1. **"/ "** -> This default route will render the "index.html file" when the app launches. http://localhost:3000/

2.![Screenshot 2024-02-17 141717](https://github.com/Saurabh-Chede/GET-SUBS/assets/82999803/1c604ab5-4987-4899-b9fa-649bd0d6049f)

## Application Folder Structure
1. [src/app.js] -> For handling requests and responses.

2. [src/index.js] -> To connect and start the server.

3. [src/createDatabase.js] -> To create database on MongoDB.

4. [src/data.js] -> Data that has to be connnected to a database.

5. [src/models/subscribers.js] -> For the schema.
   
6. [src/index.html] -> The home page for the application.
