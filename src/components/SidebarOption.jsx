import React from 'react'

const SidebarOption = ({Icon,title,number,active}) => {
  return (
    <div className={`flex items-center justify-between text-sm pl-4 py-1 my-1 rounded-r-full font-bold  text-gray-500 pr-3 ${!active&&"hover:bg-gray-50"} ${active?"bg-red-50 text-red-700 hover:bg-red-50":""}  transition-all ease-in duration-150 cursor-pointer`}>
        <div className='flex space-x-3 '>
      <Icon/>
      <p>{title}</p>
      </div>
      {/* <p>{number}</p> */}
    </div>
  )
}

export default SidebarOption
