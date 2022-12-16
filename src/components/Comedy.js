import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './GenreBox.css';
import { useNavigate } from 'react-router-dom';

const Comedy = ({item}) => {
    const navigate = useNavigate();
  

    const goMovieDetail = ()=>{
        navigate(`/movies/${item.id}`)
      }
  return (
    <div>
        <Container>
                <div  className='genreBox' onClick={goMovieDetail}>
                <div className='view-detail'><img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}></img>
                <div className='view-box'><div className='view-text'>See details</div></div></div>
          
                  <h1>{item.original_title}</h1>
                </div>
        </Container>
    </div>
  )
}

export default Comedy