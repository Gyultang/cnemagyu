import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { Container,Col } from 'react-bootstrap';
import Moment from 'react-moment';

const ReviewCard = ({review}) => {
  return (
    <div className='review-box'>
         <Container>
            <div>
                {/* <p>{item.author}</p> */}
                <div><FontAwesomeIcon icon={faUser} /> {review?.author}</div>
                <span>{review?.content}</span>
                <div><Moment format="YYYY/MM/DD">{review?.updated_at}</Moment></div>
            </div>
        </Container>
    </div>
  )
}

export default ReviewCard