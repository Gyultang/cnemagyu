import React from 'react'
import { Container, Form,Col,Row } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useEffect } from 'react'
import api from '../redux/api'

const API_KEY=process.env.REACT_APP_API_KEY
const Search = () => {
    const [search,setSearch] = useState();

    const getSearch=async()=>{
        let url=(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
        let response = await api.get(url)
        let data = response.data;
        console.log("검색",data)
        setSearch(data)
        console.log("검색?",data)
      }
    
     
      useEffect(()=>{
        // dispatch(movieAction.getMovies())
        getSearch();
      },[])
     

  return (
    <div className='search-page'>
        <Container>
            <Row>
                <Col>
                    <div className='search-big'>
                        <Form>
                            <div className='search-box'>
                                <FontAwesomeIcon className='search-icon' icon={faSearch}></FontAwesomeIcon> 
                                <input placeholder='Please enter a keyword'></input>
                            </div>
                        </Form>
                    </div>
                </Col>

            </Row>
        </Container>
        
    </div>
  )
}

export default Search