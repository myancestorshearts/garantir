import React from "react"
import "./style.css" // If you need external CSS

const handleOpenApp = () => {
  const appUrl = "guaranter://home"
  const fallbackUrl = "https://www.yourwebsite.com/app-download" // Replace with your actual fallback URL

  // Check if the device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (isMobile) {
    // Attempt to open the app URL
    window.location.href = appUrl

    // Fallback to website if the app doesn't open within 1 second
    setTimeout(() => {
      window.location.href = fallbackUrl
    }, 1000)
  } else {
    // Show a message or redirect desktop users directly to the fallback
    alert("This functionality is available on mobile devices only.")
    window.location.href = fallbackUrl
  }
}

function App() {
  return (
    <div>
      {/* Header Section */}
      <nav style={styles.navbar}>
        <ul style={styles.navLinks}>
          <li>
            <a href="#home" style={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" style={styles.link}>
              About
            </a>
          </li>
          <li>
            <a href="#mission" style={styles.link}>
              Our Mission
            </a>
          </li>
          <li>
            <a href="#privacy-policy" style={styles.link}>
              Privacy Policy
            </a>
          </li>
          {/* New Anchor Link to Open the App */}
          <li>
            <button onClick={handleOpenApp} style={styles.link}>
              Open the App
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <section id="home" style={styles.section}>
        <h1>Welcome to Our Website</h1>
        <p>
          We provide great services. Scroll down to read more about our privacy
          policy.
        </p>
      </section>

      <section id="about" style={styles.section}>
        <h2>About Us</h2>
        <p>
          Explore our core mission and vision that drives us every day. We’re
          not just about providing services, we’re about making a difference in
          the lives of our clients.
        </p>
      </section>

      <section id="mission" style={styles.section}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to ensure customer satisfaction by offering top-notch
          services that meet their needs and preferences.
        </p>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" style={styles.privacySection}>
        <h2>Privacy Policy</h2>
        <p>
          This Privacy Policy outlines how we collect, use, and protect your
          personal information.
        </p>
        <h3>Information Collection</h3>
        <p>
          We collect personal information such as your name, email address, and
          other contact details when you interact with our website.
        </p>
        <h3>Use of Information</h3>
        <p>
          The information we collect is used to improve our services,
          personalize your experience, and communicate with you regarding
          updates or offers.
        </p>
        <h3>Data Security</h3>
        <p>
          We take the security of your data seriously and implement various
          measures to ensure its protection.
        </p>
        <h3>Your Rights</h3>
        <p>
          You have the right to access, update, or delete your personal
          information. If you have any questions about our privacy policy, feel
          free to contact us.
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

const styles = {
  navbar: {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid #ccc",
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#15604B",
    fontWeight: "bold",
  },
  section: {
    padding: "40px 20px",
    textAlign: "center",
  },
  privacySection: {
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  navButton: {
    padding: "8px 15px",
    backgroundColor: "#15604B",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "none", // Ensures the button appearance
  },
  footer: {
    backgroundColor: "#15604B",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
}

export default App
