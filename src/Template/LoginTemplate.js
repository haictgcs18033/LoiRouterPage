import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'


export const LoginTemplate = (props) => {
    const { Component, path } = props;
    //Lay chieu dai va chieu rong cua browser windedow
    const [obWindow, setObWindow] = useState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
    })
    const { innerWidth, innerHeight } = obWindow;
    useEffect(() => {
        //    dang ki su kien resize cua window
        window.onresize = () => {
            //Lay width,height moi cua window sau khi resize=>set lai state window moi khi resize
            let newWidth = window.innerWidth;
            let newHeight = window.innerHeight;
            setObWindow({
                innerHeight: newHeight,
                innerWidth: newWidth
            })
        }
    }, [])
    console.log(123)
    return <Route path={path} exact render={(propsRoute) => {
        return <div>
            <div className="d-flex">
                <div style={{
                    width: innerWidth / 2, height: innerHeight, backgroundImage: 'url(https://picsum.photos/200)'
                    , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }}>
                    <img src="https://picsum.photos/2000" style={{ width: '100%', height: '100%', opacity: 0 }} />
                </div>
                <div style={{ width: innerWidth / 2, height: innerHeight }}>
                    <Component {...propsRoute}></Component>
                </div>
            </div>

        </div>
    }}>

    </Route>
}