import React from 'react';
import { Link } from 'react-router-dom';

const RegisterBs = () => {
    const handleWithBs = (event) => {
        event.preventDefault();
        const form = event.target;
        const getEmail = form.email.value;
        const getPassword = form.password.value;
        console.log(getEmail, getPassword);
    }
    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleWithBs}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" required/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
            
        </div>
    );
};

export default RegisterBs;