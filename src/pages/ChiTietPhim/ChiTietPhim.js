import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import moment from 'moment'

export default function ChiTietPhim(props) {
    //Tao 1 state chua thong tin chi tiet phim gia tri ban dau la mot object rong 
    const [chiTietPhim, setChiTietPhim] = useState([{}])
    /**Dun useEffect de tu dong goi api khi trang chi tiet phim duoc load ra */
    useEffect(async () => {
        //props.match.params.:props nay la props cua the Route truyen cho component
        //Buoc 1 : lay ma phim tu url
        const maPhim = props.match.params.maPhim
        //Buoc 2 : Dua vao ma gui len api backend lay du lieu phim ve va gan vao state chiTietPhim
        const result = await Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'
        });
        console.log(result);
        setChiTietPhim(result.data);
        //setTitle
        document.title = result.data.tenPhim;
    }, [])

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-6">
                    <img style={{ width: '300px', height: '300px' }} src={chiTietPhim.hinhAnh} />
                </div>
                <div className="col-6">
                    <table className="table bg-light">
                        <tbody>
                            <tr>
                                <td>Ten phim</td>
                                <td>{chiTietPhim.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Mo ta</td>
                                <td>{chiTietPhim.moTa}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h3 className="text-center">Thong tin lich chieu</h3>

                </div>
            </div>
            <div className="row">

                <div className="nav nav-pills flex-column col-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                        let activeClass = index === 0 ? 'active' : '';
                        // if(index===0){
                        //     activeClass='active';
                        // }
                        return <a key={index} className={`nav-link ${activeClass}`}
                            id={`v-pills-${heThongRap.maHeThongRap}-tab`}
                            data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab"
                            aria-controls={`${heThongRap.maHeThongRap}`} aria-selected="true">
                            <img src={heThongRap.logo} className="mr-2" width="50" height="50" />
                            {heThongRap.tenHeThongRap}

                        </a>
                    })}
                    {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
                </div>
                <div className="tab-content col-8" id="v-pills-tabContent">
                    {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                        let activeClass = index === 0 ? 'active' : '';
                        return <div className={`tab-pane fade show  ${activeClass}`} id={`${heThongRap.maHeThongRap}`} key={index} role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            {/* {heThongRap.tenHeThongRap} */}
                            {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                return <div key={index}>
                                    <h3 className="text-success">{cumRap.tenCumRap}</h3>
                                    <div className="row">
                                        {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu, index) => {
                                            return <div className="col-3">
                                                {moment(lichChieu.ngayChieuGioChieu).format('LT')}
                                            </div>
                                        })}
                                    </div>

                                </div>
                            })}
                        </div>
                    })}
                    {/* <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Home</div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Profile</div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Message</div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Setting</div> */}
                </div>
            </div>
        </div>
    )
}
