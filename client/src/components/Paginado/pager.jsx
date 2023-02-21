import React, {useState} from 'react';

// el componente Pagination acepta: 
// una prop itemsPerPage para el número de elementos que se deben mostrar por página, 
// una prop data para la lista completa de elementos 
// una prop onPageChange para la función que se ejecutará cuando el usuario cambie de página. 
// El componente utiliza el hook useState para mantener un registro 
// de la página actual (currentPage) y el número total de páginas (totalPages). 
// La función handlePageChange se ejecutará cuando el usuario haga clic en un número de página 
// actualizará el estado de currentPage y ejecutará la función onPageChange 
// con la nueva página como argumento.

function Pagination({itemsPerPage, data, onPageChange}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  function handlePageChange(event, page) {
    event.preventDefault();
    setCurrentPage(page);
    onPageChange(page);
  }

  return (
    <nav>
      <ul className="pagination">
        {Array.from({length: totalPages}, (_, index) => {
          const page = index + 1;
          return (
            <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
              {/* <a href="#" className="page-link" onClick={(event) => handlePageChange(event, page)}>{page}</a> */}
              <a href="a" className="page-link" onClick={(event) => handlePageChange(event, page)}>{page}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;