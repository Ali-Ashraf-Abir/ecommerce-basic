import { Result } from 'postcss';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';

const Login = () => {

    const [error,setError]=useState('')
    const {signIn}=useContext(AuthContext)

    const navigate=useNavigate()
    const location=useLocation()


    const from= location.state?.from?.pathname || '/'

    const handleLogin=(event)=>{
        
        event.preventDefault()
        const form=event.target
        const email=event.target.email.value
        const password=event.target.password.value


        setError('')
        signIn(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
            form.reset
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })


    }

    return (
        <div>
                    <div className='form-container'>
            <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                <div className="">
                <p>Email</p>
                <input className='form-input' type='email' name='email' placeholder='' required></input>
                </div>
                <div className="">
                <p>Password</p>
                <input className='form-input' type='password' name='password' placeholder='' required></input>
                </div>
                <div className="">

                <button className='submit-button' type="submit">Login</button>
                </div>
                <p>Don't have an acount?<Link to='signup'>signup</Link></p>
                {(error)?<small>{error}</small>:''}
            </form>
            
        </div>
        </div>
    );
};

export default Login;