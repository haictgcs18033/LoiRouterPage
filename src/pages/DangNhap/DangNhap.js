import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dangNhapAction } from '../../redux/actions/QuanLiNguoiDungAction';



export default function DangNhap() {
    //useDispatch la hook do react redux cung cap tuong tu props.dispatch khi su dung connect 
    const dispatch = useDispatch()
    //useState la thu vien thay the this.state trong RE class component
    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: ''
    })//useState nhan gia tri dau vao la stateDefault ung voi classComponent state={taiKhoan:' ',matKhau:''}
    console.log(state);
    const handleChangeInput = (event) => {
        //Lay ra value tu the input dang nhap
        let { name, value } = event.target;
        // const newState ={...state,[name]:value}
        setState({ ...state, [name]: value })
        //    {
        //     [name]:value
        // }

    }
    const handleSubmit = (e) => {
        e.preventDefault();//can su kien submit cua browser (reload page)
        //Goi api de xac thuc dang nhap
        dispatch(dangNhapAction(state));
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3 className="display-4 text-center">Dang nhap</h3>
            <div className="form-group">
                <p>Tai khoan</p>
                <input className="form-control" name="taiKhoan" onChange={handleChangeInput}></input>
            </div>
            <div className="form-group">
                <p>Mat Khau</p>
                <input className="form-control" name="matKhau" onChange={handleChangeInput}></input>
            </div>
            <div className="form-group">
                <button className="btn btn-success">Dang nhap</button>
            </div>
        </form>
    )
}
