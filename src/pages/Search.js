import React from 'react'
import { Container, Form,Col,Row } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useEffect } from 'react'
import api from '../redux/api'
import SearchBanner from '../components/SearchBanner'
import SearchCard from '../components/SearchCard'

const API_KEY=process.env.REACT_APP_API_KEY

const Search = () => {
    const [searchMovie,setSearchMovie] = useState(null);
    const [keyWord,setKeyWord]=useState("")

    const getSearch=async()=>{
        let url=(`/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyWord}`)
        let {data} = await api.get(url)
        console.log("검색?",data)
        return data
      }

      const searchKeyword=(e)=>{
        if(e.key === "Enter"){
            setKeyWord(e.target.value)
            getSearch()
            console.log("키워드?",keyWord)
        }
      }
    
     
      useEffect(()=>{
        // dispatch(movieAction.getMovies())
        getSearch().then(setSearchMovie)
      },[keyWord])
     

  return (
    <div className='search-page'>
        <Container>
            <SearchBanner></SearchBanner>
            <Row>
                <Col>
                    <div className='search-big'>
                        {/* <Form></Form> */}
                            <div className='search-box'>
                                <FontAwesomeIcon className='search-icon' icon={faSearch}></FontAwesomeIcon> 
                                <input placeholder='Please enter a keyword' onKeyPress={(e)=>searchKeyword(e)}></input>
                            </div>

                        <div style={{display:'flex'}}>
                            <h1 className='res-len'>{searchMovie?.results.length}</h1><h1 className='res-text'>results found</h1>
                        </div>
                            
                        <div className='result-box'>
                            {/* <h1>결과{searchMovie?.results.length}</h1> */}
                            <div className='res-card-box'>
                                {searchMovie?.results.map((res)=><SearchCard res={res}></SearchCard>)}
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
        
    </div>
  )
}

export default Search