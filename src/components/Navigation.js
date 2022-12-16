import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Form, Container, Button,NavDropdown, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';



const Navigation = () => {
  const navigate = useNavigate()
  const search = (event)=>{
    if (event.key === "Enter"){
        //1. 입력한 검색어를 읽어와서 2. url을바꿔줌
        let keyword = event.target.value 
        navigate(`/?q=${keyword}`) //파라미터값아닌 쿼리(추가적인 조건
    }
}
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><Link to='/'><h1 className='title'>CNEMAGYU</h1></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/movies' className='nav-item'>View all</Link>
            <Link to='/search' className='nav-item'>Search</Link>
            
         
            
          </Nav>
          <Link to='/login' className='nav-item'>Login</Link>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation