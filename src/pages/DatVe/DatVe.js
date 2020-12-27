import React from 'react'
import { Redirect } from 'react-router-dom'
import { USER_LOGIN } from '../../utility/setting'

export default function DatVe(props) {
    if(localStorage.getItem(USER_LOGIN)){
        return(
            <div>
                <h3>Dat ve</h3>
            </div>
        )
    }
    alert('Ban phai dang nhap truoc khi dat ve')
    return <Redirect to="/dangnhap"></Redirect>
}
