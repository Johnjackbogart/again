//import statements
//honestly just commenting to get in the hang of comments
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//i think if I remember this returns just heyo when at root url
app.get('/', (req, res) => {
	res.send('heyo');
});

//this will log the message to the terminal when port 5000 is active I think?
app.listen(PORT, () => {
	console.log('server up and running on port ${PORT}'); 
});
