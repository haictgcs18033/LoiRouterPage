import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import DangNhap from './pages/DangNhap/DangNhap';
import TrangChu from './pages/TrangChu/TrangChu';
import DangKy from './pages/DangKy/DangKy';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import Header from './components/Header/Header';
import { HomeTemplate } from './Template/HomeTemplate';
import { LoginTemplate } from './Template/LoginTemplate';
import DatVe from './pages/DatVe/DatVe';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/trangchu" Component={TrangChu} />
        <LoginTemplate path="/dangnhap" Component={DangNhap} />
        {/* <Route exact path="/dangky" component={DangKy}></Route> */}

        {/* <HomeTemplate path="/chitietphim/:maPhim" Component={ChiTietPhim} /> */}
        {/* <Route path="/datve" render={(propsRoute) => {
          return <DatVe {...propsRoute} />
        }}></Route> */}
        <HomeTemplate exact path="/" Component={TrangChu} />
      </Switch>
    </Router>
  );
}

export default App;

