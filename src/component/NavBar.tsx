import { Link } from "gatsby"
import * as React from "react";
import "../styles/navbar.scss"

export default function NavBar(){
	return <nav className="navbar">
      <a href="/" className="navbar-brand">
        My Website
      </a>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
}