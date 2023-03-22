import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, Paper} from '@mui/material';
import AuthorList from './AuthorList';
    // Card, CardContent, Paper,
    // FormControl,
    // InputLabel,
    // OutlinedInput,
    // Button, 
    // StylesProvider

const Main = (props) => {
    const[authors, setAuthors] = useState([]);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                setAuthors(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[] )

    const updatePage = newAuthor =>{
        setAuthors([...authors, newAuthor]);
        console.log(newAuthor);
    }
    
    return (
        <div elevation={3}>
            <h2>Favorite Authors</h2>
            <Link to={`/authors/new`}>Add an Author</Link>
            <p>We have quotes by:</p>
            <AuthorList authors={authors} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;