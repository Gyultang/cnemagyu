import React from 'react'
import { useNavigate } from 'react-router-dom';

const SearchCard = ({res}) => {
    const navigate = useNavigate();
    // const {id} = useParams();
    const goMovieDetail = ()=>{
      navigate(`/movies/${res.id}`)
    }

  return (
    <div className='search-card' onClick={goMovieDetail}>
        {res.poster_path?(<img src={`https://image.tmdb.org/t/p/original/${res.poster_path}`}></img>):((<img src='https://previews.123rf.com/images/julynx/julynx1408/julynx140800023/30746516-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%97%86%EA%B1%B0%EB%82%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%AC%EC%A7%84-%EC%97%86%EC%9D%8C.jpg'></img>))}        <h1>{res.original_title}</h1>
    </div>
  )
}

export default SearchCard