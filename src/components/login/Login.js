import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import API from "../../API";
import { Wrapper } from "./Login.styles";
import { Context } from "../../context";
import Button from '../button/Button';

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'userName') {
            setUserName(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken, userName, password
            );
            setUser({sessionId: sessionId.session_id, userName});

            navigate(-1);
        } catch (error) {
            setError(true);
        }
        setUserName('');
        setPassword('');
    }
    return (
        <Wrapper>
            {error && <div className='error'>There was an error!</div>}
            <label htmlFor='username'>Username:</label>
            <input id='username' type='text' value={userName} name='userName' onChange={handleChange} />

            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' value={password} name='password' onChange={handleChange} />

            <Button text='Login' callback={handleSubmit} />
        </Wrapper>
    )
}
