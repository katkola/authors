const Author = require('../models/author.model');

module.exports = {
    index: (request, response) => {
        response.json({    
            //test callback
            message: "Hello World"
        });
    },
    //must have createObjectName or createOne?? to not crash
    createAuthor: (request, response) => {
        const {authorName} = request.body;
        Author.create({
            authorName: authorName
        })
        .then(author=>response.json(author))
        .catch(err => response.status(400).json(err))
    },
    getAllAuthors: (request, response) => {
        Author.find({})
        .then(authors => {
            console.log(authors);
            response.json(authors);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
    },
    getOne: (request, response) => {
        Author.findOne({_id: request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
    },
    updateAuthor: (request, response) => {
        Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
            .then(updatedAuthor => response.json(updatedAuthor))
            .catch(err => response.json(err))
    },
    deleteAuthor: (request, response) => {
        Author.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
}