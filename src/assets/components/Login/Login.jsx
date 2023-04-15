import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app)

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // password validation
        setError('')
        setSuccess('')
        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Please add at least one uppercase.');
            return;
          } else if (password.length < 6) {
            setError('Please type at least 6 characters.');
            return;
          }
          signInWithEmailAndPassword(auth, email, password)
          .then(result=>{
                const loggedUser = result.user;
                console.log(loggedUser);
                if(!loggedUser.emailVerified){
                    alert('Please Check your Email for verification ')
                    return;
                }
                setSuccess('User login successful.')
                setError('')
          })
          .catch(error=>{
            setError(error.message)
          })
    }

    const handleResetPassword = event =>{
        const email = emailRef.current.value;
        if(!email){
            alert('Please provide your email address for Reset password')
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert('Please Check your Email')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2 className='mt-2'>Please Login</h2>
                <div className="mb-3">
                    <br />
                    <input ref={emailRef} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder='Enter Your Email' />
                </div>
                <div className="mb-3">
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" required placeholder='Enter your Password' />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" value="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p><small>Forget Password? Please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
            <p><small>New to this website? Please <Link to="/register">Register</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;