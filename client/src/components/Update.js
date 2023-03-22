import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [author, setAuthor] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+id)
            .then((res)=>{
                console.log(author);
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[] )

    const updateAuthor = authorParams => {
        axios.put('http://localhost:8000/api/authors/' + id, authorParams)
        .then(res => {
            console.log(res);
            navigate("/authors");
        })
        .catch()
    }

    return(
        <div>
            <h1>Edit this Author</h1>
            {
                loaded&&<AuthorForm onSubmitProp={updateAuthor} initialName={author.authorName}/>}
        </div>
    )
}
export default Update;