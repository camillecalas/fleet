import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import TopRated from './components/TopRated';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
		<div>
			<h1>LOGO</h1>
			<Search onSearch={handleSearch} />
			{searchResults.length > 0 ? (
				searchResults.map((movie) => (
				<img
					key={movie.id}
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
				/>
				))
			) : (
				<TopRated/>
			)}
		</div>
	);
}

export default App;


