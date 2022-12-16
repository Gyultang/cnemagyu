import React from 'react'
import { useParams } from 'react-router-dom';
import api from '../redux/api';
import CastCard from './CastCard';
import { useState,useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row } from 'react-bootstrap';



const API_KEY=process.env.REACT_APP_API_KEY
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Cast = ({item}) => {
    const {id} = useParams();
    const [character,setCharacter]=useState([])
    const getCast=async()=>{
        let url=`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        let response = await api.get(url)
        let data = response.data;
        setCharacter(data)
        console.log("출연진",data)
    }


    useEffect(()=>{
        getCast();
    },[])

  return (
    <div className='castBox'>
        <h1>Character</h1>
        <Container>
          <Row>
            <div className='cast-box-mobile' style={{display:'flex'}}>{character.cast&&character.cast.length>0?character.cast.slice(0,7).map((item)=><CastCard item={item}></CastCard>):null}</div> 
          </Row>  
         </Container>    
        {/* <Carousel responsive={responsive}>
          {character.cast&&character.cast.length>0?character.cast.slice(0,10).map((item)=><CastCard item={item}></CastCard>):null}
        </Carousel> */}
    </div>
  )
}

export default Cast