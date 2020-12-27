import Axios from 'axios'
import { history } from '../../App';
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from '../../utility/setting';
//nguoiDung ={taiKhoan:'',matKhau:''}
export const dangNhapAction=(nguoiDung,props)=>{
    
        return async dispatch=>{
            try{
                const result =await Axios({
                    url:`${DOMAIN}/api/quanlynguoidung/dangnhap`,
                    method:'POST',
                    data:nguoiDung
                });
                //Dang nhap thanh cong
                console.log(result.data);
                //Lay token luu vao localstorage
                localStorage.setItem(ACCESS_TOKEN,result.data.accessToken);
                localStorage.setItem(USER_LOGIN,JSON.stringify(result.data));
                 props.history.push('/')
               //  history.goBack();
            }catch (err){

                console.log(err.response?.data);
            } 
            //Cach dung promise
            // const promise=Axios({
            //     url:`${DOMAIN}/api/quanlynguoidung/dangnhap`,
            //     method:'POST',
            //     data:nguoiDung
            // }).then(res=>{
            //     console.log(res.data);
            // }).catch(err=>{
            //     console.log(err.response?.data);
            // })
           
        }
   

}
