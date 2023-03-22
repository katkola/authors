import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link, useNavigate, useParams } from "react-router-dom";

const CreateAuthor = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createAuthor = authorParams => {
        

        axios.post('http://localhost:8000/api/authors', authorParams)
        .then(res=>{
            setErrors([]);
            console.log(res);
            navigate("/authors");
        })
        .catch(err=>{
            setErrors(err.response.data.errors);
        })
    }

    return(
        <div>
            <h1>Add a new Author:</h1>
            {<AuthorForm onSubmitProp={createAuthor} initialName={""}/>
            }
        </div>
    )
}
export default CreateAuthor;