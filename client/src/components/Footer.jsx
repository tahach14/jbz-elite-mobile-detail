import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
export default function Footer(){return <footer className="footer"><div className="container footer-grid">
  <div><Link to="/" className="footer-brand">RELIABLE<span>CAR WASH & DETAILING</span></Link><p>Clean that goes beyond the surface. Professional car wash and detailing services across Illinois.</p></div>
  <div><h4>Explore</h4><Link to="/services">Our Services</Link><Link to="/about">About Us</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link></div>
  <div><h4>Get in touch</h4><p><MapPin size={16}/> Illinois, USA</p><p><Phone size={16}/> (000) 000-0000</p><Link to="/contact" className="text-link">Request an appointment <ArrowUpRight size={15}/></Link></div>
  <div className="footer-cta"><span className="eyebrow">READY FOR A RESET?</span><h3>Give your vehicle the care it deserves.</h3><Link to="/contact" className="btn">Get a quote <ArrowUpRight size={16}/></Link></div>
  </div><div className="container copyright"><span>© {new Date().getFullYear()} Reliable Car Wash & Detailing. All rights reserved.</span><span>Serving Illinois · Built around care</span></div></footer>}