import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {auth,db} from "./firebase";
import {setDoc,doc} from "firebase/firestore";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
export default function Register() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [utype,setUsertype] =useState("");


    const handleRegister= async (e)=>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            const user = auth.currentUser;
            console.log(user);
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    email:user.email,
                    firstName:fname,
                    lastName:lname,
                    userType:utype,
                });
            }
            console.log("User Registered Successfully!");
            toast.success("User Registered Successfully!",{
                position:"top-center",
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
    <div className='Register'>
    <div className='image'><img src='https://source.unsplash.com/featured/?login,register' alt='not found'></img></div>
        <form onSubmit={handleRegister}>
            <h3>Sign Up</h3>
            <div style={divStyle}>
                <label>First Name</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='First Name'
                    onChange={(e)=>setFname(e.target.value)}
                    required
                />
            </div>

            <div style={divStyle}>
                <label>Last Name</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Last Name'
                    onChange={(e)=>setLname(e.target.value)}
                    required
                />
            </div>

            <div style={divStyle}>
                <label>User Type</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='User Type Buyer or Seller'
                    onChange={(e)=>setUsertype(e.target.value)}
                    required
                />
            </div>

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

            <div>Existing User: <Link to="/login">Login</Link> </div>
        </form>
        
    </div>
  )
}
