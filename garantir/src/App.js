import React from "react"
import "../src/style.css"
import Logo from "../src/Logo.png"

function App() {
  return (
    <div>
      {/* Header Section */}
      <nav>
        <div className="nav-container">
          <div class="logo">
            <img src={Logo} alt="G" />
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#ourmission">Our Mission</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Your Trusted Partner for Home Clean Solutions</h1>
        <p>
          We take pride in our attention to detail and commitment to customer
          satisfaction.
        </p>
        <button>Request Service</button>
        <button>Discover More</button>
      </section>

      {/* Our Mission Section */}
      <section className="section" id="services">
        <h2>Our Mission</h2>
        <div className="section-content">
          <div>
            <h3>Customer Satisfaction</h3>
            <p>
              We prioritize the needs and preferences of customers, striving to
              exceed expectations.
            </p>
          </div>
          <div>
            <h3>Trustworthiness</h3>
            <p>
              We build trust by being transparent and reliable in all
              interactions.
            </p>
          </div>
          <div>
            <h3>Service on the Go</h3>
            <p>
              Our platform connects professionals to side gigs based on their
              skills.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2>Behind the Company</h2>
        <p>
          Explore our core mission and vision that drives us every day. At
          HomeMaster, we’re not just about cleaning homes, we’re about making a
          difference in the lives of our clients and professionals.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 HomeMaster. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
