import React, { useState, useEffect } from 'react';
import Contact from '../company/contactus';
import Brochures from '../resources/brochures';
import Bagricultural from '../brochures/b-agricultural';
import Bcommodity from '../brochures/b.commodity';
import Binternational from '../brochures/b-international';

const PageList = [Contact, Brochures, Bagricultural, Bcommodity, Binternational];

function Readthepost() {
  const [currentPage, setCurrentPage] = useState(() =>
    parseInt(localStorage.getItem('currentPage')) || 0
  );

  useEffect(() => localStorage.setItem('currentPage', currentPage), [currentPage]);
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [currentPage]);

  const changePage = (offset) => setCurrentPage((prev) => prev + offset);

  const CurrentPage = PageList[currentPage];

  return (
    <div>
      <CurrentPage />
      <div className="flex justify-between mt-4">
        <button
          onClick={() => changePage(-1)}
          disabled={currentPage === 0}
          className={`mx-5 mb-3 text-red-600`}><i class="fa-solid fa-arrow-left text-sm px-2"></i> Previous Post
        </button>
        <button
          onClick={() => changePage(1)}
          disabled={currentPage === PageList.length - 1}
          className={`mx-5 mb-3 text-red-600`}>Next Post <i class="fa-solid fa-arrow-right text-sm px-2"></i>
        </button>
      </div>
    </div>
  );
}

export default Readthepost;