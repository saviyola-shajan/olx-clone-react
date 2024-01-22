import React,{useEffect,useContext,lazy,Suspense} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { AuthContext, FirebaseContext } from './Store/Context';
import './App.css';
import Loading from './Components/Loading/Loading';
import './Pages/Signup.css'
const Post=lazy(()=>import('./Store/PostContext'))
const ViewPost=lazy(()=>import('./Pages/ViewPost'))
const Create=lazy(()=>import('./Pages/Create'))
const Signup=lazy(()=>import('./Pages/Signup'))
const Login =lazy(()=>import('./Pages/Login'))
const Home=lazy(()=> import ('./Pages/Home')) 

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
        <Suspense fallback={<Loading/>}>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/view' element={<ViewPost/>}/>
        </Routes>
        </Suspense>
      </Router>
      </Post>
    </div>
  );
}

export default App;
