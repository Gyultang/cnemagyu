import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import api from '../redux/api'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import ReviewCard from './ReviewCard';

const API_KEY=process.env.REACT_APP_API_KEY
const Reviews = ({item}) => {
    const {id} = useParams();
    console.log("리뷰영화?",id)
    const [review,getReview]=useState([])
    const getReviews=async()=>{
        let url=`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
        let response = await api.get(url)
        let data = response.data;
        getReview(data)
        console.log("리뷰?",data)
    }



    useEffect(()=>{
        getReviews();
    },[])
  return (
       <div>
            <div className='review-tag'>REVIEWS&#160;&#40;{review.results&&review.results.length}&#41;</div> 
            <div className='review-total'>
                {review.results&&review.results?review.results.map((review)=><ReviewCard review={review}></ReviewCard>):null}
            </div>
       </div>
  )
}

export default Reviews