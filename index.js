// install the package (requires internet)
const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
// create the server
const PORT = 5000;
const server = express();

server.use(cors({
    origin: '*'
}));

server.use('/book', bookRoutes); // localhost:5000/book/home
server.use('/user', userRoutes); // localhost:5000/user/home

// ! Practice Assignment
// create a simple API
// for movies
// id, title, rating

// GET /movie/ (list all movies)
// GET /movie/id/:id (find movie by id)
// GET /movie/title/:title (find movie by title)

// for users
// id, username

// GET /user/ (list all users)
// GET /user/username/:username (find user by id)

// listen at a port
server.listen(PORT, function() {
    console.log(`listening at port ${PORT}`)
});


// bookstore
// MVC - model, view, controller