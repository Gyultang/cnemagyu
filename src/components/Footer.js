import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer-box'>
        <Container>
            <div>
                <ul className='footer-top'>
                    <li>고객센터</li>
                    <li>이용약관</li>
                    <li>개인정보처리방침</li>
                    <li>법적고지</li>
                    <li>인재채용</li>
                </ul>
                <p>
                    <span>제작 김규리</span><br></br>
                    <span>서울특별시 동작구 사당로</span><br></br>
                    <span>Copyright © 2023 CNEMAGYU All right reserves.</span>
                </p>
                <div className='footer-sns'>
                    <div><FontAwesomeIcon icon={faEnvelope} /></div>
                    <div><FontAwesomeIcon icon={faInstagram} /></div>
                    <div><FontAwesomeIcon icon={faTwitter} /></div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer