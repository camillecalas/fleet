import React, { useState} from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SearchResults from "./components/SearchResults";
import MovieDetails from "./components/MovieDetails";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}`
            );
            setSearchResults(response.data.results);
            // Naviguer vers une nouvelle URL pour afficher les résultats de recherche
            navigate("/search-results");
        } catch (error) {
            console.error("Error searching:", error);
        }
    };

    return (
        <div>
            <Nav handleSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/search-results"
                    element={<SearchResults searchResults={searchResults} />}
                />
                <Route path="/:movieId" element={<MovieDetails/>} />
            </Routes>
        </div>
    );
}

export default App;
