import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }
    const handleEmail = (event) => {
        // console.log(event.target.value);
       setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        console.log(event.target.value);
    }
    return (
        <div className='text-center'>
            <h2 className='font-semibold text-xl underline text-blue-600'>Please Register</h2>
            <form onSubmit={handleSubmit} className='my-5'>
                <input onChange={handleEmail} className='my-1 rounded border p-1' type="text" name='email' placeholder='Your email' />
                <br />
                <input onBlur={handlePasswordBlur} className='my-1 rounded border p-1' type="password" name='password' placeholder='Your pasword' />
                <br />
                <button className='text-sm rounded bg-blue-100 hover:bg-blue-400 px-1'>Submit</button>
            </form>
        </div>
    );
};

export default Register;