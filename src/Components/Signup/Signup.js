import React, { useContext, useState } from 'react';
import { useNavigate,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../Store/Context';

export default function Signup() {
const [Username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [phoneNumber,setPhonenumber]=useState('')
const [password,setPassword] =useState('')
const {firebase} =useContext(FirebaseContext)
const navigate=useNavigate();

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(firebase);
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:Username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        Username:Username,
        phone:phoneNumber
      }).then(()=>{
        navigate('/login')
      })
    })
  })
}
  return (
    <div>
      <div className="signupParentDiv">
        <img alt='' width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phoneNumber}
            onChange={(e)=>setPhonenumber(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button type='submit'>Signup</button>
        </form>
        <br/>
      <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
