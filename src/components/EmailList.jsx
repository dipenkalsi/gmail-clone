import React, { useEffect, useState } from 'react'
import EmailListSetting from './EmailListSetting'
import EmailType from './EmailType'
import EmailCard from './EmailCard'
import { db } from '../firebase'

const EmailList = () => {
  const [emails,setEmails]=useState([])
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
      <EmailListSetting/>
      <EmailType/>
      <div>
        {
          emails.map(({id,data})=>{
            return <EmailCard key={id} name={data.to} subject={data.subject} body={data.message} timestamp={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()} />
          })        
}
      </div>
    </div>
  )
}

export default EmailList
