import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import PaginationPage from './components/PaginationPage';
import PaginationVar from './components/PaginationVar';


const apiUrl = 'https://www.omdbapi.com/?s=batman&type=movie&page=1&apikey=7c127bc6';

function App() {

  const [movieList, setMovieList] = useState([{}])
  const [currentPage, setCurrentPage] = useState(1)


  async function getMovieInfo() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setMovieList(data.Search)
  }

  useEffect(() => {
    getMovieInfo()
  }, [])

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  const postPerPage = movieList.length
  console.log(postPerPage)
  return (
    <div className="App">
      <PaginationPage movieList={movieList} />
      <PaginationVar postPerPage={postPerPage} setCount={setCount} />
    </div >
  );
}

export default App;
