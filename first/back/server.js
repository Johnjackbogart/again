//import statements
//honestly just commenting to get in the hang of comments
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
require('dotenv').config(); //allows us to load environment variables

//literally just going to add some comments to test if my ssh agent is working

//middleware has to go in front of the routes i think because of how node handles stuff
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up mongo connection to db
const MONGO_URI = process.env.MONGO_URI;
mongoose
	.connect(MONGO_URI, {useNewUrlParser: true})
	.then(()=> console.log('connected'))
	.catch(e => console.log('error, not connected'));

//i think if I remember this returns just heyo when at root url
app.get('/', (req, res) => {
	res.send('heyo');
});

//accepts user info and returns it
app.post("/user", (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

//this will log the message to the terminal when port 5000 is active I think?
app.listen(PORT, () => {
	console.log('server up and running on port ${PORT}'); 
});
