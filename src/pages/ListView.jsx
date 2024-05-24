import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const ListView = ({ setDetailId }) => {
  const { isLoading, flights, error } = useSelector((store) => store.flight);
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(flights.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        <table className="table table-dark table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Kuyruk Kodu</th>
              <th scope="col">Enlem</th>
              <th scope="col">Boylam</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((flight) => (
              <tr key={flight?.id}>
                <th scope="row">{flight?.id}</th>
                <td>{flight?.code}</td>
                <td>{flight.lat}</td>
                <td>{flight?.lng}</td>
                <td>
                  <button
                    onClick={() => setDetailId(flight.id)}
                    className="btn btn-secondary btn-sm"
                  >
                    Detay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ReactPaginate
        className="pagination justify-content-center my-5"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        pageLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakClassName="page-link"
        activeClassName="active"
        breakLabel="..."
        nextLabel="İleri>"
        previousLabel="<Geri"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ListView;
