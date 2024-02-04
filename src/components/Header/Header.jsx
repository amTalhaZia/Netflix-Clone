import React from 'react'
import logo from "../../logo.png"
import { Link } from 'react-router-dom'
import "../../Styles/Header.css"
import { TfiSearch } from "react-icons/tfi";

const Header = () => {
  return (
    <nav className='header' >
      <img src={logo} alt="logo" />
      <div className='wrapper' >
        <Link to="/tvshow" >TV Shows </Link>
        <Link to="/movies" >Movies</Link>
        <Link to="/recent" >Recently</Link>
        <Link to="/mylist" >My  List</Link>
      </div>
      <TfiSearch />
    </nav>
  )
}

export default Header
