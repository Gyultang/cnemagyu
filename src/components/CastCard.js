import React from 'react'
import { Container,Row } from 'react-bootstrap'

const CastCard = ({item}) => {
  return (
    <div>
       <Container>
                <div className='cast-img'>
                    <img src={`https://image.tmdb.org/t/p/original//${item.profile_path}`}></img>
                    <p>{item.original_name}</p>
                </div>
       </Container>
    </div>
  )
}

export default CastCard