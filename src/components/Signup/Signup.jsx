import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';
import './Signup.css'


const Signup = () => {


    const[confirmError,setConfirmError]=useState('')

    const {createUser}=useContext(AuthContext)

    const handleSignup=event=>{

        event.preventDefault()

        const username=event.target.username.value
        const email=event.target.email.value
        const password=event.target.password.value
        const confirm=event.target.confirm.value 



        setConfirmError('')


        
        if(password!==confirm){
            setConfirmError('Your password does not match')
            return
        }

        else if (password.length<6){
            setConfirmError('your password must be atleast 6 characters')
            return
        }

        console.log(username,email,password)

        createUser(email,password)
        .then(result=>{
           const user=result.user
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
            setConfirmError(error.message)
        }
            
        )

    }


     



    return (
        <div className='form-container'>
            <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <div className="">
                <p>Username</p>
                <input className='form-input' type='text' name='username' placeholder='' required></input>
                </div>
                <div className="">
                <p>Email</p>
                <input className='form-input' type='email' name='email' placeholder='' required></input>
                </div>
                <div className="">
                <p>Password</p>
                <input className='form-input' type='password' name='password' placeholder='' required></input>
                </div>
                <div className="">
                <p>Confirm Password</p>
                <input className='form-input' type='password' name='confirm' placeholder='' required></input>
                {(confirmError)?<div><small>{confirmError}</small></div>:''}
                </div>
                <div className="">

                <button className='submit-button' type="submit">Signup</button>
                </div>
                <p>Already have an acount?<Link className='anchor' to='signup'>Login</Link></p>
            </form>
            
        </div>
    );
};

export default Signup;