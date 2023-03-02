import React, {useState, useEffect} from 'react';
import style from "../Pagination/pager.module.css"

const Pagination = ({totalCards,cardPerPage,setCurrentPage,currentPage,}) => {
  let pages = [];
  
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
      pages.push(i);
  }



  return (
    <div className={style.pagination}>
      {pages.map((page, index) => {
        return (
          <button             
            key={index}
            onClick={() => setCurrentPage(page)}
            
            {...console.log(`pagina ${page} currentPag ${currentPage}`)}
            >
            {page}
          </button>);
        })
      }
    </div>
  );
};  

export default Pagination;