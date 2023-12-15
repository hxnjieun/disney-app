import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';


const Layout = () => {
  return (
    <div>
      <Nav/>

      <Outlet />
    </div>
  );
}
/* 라우트에서 아울렛이 주소끌어옴 */


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<LoginPage/>}/>
          <Route path='main' element={<MainPage/>}/>
          <Route path=':movieId' element={<DetailPage/>}/>
          <Route path='search' element={<SearchPage/>}/>
        </Route>
      </Routes>

    </div>
   
  );
}

export default App;


//after,before 가상요소,CSS로 HTML 디자인,콘텐츠를 변경, 가상 클래스 만듬,So.반드시 content정의