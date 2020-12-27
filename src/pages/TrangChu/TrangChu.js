import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { getDataFilmaction } from '../../redux/actions/QuanLiPhimAction';
import { NavLink } from 'react-router-dom';
export default function TrangChu(props) {
    console.log('propsRoute',props);
    //useSelector la hook reactredux cung cap dung de lay state tu store ve
    const mangPhim = useSelector(state => state.QuanLiPhimReducer.mangPhim);
    //useDispatch la hook thay the cho props.dispatch khi dung redux connect
    const dispatch = useDispatch()
    console.log("Mang Phim", mangPhim);

    const loadDataPhim = async () => {
        // const result=await Axios({
        //      url:'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01',
        //      method:'GET'
        //  })
        //  props.dispatch(getDataFilmaction())
        //  {
        //     type:'GET_DATA_PHIM',
        //     dataFilm:result.data
        // }
        dispatch(getDataFilmaction())
    }
    //useEffect thay the cho cac lifecycle (didMount,didUpdate,willUnmount)
    useEffect(() => {
        //Chay 1 lan duy nhat sau khi giao dien render (ung voi componentDidMount)
        dispatch(getDataFilmaction());//Vua vao trang se load danh sach phim
    }, []);
    const renderFilm = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                        <NavLink to={`/chitietphim/${phim.maPhim}`}className="btn btn-danger">
                            Mua Ve
                        </NavLink>
                    </div>
                </div>

            </div>
        })
    }
    return (
        <div className="container">
            <button onClick={() => {
                loadDataPhim();
            }}>Load danh sach phim</button>
            <div className="row">
                {renderFilm()}
            </div>
        </div>
    )
}
//Ket noi den reducer lay du lieu mang phim ve =>props.mangPhim
// const mapStateToProps=state=>{
//     return {
//       mangPhim:state.QuanLiPhimReducer.mangPhim
//     }
// }
// export default connect(mapStateToProps)(TrangChu)
