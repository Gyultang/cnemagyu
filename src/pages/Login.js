import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import api from '../redux/api';

const API_KEY=process.env.REACT_APP_API_KEY;
const Login = () => {
    const navigate = useNavigate()

    const loginUser = (event) => {
        event.preventDefault();
        //Form을 쓸때는 preventDefault()로 submit 시 새로고침이 자동으로 되는 것을 막아주자
        console.log("login OK?")
        navigate('/')
      }
  return (
    <div className='login' style={{
        // 객체의 키값 뒤에오는 내용은 string타입으로 들어가야 한다
        backgroundImage:"url(https://velog.velcdn.com/images/gyultang/post/0079e4a2-8521-4906-baa2-acdc827be8ca/image.png)",
        backgroundSize:'100%',
          }}>
       
        <Container className='login-page'>
        <h1 style={{display:"flex"}}><h1 style={{color:"brown"}}>Log in&nbsp;</h1>and<h1 style={{color:"brown"}}>&nbsp;enjoy&nbsp;</h1>various movies!</h1>
    
       <div className='login-box'>
        <Form onSubmit={(event)=>loginUser(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="danger" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    
        </Container>
    </div>
  )
}

export default Login