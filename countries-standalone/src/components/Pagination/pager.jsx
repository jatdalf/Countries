import style from "../Pagination/pager.module.css"

const Pagination = ({totalCards,cardPerPage,setCurrentPage,currentPage,}) => {
  let pages = [];   
  let cantPages = Math.ceil(totalCards / cardPerPage)
    
  for (let i = 1; i <= cantPages; i++) {
      pages.push(i);               
  }
 
   
  return (
    <div className={style.pagination}>
      {pages.map((page, index) => {
        return (
          <button             
            key={index}
            onClick={() => setCurrentPage(page)}
            className={(page===currentPage) ? style.active : ""}>
            {page}
          </button>);
        })
      }
    </div>
  );
};  

export default Pagination;