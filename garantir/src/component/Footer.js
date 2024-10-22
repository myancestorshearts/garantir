import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Garantir.org. All rights reserved.</p>
      <p>
        <Link to="/privacy-policy" className="footer-link">
          Privacy Policy
        </Link>
      </p>
    </footer>
  )
}

export default Footer
