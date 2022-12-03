// import api from "../api";

// const API_KEY=process.env.REACT_APP_API_KEY
// function getDetail({id}){

//     return async(dispatch)=>{
//         try{
//             dispatch({type:"GET_MOVIES_DETAIL_REQUEST",payload:{id}})
//             const detailApi=api.get(`/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
//             let [MovieDetail] = await Promise.all([detailApi])

//             dispatch({
//                 type:"GET_MOVIES_DETAIL_SUCCESS",
//                 //axios가 받은 데이터를 data필드에 넣어서 줬음
//                 payload:{
//                     MovieDetail:MovieDetail.data
//                 }
//             });

//         }catch(error){
//             dispatch({type:"GET_MOVIES_FAILURE"})
//         }
//     }

// } 