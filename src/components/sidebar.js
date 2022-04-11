import React from "react"
import { Link } from "gatsby"

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <ul className={`${isOpen ? "sidebar-list" : ""}`}>
        <li className="sidebar-link-container">
          <Link activeClassName="active" to="/" className="sidebar-links">
            Home
          </Link>
        </li>
        <li className="sidebar-link-container">
          <Link to="/shop/" className="sidebar-links" activeClassName="active">
            Shop
          </Link>
        </li>
        <li className="sidebar-link-container">
          <Link to="/about/" className="sidebar-links" activeClassName="active">
            About
          </Link>
        </li>
        <li className="sidebar-link-container">
          <Link
            to="/contact/"
            className="sidebar-links"
            activeClassName="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
