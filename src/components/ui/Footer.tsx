import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8"> 

     <div className="footer-content">
        <div className="footer-section">   

          <h5>About Us</h5>
          <p>Music School is a premier institution dedicated to teaching the art and science of music.</p>
        </div>
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">   

          <h5>Follow Us</h5>
          <ul>
            <li><a href="#" target="_blank">Facebook</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
            <li><a href="#" target="_blank">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">   

          <h5>Contact Us</h5>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email:</p>
          <p>info@musicschool.com</p>
          <img src="/path/to/your/logo.png" alt="Music School Logo" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-controls">
          <button>||</button>
          <button>CC</button>
          <button>⚙️</button>
          <button>■</button>
          <button>□</button>
          <button>▣</button>
        </div>
        <p>7:23 / 28:24</p>
      </div>
     </div>
    </footer>
  )
}

export default Footer
