import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import { useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import MoviePageCard from '../components/MoviePageCard'



const Movies = ({item}) => {
  const dispatch=useDispatch()
  const {popularMovies,loading} = useSelector(state=>state.movie)

  console.log("무비?",popularMovies)

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

  return (
    <div>
      <Container>
        <Row>
          <Col>
            
          </Col>
            <Col>
              {popularMovies.results.map((item)=><MoviePageCard item={item}></MoviePageCard>)}
            </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Movies