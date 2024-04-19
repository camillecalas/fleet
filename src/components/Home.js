import React from 'react';
import MovieLists from './MovieLists';
import styled from 'styled-components'

const Home = () => {
    // URL de l'API top rated
    const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API}`;
	const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API}`
	const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API}`

    return (
        <StyledContainener>
			<h1>Top rated</h1>
            <MovieLists apiUrl={topRatedUrl} />
			<h1>Popular</h1>
			<MovieLists apiUrl={popular} />
			<h1>Up Coming</h1>
			<MovieLists apiUrl={upcoming} />
        </StyledContainener>
    );
}

export default Home;

const StyledContainener = styled.div`
	
	h1{
		/* color:#23d997; */
		margin: 3rem 4rem 1rem 4rem;
	}

	@media (max-width: 1300px) {
		h1{
			align-items: center;
			margin: 3rem 0rem 1rem 1rem;
	}
	}
   
	
`;