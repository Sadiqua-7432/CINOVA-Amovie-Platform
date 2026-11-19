import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    info:[],
  }
export const PersonSlice = createSlice({
  name: 'person',
 initialState,
  reducers: {
   loadPerson:(state,action)=>{
    state.info=action.payload
   },
   deletePerson:(state)=>{
    state.info=null
   }
  }
})



export default PersonSlice.reducer
export const {loadPerson,deletePerson}=PersonSlice.actions