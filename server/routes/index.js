// import Users from '../controllers/user';
// import Books from '../controllers/book';

import Boards from '../controllers/boards'

export default (app) => {

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Status API!',
}));

app.post('/api/users', Users.signUp); // API route for user to signup
app.post('/api/users/:userId/books', Books.create); // API route for user to create a book
app.get('/api/books', Books.list); // API route for user to get all books in the database
app.put('/api/books/:bookId', Books.modify); // API route for user to edit a book
app.delete('/api/books/:bookId', Books.delete); // API route for user to delete a book

const notes = require('../controllers/note.controller.js');

// Create a new Note
app.post('/notes', notes.create);

// Retrieve all Notes
app.get('/notes', notes.findAll);

// Retrieve a single Note with noteId
app.get('/notes/:noteId', notes.findOne);

// Update a Note with noteId
app.put('/notes/:noteId', notes.update);

// Delete a Note with noteId
app.delete('/notes/:noteId', notes.delete);
}
    
get 'users/index'
resources :users
resources :boards
resources :tiles
};