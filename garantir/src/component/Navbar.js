import React from "react"
import Logo from "../../src/Logo.png"
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Company Logo" />
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
