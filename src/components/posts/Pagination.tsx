import React from 'react';
import { ceil } from 'es-toolkit/compat';

interface PaginationProperties {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: PaginationProperties) => {
  const pageNumbers = Array.from(
    { length: ceil(totalPosts / postsPerPage) },
    (_, index) => index + 1
  );

  // If there is only one page, don't show pagination
  if (pageNumbers.length === 1) return null;

  return (
    <nav className='mt-4 flex justify-center'>
      <ul className='flex space-x-2'>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentPage === number ? 'font-bold' : ''}
          >
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
