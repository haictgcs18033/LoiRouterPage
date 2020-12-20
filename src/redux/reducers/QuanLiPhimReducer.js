import { GET_DATA_FILM } from "../const/QuanLiPhimConst"

const stateDefault={
    mangPhim :[] // mang phim se chua du lieu phim tu api tra ve
}
export const QuanLiPhimReducer =(state=stateDefault,action)=>{
    switch(action.type){
        case GET_DATA_FILM :{
            // state.mangPhim=action.dataFilm;
            return{...state,mangPhim:action.dataFilm}
        }
    }
    return{...state}
}