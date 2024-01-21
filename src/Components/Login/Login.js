import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../Store/Context'
import {useNavigate,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const navigate=useNavigate()
  const {firebase} =useContext(FirebaseContext)
  const [email,setemail]=useState('')
  const [password,setPassword]=useState('')
  const handleSubmit=(e)=>{
e.preventDefault()
   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    navigate('/')
   }).catch((error)=>{
    alert(error.message)
   })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img alt='' width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <br/>
      <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
