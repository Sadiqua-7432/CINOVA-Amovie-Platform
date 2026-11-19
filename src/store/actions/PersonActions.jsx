export {deletePerson} from "../reducers/PersonSlice" 
import axios from "../../utils/axios"
import { loadPerson } from "../reducers/PersonSlice"

export const asyncloadPerson=  (id)=> async (dispatch) => {
    try{
        const detail= await axios.get(`/person/${id}`)
        const externalid= await axios.get(`/person/${id}/external_ids`)
        const tvCredits= await axios.get(`/person/${id}/tv_credits`)
        const combinedCredits= await axios.get(`/person/${id}/combined_credits`)
        const  movieCredits= await axios.get(`/person/${id}/movie_credits`)
       
        let combinePersonDetail={
            detail:detail.data,
            externalid:externalid.data,
            combinedCredits:combinedCredits.data,
            tvCredits:tvCredits.data,
            movieCredits:movieCredits.data
           
        }
        dispatch(loadPerson(combinePersonDetail))
        console.log(combinePersonDetail)
    }catch(err){
        console.log(err)
    }
}