import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import DangNhap from './pages/DangNhap/DangNhap';
import TrangChu from './pages/TrangChu/TrangChu';
import DangKy from './pages/DangKy/DangKy';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import Header from './components/Header/Header';

function App() {
  return (
   <BrowserRouter>
   <Header></Header>
   <Route path="/trangchu" component={TrangChu}></Route>
   <Route path="/dangnhap" component={DangNhap}></Route>
   <Route path="/dangky" component={DangKy}></Route>
   <Route path="/chitietphim" component={ChiTietPhim}></Route>
   </BrowserRouter>
  );
}

export default App;
