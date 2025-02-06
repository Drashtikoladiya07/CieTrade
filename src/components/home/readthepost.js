import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";

// Page component renders a page number and provides next/previous navigation buttons
const Page = ({ number, total }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (number < total) navigate(`/page/${number + 1}`);
  };

  const handlePrevious = () => {
    if (number > 1) navigate(`/page/${number - 1}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Page {number}</h1>
      <button onClick={handlePrevious} disabled={number === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={number === total}>
        Next
      </button>
    </div>
  );
};

// DynamicPage fetches the page number from the URL and renders the Page component accordingly
const DynamicPage = () => {
  const { id } = useParams();
  const pageNumber = parseInt(id, 10);
  return <Page number={pageNumber} total={10} />;
};

// Main App component renders the router with different routes
const Readthepost = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page number={1} total={10} />} />
        <Route path="/page/:id" element={<DynamicPage />} />
      </Routes>
    </Router>
  );
};

export default Readthepost;