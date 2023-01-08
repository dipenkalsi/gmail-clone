import React, { useEffect, useState } from 'react'
import EmailListSetting from './EmailListSetting'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailType from './EmailType'
import EmailCard from './EmailCard'
import { db } from '../firebase'
import { Link } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

const SentMails = () => {
  const user=useSelector(selectUser);
  const [emails,setEmails]=useState([])
  const performCheck=({id,data})=>{
    return data.from===user.email
  }
  useEffect(()=>{
      db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
        setEmails(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
        })))
      })
  },[])
  console.log(emails)
  return (
    <div className='absolute top-20 left-60 z-0 w-[77%] pl-3'>
      <EmailListSetting Icon={ArrowBackIcon}/>
      <EmailType/>
      <div>
        {
          emails.filter(performCheck)?.map(({id,data})=>{
            return <Link to={`/mail`}>
            <EmailCard key={id} name={data.senderName} subject={data.subject} body={data.message} timestamp={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()} from={data.from} senderPhoto={data.senderPhoto} to={data.to}/>
            </Link>
          })        
        }
      </div>
    </div>
  )
}

export default SentMails