import React from 'react';
import TopRated from './MovieLists';

const Home = () => {
    // URL de l'API top rated
    const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API}`;
	const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API}`
	const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API}`

    return (
        <div>
			<h1>Top rated</h1>
            <TopRated apiUrl={topRatedUrl} />
			<h1>Populair</h1>
			<TopRated apiUrl={popular} />
			<h1>Up Coming</h1>
			<TopRated apiUrl={upcoming} />
        </div>
    );
}

export default Home;