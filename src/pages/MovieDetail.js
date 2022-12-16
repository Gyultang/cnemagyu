import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container,Row,Col,Badge } from 'react-bootstrap'
import { movieAction } from '../redux/actions/movieAction';
import { useParams } from 'react-router-dom';
import api from '../redux/api';
import { Axios } from 'axios';
import Reviews from '../components/Reviews'
import Trailer from '../components/Trailer';
import Casts from '../components/Casts';
import ClipLoader from "react-spinners/ClipLoader";






const API_KEY=process.env.REACT_APP_API_KEY
const MovieDetail = ({item}) => {
  const dispatch=useDispatch()
  const {loading,MovieDetail} = useSelector(state=>state.movie)
 
  const [movies,setMovies]=useState([])
  const {id} = useParams();
  console.log("영화번호",id)

  const [moviesGenre,setMoviesGenre]=useState(null)

  const getAPI = async()=>{
      const url = `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
      const {data} = await api.get(url);
      setMoviesGenre(data)
  }
  console.log("아이피검사",moviesGenre&&moviesGenre)


  const getMoviesDetail=async()=>{
    let url=(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    let response = await api.get(url)
    let data = response.data;
    console.log("디디디테일",data)
    setMovies(data)
    console.log("영화디테일?",data)
  }

 
  useEffect(()=>{
    // dispatch(movieAction.getMovies())
    getMoviesDetail();
    getAPI();
  },[])
 
  if(loading){
    return <div className='loading'><ClipLoader
    color='red'
    loading={loading}
    size={300}
    aria-label="Loading Spinner"
  /></div>
  }else{


  return (
    <div className='detail-box'>
      <Container>
        <Row className='detail-top'>
          <Col className='detail-poster'>
            <img src={` https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movies?.poster_path}`}/>
          </Col>
          <Col>
            <div className='detail-card'>
                <div className='detail-title'>{movies?.title}</div>
                <div className='genres'>{movies.genres&&movies.genres.map((genre) => <Badge bg="danger">{genre.name}</Badge>)}</div>
                <Row>
                  <div className='ratings'>⭐ {Math.floor(movies?.vote_average)}</div>
                  <div></div>
                  <div className='age-tag'>{movies.adult?"청불":"Under 18"}</div>
                </Row>
                <div className='overview'>{movies?.overview}</div>
                <div>{movies?.release_date}</div>
                <div className='runtime'>{movies?.runtime}분</div>
                <Trailer id={id}></Trailer>
            </div>
          </Col>
        </Row>
        <Casts id={id}></Casts>
        <div>
          <Reviews id={id}></Reviews>
        </div>
      </Container>
    </div>
  )}
}

export default MovieDetail