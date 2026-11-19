import axios from "axios"
 const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTI0MDdmN2RiOWE4ZjE1NzRlM2I4MTNlMDk1ODkxYyIsIm5iZiI6MTc5NDYzNTY2MS41NjQsInN1YiI6IjZhZjdmNzhkNjE5MjQxY2VlNDMyODI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2lPV8u1X3vGRRtXrCzr1B_iP_MImfwy1o5vsrES7fRo'
  }
})
export default instance
