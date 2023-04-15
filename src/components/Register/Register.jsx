import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase.config';
import { ready } from 'localforage';

const auth = getAuth(app)

const Register = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        // validate
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add at leatest on uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two')
            return;
        }
        else if (password.length) {
            setError("Please add at least 6 character")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('Successfully account has been created..')
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
                setSuccess('');
            })
    }
    const handleEmail = (event) => {
        // console.log(event.target.value);
    //    setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
    }
    return (
        <div className='text-center'>
            <h2 className='font-semibold text-xl underline text-blue-600'>Please Register</h2>
            <form onSubmit={handleSubmit} className='my-5'>
                <input onChange={handleEmail} className='my-1 rounded border p-1' type="text" name='email' placeholder='Your email' required/>
                <br />
                <input onBlur={handlePasswordBlur} className='my-1 rounded border p-1' type="password" name='password' placeholder='Your pasword' required/>
                <br />
                <button className='text-sm rounded bg-blue-100 hover:bg-blue-400 px-1'>Submit</button>
            </form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;