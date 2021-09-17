import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import PaginationPage from './components/PaginationPage';
import PaginationVar from './components/PaginationVar';





function App() {

  const [movieList, setMovieList] = useState([{}])
  const [pagination, setPagination] = useState(1)


  async function getMovieInfo() {
    const response = await fetch(`https://www.omdbapi.com/?s=batman&type=movie&page=${pagination}&apikey=7c127bc6`);
    const data = await response.json();
    setMovieList(data.Search)
  }

  useEffect(() => {
    getMovieInfo()
  }, [pagination])

  const postPerPage = movieList.length
  console.log(postPerPage)
  return (
    <div className="App">
      {pagination}
      <PaginationPage movieList={movieList} />
      <PaginationVar postPerPage={postPerPage} pagination={pagination} setPagination={setPagination} />
    </div >
  );
}

export default App;
