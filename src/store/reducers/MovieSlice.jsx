import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    info:[],
  }
export const MovieSlice = createSlice({
  name: 'movie',
 initialState,
  reducers: {
   loadMovie:(state,action)=>{
    state.info=action.payload
   },
   deleteMovie:(state,action)=>{
    state.info=null
   }
  }
})



export default MovieSlice.reducer
export const {loadMovie,deleteMovie  } = MovieSlice.actions