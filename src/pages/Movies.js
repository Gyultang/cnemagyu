import React,{Component} from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import { useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import MoviePageCard from '../components/MoviePageCard'
import Pagenation from '../components/Pagenation'
import { useState } from 'react'
import api from '../redux/api'
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from "react-js-pagination";
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'


const API_KEY=process.env.REACT_APP_API_KEY;
let loading = true;
const Movies = ({item}) => {
  

  const dispatch=useDispatch()
  const {genreList} = useSelector(state=>state.movie)
  console.log("장르?",genreList)
  const [movieList,setMovieList] = useState(null);
  const [goGenre,setGoGenre] = useState("");
  const [genreFilter,setGenreFilter]=useState([])
  const [page, setPage] = useState(1); //현재페이지
 
 
  
  const getMovieList=async()=>{
    let url=`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    let response = await api.get(url)
    let data = response.data;
    setMovieList(data)

    loading=false
    console.log("무비리스트",data)
    console.log("apiPage",data.page)
}
console.log("Movie", movieList&&movieList.results)

const handlePageChange = (page) => {
  setPage(page);
  getMovieList()
  console.log("페이지?",page) //100페이지까지보여주기 
}

// const moviesByGenre = (goGenre) => {
//   return movieList.results.filter(({
//     genre_ids
//   }) => genre_ids.includes(goGenre))
// }
// console.log("장르영화",moviesByGenre(goGenre))



const getGenre = (genreId)=>{
  // let genre = e.target.value;
  setGoGenre( Number(genreId))
  
  console.log("장르있?",typeof goGenre,goGenre)
}

const moviesByGenre = (genreId) => {
  return movieList&&movieList.results.filter(({
    genre_ids
  }) => genre_ids.includes(genreId))
}
console.log("장르별영화",moviesByGenre(goGenre))



/* console.log(moviesByGenre(28)) */
/* console.log(moviesByGenre(14)) */
// console.log("장르분류",goGenre,moviesByGenre({goGenre}))

// const getFilter = ()=>{
//   return movieList.results.filter(({genre_ids}) => genre_ids.includes(goGenre)).map((item)=><MoviePageCard item={item}></MoviePageCard>)
  
// }
// console.log("장르별페이지",getFilter())

    useEffect(()=>{
      getMovieList()
      // handlePageChange()
      dispatch(movieAction.getMovies())
    },[page,goGenre]);

   
    if(loading){
      return <div className='loading'><ClipLoader
      color='red'
      loading={loading}
      size={300}
      aria-label="Loading Spinner"
    /></div>
    }

  return (
    <div>
      <Container className='movie-list'>
        {/* <Dropdown>
          <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
            GENRE
          </Dropdown.Toggle>
        <DropdownMenu>
          {genreList.map((gen)=><li className='genre-list'><a onClick={(e)=>getGenre(`${gen.id}`)}>{gen.name}</a></li>)}
          </DropdownMenu>
        </Dropdown> */}
        <div></div>
        <Row>
            <div className='movie-list01'>
            { (goGenre>0)? (movieList.results.filter(({genre_ids}) => genre_ids.includes(goGenre)).map((item)=><MoviePageCard item={item}></MoviePageCard>)):(movieList&&movieList.results.map((item)=><MoviePageCard item={item}></MoviePageCard>))}
            {/* {moviesByGenre.map((item)=><MoviePageCard item={item}></MoviePageCard>)} */}
            {/* {movieList&&goGenre>0?(movieList.results.match(goGenre).map((item)=><MoviePageCard item={item}></MoviePageCard>)):(movieList.results.map((item)=><MoviePageCard item={item}></MoviePageCard>))} */}
            </div>
        </Row>
        <Row>
          <Col>
           <Pagenation page={page} setPage={setPage} handlePageChange={handlePageChange}></Pagenation>
          </Col>
        </Row>
      </Container>
      
    </div>

  )
}

export default Movies