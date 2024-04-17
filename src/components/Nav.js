import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Nav = ({handleSearch}) => {
  return (
	<nav>
			<div>
			<Link to="/">
				<h1>LOGO</h1>
			</Link>
			</div>
			<Search onSearch={handleSearch} />
  </nav>
  )
}

export default Nav