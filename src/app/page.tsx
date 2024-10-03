'use client'

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">Luxury Skincare</h1>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#contact" className="nav-link">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <h2 className="home-title">Experience True Luxury</h2>
          <p className="home-description">Discover the finest skincare products for radiant skin.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-container">
          {/* Product 1 */}
          <div className="product-card">
            <Image src="/images/de-products.jpg" alt="Skincare Product 1" width={400} height={400} className="product-image" />
            <h3 className="product-title">Skincare Product 1</h3>
            <p className="product-description">Luxurious hydration for glowing skin.</p>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <Image src="/images/Brand-story-Our-top-stories-on-the-biggest-beauty-brands-in-APAC.jpg" alt="Skincare Product 2" width={400} height={400} className="product-image" />
            <h3 className="product-title">Skincare Product 2</h3>
            <p className="product-description">Revitalize and renew your skin.</p>
          </div>

          {/* Product 3 */}
          <div className="product-card">
            <Image src="/images/cc7c5d4fbc05812908f8556b7ce31fdcf5-drunk-elephant-04.rsquare.w400.webp" alt="Skincare Product 3" width={400} height={400} className="product-image" />
            <h3 className="product-title">Skincare Product 3</h3>
            <p className="product-description">Deep nourishment for radiant beauty.</p>
          </div>

          {/* Product 4 */}
          <div className="product-card">
            <Image src="/images/240610-beauty-awards-2024-skincare-winners-vl-social-91be20.webp" alt="Skincare Product 4" width={400} height={400} className="product-image" />
            <h3 className="product-title">Skincare Product 4</h3>
            <p className="product-description">Protect and perfect your skin.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-input" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-input" placeholder="Enter your email" />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Luxury Skincare by Yemna Mehmood</p>
      </footer>
    </div>
  );
}


