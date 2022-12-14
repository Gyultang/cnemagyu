import React from 'react'
import './Paging.css';
import Pagination from "react-js-pagination";
import { useEffect } from 'react';


const Pagenation = ({count,page,setPage,handlePageChange}) => {
    
  
    
  
  return (
    <div>
        <div>
            <Pagination
        activePage={page} 
        itemsCountPerPage={20}  //한 페이지당 보여줄 리스트 아이템의 개수
        totalItemsCount={4000}   //총 아이템의 개수
        pageRangeDisplayed={5}  //Paginator 내에서 보여줄 페이지의 범위
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Pagenation