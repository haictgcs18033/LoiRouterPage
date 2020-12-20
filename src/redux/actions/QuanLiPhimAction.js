//Day la file chua cac hamaction

import Axios from "axios"
import { GET_DATA_FILM } from "../const/QuanLiPhimConst"
import {DOMAIN} from '../../utility/setting'

export const getDataFilmaction=()=>{
        //Redux thunk 
        /**Ngoai viec ham tra ve mot object thi su dung redux thunk se cung cap them cho chung ta mot  ham co tac dung giup ta
        su dung dispatch khi khong co ham connect */
    return async (dispatch)=>{
        const result=await Axios({
            url:`${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`,
            method:'GET'
        })
    
        //Goi ajax
        dispatch({
            type: GET_DATA_FILM,
            dataFilm:result.data
        })
      
    }
  
}