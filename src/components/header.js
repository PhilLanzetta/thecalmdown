import React, { useContext } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa"
import { GatsbyImage } from "gatsby-plugin-image"
import { CartContext } from "./cartContext"

const query = graphql`
  {
    file(relativePath: { eq: "CDB_Logo.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

const Header = ({ toggleSidebar, isOpen }) => {
  const data = useStaticQuery(query)
  const cart = useContext(CartContext)

  const cartCount = cart.getCartCount()

  return (
    <header>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link className="logo-link" to="/">
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                className="logo-pic"
              />
            </Link>
            <ul className="nav-links">
              <li>
                <Link activeClassName="active" to="/" className="page-link">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/"
                  className="page-link"
                  activeClassName="active"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about/"
                  className="page-link"
                  activeClassName="active"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="page-link"
                  activeClassName="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mobile-header-btns">
              <Link to="/checkout" aria-label="cart" className="cart-btn">
                {cartCount > 0 && (
                  <div className="cart-number">{cartCount}</div>
                )}
                <FaShoppingBag></FaShoppingBag>
              </Link>
              {isOpen ? (
                <button
                  type="button"
                  onClick={toggleSidebar}
                  aria-label="close sidebar"
                  className="toggle-btn"
                >
                  <FaTimes></FaTimes>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={toggleSidebar}
                  aria-label="open sidebar"
                  className="toggle-btn"
                >
                  <FaBars></FaBars>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
