import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const MovieCard = ({item}) => {
    const navigate = useNavigate();
    const {genreList} = useSelector(state=>state.movie)
    // const {id} = useParams();
    const goMovieDetail = ()=>{
      navigate(`/movies/${item.id}`)
    }
  return (
    <div className='card' style={{backgroundImage:"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")",
    backgroundSize:"cover",display:"block"}} onClick={goMovieDetail}>
        
        <div className='overlay'>
            <h1>{item.title}</h1>
            {/* <div>{item.genre_ids.map((id)=><Badge bg="danger">{id}</Badge>)}</div> */}
            {/* <div>{item.genre_ids.map(id)==movie.genreList.id.map(id)?<Badge bg="danger">{genreList.name}</Badge>:""}</div> */}
            <div>{item.genre_ids.map((id)=><Badge bg="danger">{genreList.find(item=>item.id==id).name}</Badge>)}</div>


            <div>
                <span>⭐{item.vote_average}</span><br></br>
                <span>{item.adult?"청불":"Under 18"}</span>
            </div>
        </div>
    </div>
  
  )
}

export default MovieCard