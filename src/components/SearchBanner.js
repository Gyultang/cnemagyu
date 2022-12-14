import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch,useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { Container,Row,Col } from 'react-bootstrap';
import BannerCard from './Banner';


const SearchBanner = () => {
    const dispatch=useDispatch()
    const {topRatedMovies,loading} = useSelector(state=>state.movie)

    console.log("배너용",topRatedMovies)
    useEffect(()=>{
        dispatch(movieAction.getMovies())
    },[]);

    if(loading){
        return <div className='loading'><ClipLoader
        color='red'
        loading={loading}
        size={300}
        aria-label="Loading Spinner"
      /></div>
      }
    //   https://image.tmdb.org/t/p/original/ 포스터이미지
    
  return (
    <div className='Search-Banner'>
        <h1>Search and find a variety of movies that suit your taste !</h1>
        <Container className='slider'>
            <div className='slider-track'>
            <Col>
                <Row>
                <div className='search-post'>
                        {topRatedMovies.results.slice(0,9).map((item)=><img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}></img>)}
                </div>
                </Row>
                <Row>
                    <div className='search-post'>
                    {topRatedMovies.results.slice(9,17).map((item)=><img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}></img>)}
                    </div>
                </Row>
            </Col>
            </div>
        </Container>
    </div>
  )
}

export default SearchBanner