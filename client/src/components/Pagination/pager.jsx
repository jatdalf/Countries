import style from "../Pagination/pager.module.css"

const Pagination = ({totalCards,cardPerPage,setCurrentPage,currentPage,}) => {
  let pages = [];   
  let cantPages = Math.ceil(totalCards / cardPerPage)
    
  for (let i = 1; i <= cantPages; i++) {
      pages.push(i);               
  }
 
  if (currentPage>cantPages) setCurrentPage(1); //This line set the page to 1 if page get out of bounds
   
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