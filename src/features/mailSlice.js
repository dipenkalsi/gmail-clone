import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    showCompose:false,

  },
  reducers: {
    openCompose: (state) => {
      state.showCompose =true;
    },
    closeCompose: (state) => {
      state.showCompose = false;
    },
    
  },
})

export const { openCompose, closeCompose } = mailSlice.actions

export const selectShowCompose = (state)=>state.mail.showCompose;

export default mailSlice.reducer