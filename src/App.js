import React,{useEffect,useContext} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import './Pages/Signup.css'
import Post from './Store/PostContext';
import ViewPost from'./Pages/ViewPost'
import Create from './Pages/Create'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { AuthContext, FirebaseContext } from './Store/Context';

function App() {
  const {setUser} =useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[firebase,setUser])
  return (
    <div>
      <Post>
      <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/view' element={<ViewPost/>}/>
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
