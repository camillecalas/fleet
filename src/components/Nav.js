import React from 'react'
import { Link } from 'react-router-dom'
import Search from './SearchBar'
import styled from 'styled-components'

const Nav = ({handleSearch}) => {
  return (
	<StyledNav>
			<Link to="/">
				<h1 id='logo'>The Movies</h1>
			</Link>
			<Search onSearch={handleSearch} />
  </StyledNav>
  )
}

export default Nav


const StyledNav = styled.nav`
	min-height: 5vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 5rem;
	background: #282828;

	Link{
		color: white;
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: lighter;
	}

	a {
		color: white;
		text-decoration: none;
	}

	#logo{
		font-size: 1.5rem;
		font-family: "Anton", sans-serif;
		color: #fdd82e;
		text-decoration: none;
	}

	@media (max-width: 1300px) {
		flex-direction: column;
		padding: 2rem 1rem;
		#logo {
		display: inline-block;
		margin: 1rem;
		}
	}
`;