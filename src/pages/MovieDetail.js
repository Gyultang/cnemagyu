import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container,Row,Col,Badge } from 'react-bootstrap'
import { movieAction } from '../redux/actions/movieAction';
import { useParams } from 'react-router-dom';
import api from '../redux/api';
import { Axios } from 'axios';
import Reviews from '../components/Reviews'
import Trailer from '../components/Trailer';





const API_KEY=process.env.REACT_APP_API_KEY
const MovieDetail = ({item}) => {
 
  const [movies,setMovies]=useState([])
  const {id} = useParams();
  console.log("영화번호",id)


  const getMoviesDetail=async()=>{
    let url=(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    let response = await api.get(url)
    let data = response.data;
    console.log("디디디테일",data)
    setMovies(data)
    console.log("영화디테일?",data)
  }

 

  useEffect(()=>{
    getMoviesDetail();
  },[])
  // console.log("무비디테일",)


  



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
        <div>
          <Reviews id={id}></Reviews>
        </div>

      </Container>
      <div className='bar'></div>
    </div>
  )
}

export default MovieDetail