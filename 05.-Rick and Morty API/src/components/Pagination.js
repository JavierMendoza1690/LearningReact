import React from "react";
import Main from "./Main";
import { useGetData } from "./useGetData";

const Pagination = ({ next, prev, fetchNextPage, fetchPrevPage }) => {
  const handlePrevious = () => {
    fetchPrevPage(prev)
  };

  const handleNext = () => {
    fetchNextPage(next)
  };

  return (
    <nav className="my-3">
      <ul className="pagination justify-content-center">
        {prev && (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        )}
        {
         next && <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        }
      </ul>
    </nav>
  );
};

export default Pagination;
