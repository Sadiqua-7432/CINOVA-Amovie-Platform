export {deleteMovie} from "../reducers/MovieSlice" 
import axios from "../../utils/axios"
import { loadMovie } from "../reducers/MovieSlice"

export const asyncloadMovie=  (id)=> async (dispatch) => {
    try{
        const detail= await axios.get(`/movie/${id}`)
        const externalid= await axios.get(`/movie/${id}/external_ids`)
        const recommendations= await axios.get(`/movie/${id}/recommendations`)
        const similar= await axios.get(`/movie/${id}/similar`)
        const videos= await axios.get(`/movie/${id}/videos`)
        const watchproviders= await axios.get(`/movie/${id}/watch/providers`)
        const translations= await axios.get(`/movie/${id}/translations`)
        let combineMovieDetail={
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find((v)=>v.type==="Teaser"),
            watchproviders:watchproviders.data.results.IN,
            translations:translations.data.translations.map(t=>t.name),
        }
        dispatch(loadMovie(combineMovieDetail))
        // console.log(combineMovieDetail)
    }catch(err){
        console.log(err)
    }
}

