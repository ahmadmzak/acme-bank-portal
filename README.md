# acme-bank-portal

## About

This is a dummy customer portal site for a bank. It uses MongoDB for its database, which is hosted on mLab.com

The backend uses Express and Mongoose. The frontend is done in React. Create-react-app was used to make the setup more convinient.

## Installation and Testing

Type "npm install" to install the backend dependencies and "cd client && npm install" to install the create-react-app dependencies. To run it on your node environment, type "npm start".

## Features

Currently there is no security, authentication, or authorization for the login. You just need a correct username to access the data. You can try "junior" for testing purposes.

## Project Structure

The root folder contains the server.js file for the Express server. For OS agnostic dependency installation and server commands, I added "install-client.js" and "start-client.js" respectively.

The React app is in the client folder. Each component is inside its own folder, together with any css file of the same name.

The build folder is for production code.
