import React from 'react'
import { IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { auth , provider} from '../firebase';
import { useDispatch } from 'react-redux';
import { signIn } from '../features/userSlice';
const Login = () => {
    const dispatch=useDispatch()
    const handleLoginClick=()=>{
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(signIn({
                displayName:user.displayName,
                photoURL:user.photoURL,
                email:user.email,
            })).catch(err=>{
                alert(err);
            })
        })    
    }
  return (
    <div className='flex flex-col h-[100vh] w-full items-center justify-center '>
    <div className='flex flex-col w-fit items-center justify-center mx-auto'>
      <img src="https://www.getmailbird.com/setup/assets/imgs/logos/gmail.com.webp" alt="" className='w-1/4'/>
    </div>
    <button className="hover:bg-purple-100 text-purple-800 px-8 py-2 text-2xl rounded-lg transition-all ease-in duration-150 " onClick={handleLoginClick}>
        <p>Login with Google</p>   
    </button>
    <div className=' fixed  bottom-0 mb-3 '>
        <p className='font-semibold text-center text-purple-800'>A clone by Dipen Kalsi</p>
        <div className='flex items-center justify-center space-x-3 mt-3'>
            <a href="https://www.instagram.com/_dipen02/" target="_blank">
            <IconButton color='secondary'>
                <InstagramIcon/>
            </IconButton>
            </a>
            <a href="https://github.com/dipenkalsi" target="_blank">
            <IconButton color='secondary'>
                <GitHubIcon />
            </IconButton>
            </a>
            <a href="https://twitter.com/DipenKalsi" target="_blank">
            <IconButton color='secondary'>
                <TwitterIcon/>
            </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/dipen-kalsi-4448b5205/" target="_blank">
            <IconButton color='secondary'>
                <LinkedInIcon/>
            </IconButton>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Login
