import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Search from './components/Search';
import Home from './components/Home';
import Nav from './components/Nav';
import SearchResults from './SearchResults';

function App() {
	const [movies, setMovies] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const navigate = useNavigate();

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
		// Naviguer vers une nouvelle URL pour afficher les résultats de recherche
		navigate('/search-results');
		} catch (error) {
		console.error('Error searching:', error);
		}
  	};

	return (
		<div>
		<Nav handleSearch={handleSearch} />
		<Routes>
			<Route path="/" element={<Home  />} />
			<Route path="/search-results" element={<SearchResults searchResults={searchResults} />} />
		</Routes>
		</div>
	);
}



export default App;
