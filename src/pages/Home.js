import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const dispatch=useDispatch()
    const {popularMovies,topRatedMovies,upComingMovies,loading} = useSelector(state=>state.movie)
    console.log("home",popularMovies)

    useEffect(()=>{
        dispatch(movieAction.getMovies())
    },[]);

    // 로딩이 true면 로딩스피너를 보여주고 false면 데이터를 보여줌 
    // true일때는 데이터 도착전, false는 데이터도착 후 또는 에러가 났을때 
    if(loading){
      return <div className='loading'><ClipLoader
      color='red'
      loading={loading}
      size={300}
      aria-label="Loading Spinner"
    /></div>
    }

  return (
    <div className='home-page'>
        {/* 렌더링이 api호출보다 먼저 시작하므로 에러가 뜬다. (popularMovies.results[0]가 호출되지도않았는데 렌더링에서 사용돼서 에러가 남)
        그래서 조건부 렌더링이 필요! popularMovies.results이 있을때 Banner를 보여줄수있도록! */}
        {/* {popularMovies.results && <Banner movie={popularMovies.results[0]}></Banner>} */}
        {/* 로딩 스피너가 이미 전체 조건부 렌더링을 해줘서 필요없다 */}

        <Banner movie={popularMovies.results[0]}></Banner>
        <div className='movie-list'>
          <h1>Popular Movie</h1>
          <MovieSlide movies={popularMovies}></MovieSlide>
          <h1>Top rated Movie</h1>
          <MovieSlide movies={topRatedMovies}></MovieSlide>
          <h1>Upcoming Movie</h1>
          <MovieSlide movies={upComingMovies}></MovieSlide>
        </div>
        
    </div>
  )
}

export default Home