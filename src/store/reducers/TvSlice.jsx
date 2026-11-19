import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    info:[],
  }
export const TvSlice = createSlice({
  name: 'tv',
 initialState,
  reducers: {
   loadTv:(state,action)=>{
    state.info=action.payload
   },
   deleteTv:(state)=>{
    state.info=null
   }
  }
})



export default TvSlice.reducer

export const {loadTv,deleteTv  } = TvSlice.actions