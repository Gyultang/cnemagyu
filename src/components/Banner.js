import React from 'react'
import { Container } from 'react-bootstrap'
import YouTube from 'react-youtube';
import api from '../redux/api';
import { useState,useEffect } from 'react';

const API_KEY=process.env.REACT_APP_API_KEY
const Banner = ({movie}) => {

    // console.log("무비아이디",movie.id)
    const [mainVideo,setMainVideo]=useState([])

    const getMainVideo=async()=>{
      let url=`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
      let response = await api.get(url)
      let data = response.data;
      setMainVideo(data)
      console.log("메인예고편?",data)
  }
  useEffect(()=>{
    getMainVideo();
},[])

  return (
    <div className='banner' style={{
        // 객체의 키값 뒤에오는 내용은 string타입으로 들어가야 한다
        backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.poster_path}`+")",
        backgroundSize:'100%',backgroundRepeat:'no-repeat',height:'100vh',
          }}>
        <div className='banner-info'>
            <div class='main-detail'>
              <h1 className='hot-movie'>Today's Hot Movie #1</h1>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
            <div className='banner-video'>
                <YouTube className="video-yt"
                    //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                    videoId={mainVideo.results&&mainVideo.results?mainVideo.results[0].key:null}
                    opts={
                      {width: "560",
                      height: "315",
                      playerVars: {
                        autoplay: 0, //자동재생=1 O
                      },
                    }
                    }
                    onEnd={(e)=>{e.target.stopVideo(0);}
                  }      
                    />
            </div>
        </div>
        
    </div>
  )
}

export default Banner