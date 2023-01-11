import React,{ useEffect } from 'react'
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
import { selectTheme } from './features/themeSlice';
function App() {
  const dispatch=useDispatch()
  const theme=useSelector(selectTheme);
  const user=useSelector(selectUser)
  return (
    <div className={theme==="dark"?"bg-[#0d0d0d]":""}>
    {user ? (
      <Router>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/" exact element={<EmailList/>}/>
        <Route path="/mail/:id" exact element={<MailDetail/>}/>
        <Route path="/sent" exact element={<SentMails/>}/>
  
      </Routes> 
      <Rightbar/>
      </Router>
    ):(<Login/>) }
    
    </div>
  )
}

export default App
