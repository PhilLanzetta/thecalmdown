import React from "react"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="footer-link-lists">
        <div className="footer-navigation">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/" className="page-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop/" className="page-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about/" className="page-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact/" className="page-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-legal">
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to="/terms/" className="page-link">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy/" className="page-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refunds/" className="page-link">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-divide"></div>
      <div className="footer-social">
        <div className="footer-social-link-container">
          <a className="footer-social-link" href="https://www.facebook.com">
            <FaFacebookSquare></FaFacebookSquare>
          </a>
          <a className="footer-social-link" href="https://www.instagram.com">
            <FaInstagramSquare></FaInstagramSquare>
          </a>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()}, The Calm Down Box
        </div>
      </div>
    </footer>
  )
}

export default Footer
