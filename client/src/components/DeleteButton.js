import React from 'react'
import axios from 'axios';
import {Button} from '@mui/material';

const DeleteButton = (props) => {
    const { authorId, successCallback } = props;
    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <Button variant="outlined" onClick={deleteAuthor}>
            Delete
        </Button>
    )
}
export default DeleteButton;
