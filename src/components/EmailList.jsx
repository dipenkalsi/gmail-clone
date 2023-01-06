import React from 'react'
import EmailListSetting from './EmailListSetting'
import EmailType from './EmailType'
import EmailCard from './EmailCard'

const EmailList = () => {
  return (
    <div className='absolute top-20 left-60 z-0 w-[77%] pl-3'>
      <EmailListSetting/>
      <EmailType/>
      <div>
        <EmailCard name="Dipen Kalsi" subject="milique fuga dolorem nihil incidunt impedit voluptatibus ex reiciendis? Dolorum iste totam minus nobis corporis." body=" - Lorem ipsum dolar it amet what so not it is what it is..." timestamp="7:17 PM" />
        <EmailCard name="Dipen Kalsi" subject="THis is a sub subject " body=" - Lorem ipsum dolar it amet what so not it is what it is i mean kuch bhi likh rha hu mai mujhe ni pata kya h ye sb" timestamp="7:17 PM" />
        <EmailCard name="Dipen Kalsi" subject="THis is a sub subject " body=" - Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt possimus neque corporis tempora voluptates suscipit illo minus facilis cumque!" timestamp="7:17 PM" />
        <EmailCard name="Dipen Kalsi" subject="THis is a sub subject " body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt possimus neque corporis tempora voluptates suscipit illo minus facilis cumque!" timestamp="7:17 PM" />
        <EmailCard name="Dipen Kalsi" subject="THis is a sub subject " body=" - Lorem ipsum dolar it amet what so not it is what it is..." timestamp="7:17 PM" />
        <EmailCard name="Dipen Kalsi" subject="THis is a sub subject " body=" - Lorem ipsum dolar it amet what so not it is what it is..." timestamp="7:17 PM" />
        <EmailCard name="Dipen Kalsi" subject="THis is a sub subject " body=" - Lorem ipsum dolar it amet what so not it is what it is..." timestamp="7:17 PM" />
        <EmailCard name="Dipen Kalsi" subject="THis is a sub subject " body=" - Lorem ipsum dolar it amet what so not it is what it is..." timestamp="7:17 PM" />
      </div>
    </div>
  )
}

export default EmailList
