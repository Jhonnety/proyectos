import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import queryString from 'query-string'

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow = 4;

  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const filterUrl = queryParams.filter || '';


  const handlePageClick = (page: any) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = Math.max(1, currentPage - Math.floor(pagesToShow / 2)); i <= Math.min(totalPages, currentPage + Math.floor(pagesToShow / 2)); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="paginationContainer">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`btnPaginator ${currentPage === 1 ? 'disabledButtom' : ''}`}
      >
        <i className="fa-solid fa-angle-left"></i><span>Anterior</span>
      </button>

      {renderPageNumbers().map((page) => (
        <Link key={page} to={`/proyectos/?filter=${filterUrl}&page=${page}`}>
          <button
            onClick={() => handlePageClick(page)}
            className={`paginatorItem ${currentPage === page ? 'activeItemPaginator' : ''}`}
          >
            {page}
          </button>
        </Link>
      ))
      }

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`btnPaginator ${currentPage === totalPages ? 'disabledButtom' : ''}`}
      >
        <span>Siguiente</span><i className="fa-solid fa-angle-right"></i>
      </button>
    </div >
  );
};

export default Pagination;
