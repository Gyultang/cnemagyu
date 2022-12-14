import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import Movies from './pages/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Search from './pages/Search';
import Login from './pages/Login';



// 1. 총 3페이지 (홈페이지, 무비페이지, 무비디테일페이지)
// 2. 홈페이지에서 배너를 볼 수 있다. 
// 3. 3가지 섹션의 영화를 볼수있다. (popular, top rated, upcoming)
// 4. 각 영화의 마우스를 올려두면, 제목, 장르, 점수, 인기도, 청불여부
// 5. 영화를 슬라이드로 넘기면서 볼 수 있다. 
// 6. 영화디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다. (포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 러닝타임 등등)
// 7. 트레일러를 누르면 영화 예고편을 볼 수 있다. 
// 8. 영화에 리뷰도 볼 수 있다. 
// 9. 추천 관련 영화 볼 수 있다.
// 10. 영화 검색을 할 수있다. 
// 11. 영화 정렬 할 수 있다.
// 12. 영화를 필터링 할 수 있다. 



function App() {
  return (
    <div className='body'>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='/movies/:id' element={<MovieDetail></MovieDetail>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
      <div className='bar'></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
