import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import Compose from './components/Compose'
import Rightbar from './components/Rightbar'
import MailDetail from './components/MailDetail'
import {selectUser, signIn,signOut} from './features/userSlice'
import Login from './components/Login'
import {BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'
import SentMails from './components/SentMails'
function App() {
  const dispatch=useDispatch()
  const user=useSelector(selectUser)
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(signIn({
          displayName:user.displayName,
          photoURL:user.photoURL,
          email:user.email
        }))
      }
      else{
        dispatch(signOut())
      }
    })
  },[])
  return (
    <>
    {user ? (
      <Router>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/" exact element={<EmailList/>}/>
        <Route path="/mail" exact element={<MailDetail/>}/>
        <Route path="/sent" exact element={<SentMails/>}/>
  
      </Routes> 
      <Rightbar/>
      </Router>
    ):(<Login/>) }
    
    </>
  )
}

export default App
