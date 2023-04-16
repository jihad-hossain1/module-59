import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebase.config';
import { Link } from 'react-router-dom';
// import { FormCheck } from 'react-bootstrap';

const auth = getAuth(app)

const Loging = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const emailRef = useRef();
    const [visibleBTN, setVisibleBTN] = useState(false);

    const handleForm = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        setSuccess('');
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add at leatest on uppercase');
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('must be on special character included')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if (!loggedUser.emailVerified) {
                    
                }
                setSuccess('user login successfull')
                setError('')
            })
            .catch(error => {
            setError(error.message)
        })
    }

    const handleResetPassword = (event) => {
        const email = emailRef.current.value
        // console.log(email);
        if (!email) {
            alert('Please provide your email address to reset password')
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email')
            })
            .catch(error => {
            setError(error.message)
        })
    }

    return (
        <div className='text-center'>
            <form onSubmit={handleForm} className='space-y-2 shadow-md inline-block rounded px-8 py-3 border'>
                <h2 className='my-5 text-xl font-semibold'>Please logIn</h2>
                <input type="email" ref={emailRef} placeholder="Type Email" className="input input-bordered input-success w-full max-w-xs" name='email' required/>
                <br />
                <input type={visibleBTN ? 'text' : "password"} placeholder="Type Password" className="input input-bordered input-success w-full max-w-xs" name="password" required />
                <button onClick={() => setVisibleBTN(!visibleBTN)}>
                    {
                        visibleBTN ? <button className='bg-blue-300 rounded px-2'>Hide</button> : <button className='bg-blue-300 rounded px-2'>Visible</button>
                    }
                </button>
                {/* <FormCheck></FormCheck> */}
                <br />
                <button className='rounded px-1 bg-purple-100 '>Submit</button>
            </form>
            <p>
                Forget your password ?
                <button onClick={handleResetPassword} className='text-blue-500 px-1 rounded'>
                    reset password
                </button>
            </p>
            <p>
                You have dont  Please create an account ? <Link to='/register'><span className='text-blue-500'>
                Register
                </span></Link>
            </p>
            <p className='text-red-600'>
                {error}
            </p>
            <p className='text-green-500'>
                {success}
            </p>

        </div>
    );
};

export default Loging;