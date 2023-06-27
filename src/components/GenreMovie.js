import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import api from "../redux/api";
import { useSelector } from "react-redux";
import Comedy from "./Comedy";

const API_KEY = process.env.REACT_APP_API_KEY;
const GenreMovie = () => {
  // const {genreList} = useSelector(state=>state.movie)
  const [movieGenreList, setMovieGenreList] = useState(null);

  const getMovieGenreList = async () => {
    let url = `/movie/popular?api_key=${API_KEY}&language=en-US&page=5`;
    let response = await api.get(url);
    let data = response.data;
    setMovieGenreList(data);
    console.log("3페이지무비", data);
  };
  console.log("무비리스트", movieGenreList && movieGenreList);

  useEffect(() => {
    getMovieGenreList();
  }, []);
  return (
    <div className="genre-part">
      <h1 className="genre-title">Drama</h1>
      <div className="genre-part-list">
        {movieGenreList?.results
          .filter(({ genre_ids }) => genre_ids.includes(18))
          .map((item) => (
            <Comedy item={item}></Comedy>
          ))}
      </div>

      {/* <h1 className='genre-title'>Animation</h1>
            <div className='genre-part-list'>
              {movieGenreList?.results.filter(({genre_ids}) => genre_ids.includes(16)).map((item)=><Comedy item={item}></Comedy>)}
            </div> */}

      <h1 className="genre-title">Thriller</h1>
      <div className="genre-part-list">
        {movieGenreList?.results
          .filter(({ genre_ids }) => genre_ids.includes(53))
          .map((item) => (
            <Comedy item={item}></Comedy>
          ))}
      </div>
    </div>
  );
};

export default GenreMovie;
