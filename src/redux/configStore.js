import { applyMiddleware, combineReducers, createStore } from 'redux'
import { QuanLiPhimReducer } from './reducers/QuanLiPhimReducer'
//Cai dat middleware redux thunk
import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    //Noi dinh nghia cac reducer trong he thong
    QuanLiPhimReducer
})
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));