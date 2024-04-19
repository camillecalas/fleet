import React from 'react'
import styled from 'styled-components'
import tmbd from '../images/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg'

const Footer = () => {
  return (
	<StyledFooter>
				<a href="https://developer.themoviedb.org/docs/getting-started" target="_blank" rel="noopener noreferrer">
 			 		<img src={tmbd} alt="TMDB logo" />
				</a>
			</StyledFooter>
  )
}

export default Footer


const StyledFooter = styled.footer`
	background: #282828;
	height: 3rem;
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	img{
		width: 40%;
		margin: 0; 
	}

	a {
		margin: 0 !important;
		text-align: center; 
	}
`;
