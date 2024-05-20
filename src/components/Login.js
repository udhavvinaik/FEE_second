import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import {auth} from "./firebase";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'


export default function Login() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email,password);

            console.log("user logged in successfully");
            
            window.location.href = "/home";
            toast.success("User logged in successfully",{
                position:"top-center"
            });
        } catch (error) {
            console.log(error.message);
            toast.error(error.message,{
                position:"bottom-center"
            });

        }
    }

    const divStyle ={
        margin: '2vh'
    }


  return (
    <div className='Login'>
        <div className='image'><img src='https://source.unsplash.com/featured/?login,register' alt='not found'></img></div>
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div style={divStyle}>
                <label>Email Address</label>
                <input
                    type='email'
                    className='form-control'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
            </div>

            <div style={divStyle}>
                <label>Password</label>
                <input
                    type='password'
                    className='form-control'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
            </div>
            <div style={divStyle}>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
            <div>New User: <Link to="/register">Sign Up</Link> </div>
        </form>
        

    </div>
  )
}
