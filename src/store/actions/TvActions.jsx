export {deleteTv} from "../reducers/TvSlice" 
import axios from "../../utils/axios"
import { loadTv } from "../reducers/TvSlice"

export const asyncloadTv=  (id)=> async (dispatch,getState) => {
    try{
        const detail= await axios.get(`/tv/${id}`)
        const externalid= await axios.get(`/tv/${id}/external_ids`)
        const recommendations= await axios.get(`/tv/${id}/recommendations`)
        const similar= await axios.get(`/tv/${id}/similar`)
        const videos= await axios.get(`/tv/${id}/videos`)
        const watchproviders= await axios.get(`/tv/${id}/watch/providers`)
        const translations= await axios.get(`/tv/${id}/translations`)
        let combineTvDetail={
            detail:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos:videos.data.results.find((v)=>v.type==="Teaser"),
            watchproviders:watchproviders.data.results.IN,
            translations:translations.data.translations.map(t=>t.name),
        }
        dispatch(loadTv(combineTvDetail))
        // console.log(combineTvDetail)
    }catch(err){
        console.log(err)
    }
}