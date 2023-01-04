import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

const Nav = () => {
  return (
    <ul>
      <li>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "crimson",
            color: "white",
            padding: "10px",
            borderRadius: "25px",
          }}
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          to="/menu" onMouseOver="this.style.color='black'"
          style={{
            textDecoration: "none",
            backgroundColor: "crimson",
            color: "white",
            padding: "10px",
            borderRadius: "25px"
          }} 
        >
          MENU
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            backgroundColor: "crimson",
            color: "white",
            padding: "10px",
            borderRadius: "25px",
          }}
        >
          SIGNUP
        </Link>
      </li>
    </ul>
  );
}

export default Nav