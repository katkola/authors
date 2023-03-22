const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api', AuthorController.index);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors); 
    app.get('/api/authors/:id', AuthorController.getOne);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);

    //TEST ONE AT A TIME IN POSTMAN!
    //for POST method Body, Raw, Json
}