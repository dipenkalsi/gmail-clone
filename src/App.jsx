import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import Compose from './components/Compose'
import Rightbar from './components/Rightbar'

function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <EmailList/>
    <Rightbar/>
    {/* <Compose/> */}
    </>
  )
}

export default App
