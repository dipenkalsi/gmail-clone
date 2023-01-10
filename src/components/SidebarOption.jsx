import React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../features/themeSlice'
const SidebarOption = ({Icon,title,number,active}) => {
  const theme=useSelector(selectTheme)
  return (
    <div className={`flex items-center justify-between text-sm pl-4 py-1 my-1 rounded-r-full font-bold text-gray-500 dark:text-gray-100  pr-3 ${!active&&"dark:hover:bg-red-100 hover:bg-gray-50 dark:hover:text-red-700"} ${active?"bg-red-50 dark:bg-red-700 text-red-700 dark:text-red-100 dark:hover:text-red-100 hover:bg-red-50":""}  transition-all ease-in duration-150 cursor-pointer`}>
        <div className='flex space-x-3 '>
      <Icon/>
      <p>{title}</p>
      </div>
      {/* <p>{number}</p> */}
    </div>
  )
}

export default SidebarOption
