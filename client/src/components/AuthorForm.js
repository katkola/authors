import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    Card,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    //const [state, useState] = useState([]);
    const {initialName, onSubmitProp, parentMessage} = props;
    const [author, setAuthor] = useState([]);
    const [message, setMessage] = useState(parentMessage)
    const [authorName, setName] = useState(initialName);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({authorName});
    }

    return(
        <Card>
            <form onSubmit={onSubmitHandler}>
                <h2>{parentMessage}</h2>
                {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                <FormControl variant='outlined'>
                    <InputLabel>Author name</InputLabel>
                    <OutlinedInput type="text" value={authorName} onChange={(e) => setName(e.target.value)} />
                    {errors.authorName ?
                        <p>{errors.authorName.message}</p>
                        : null
                    }
                </FormControl>
                <br />
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    )
}
export default AuthorForm;