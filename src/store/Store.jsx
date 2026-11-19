import { configureStore } from '@reduxjs/toolkit'
import  MovieSlice  from './reducers/MovieSlice'
import  TvSlice  from './reducers/TvSlice'
import  PersonSlice  from './reducers/PersonSlice'



export const store = configureStore({
  reducer: {
    movie:MovieSlice,
    tv:TvSlice,
    person:PersonSlice,
  }
});