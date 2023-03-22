import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { Button, Table, TableHead, TableRow, TableBody, TableCell, CardActions } from '@mui/material';

const AuthorList = (props) => {
    const { removeFromDom, authors, setAuthors } = props;
    const styles = {

        Button: {
            backgroundColor: "blue"
        }
    }

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err))
    }


    return (
        <Table style={{width:"50%", backgroundColor:"lightGrey"}}>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    authors.map((author, index) => {
                        return (<TableRow key={index}>
                            <TableCell><Link style={{textDecoration: "none"}} to={`/authors/${author._id}`}> {author.authorName} </Link></TableCell>
                            <TableCell>
                                <Button variant="contained"><Link to={`/authors/edit/${author._id}`}>Edit</Link></Button>
                                <DeleteButton authorId={author._id} successCallback={() => deleteAuthor(author._id)} />
                            </TableCell>
                        </TableRow>)
                    })
                }
            </TableBody>
        </Table>
    )
}
export default AuthorList;