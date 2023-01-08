import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    showCompose:false,
    selectedMessage:null,
  },
  reducers: {
    openCompose: (state) => {
      state.showCompose =true;
    },
    closeCompose: (state) => {
      state.showCompose = false;
    },
    openMessage:(state,action) => {
      state.selectedMessage=action.payload
    },
  },
})

export const { openCompose, closeCompose ,openMessage } = mailSlice.actions

export const selectShowCompose = (state)=>state.mail.showCompose;
export const selectedMail = (state)=>state.mail.selectedMessage;

export default mailSlice.reducer