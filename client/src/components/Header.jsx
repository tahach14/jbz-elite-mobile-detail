import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'
const links = [['Home','/'],['Services','/services'],['About','/about'],['Gallery','/gallery'],['Contact','/contact']]
export default function Header() {
  const [open,setOpen] = useState(false)
  return <header className="header"><div className="nav-wrap">
    <Link to="/" className="brand"><img src="/images/reliable-logo.png" alt="Reliable Car Wash & Detailing logo" /><span>RELIABLE<small>CAR WASH & DETAILING</small></span></Link>
    <nav className={open?'nav-links show':'nav-links'}>{links.map(([label,path])=><NavLink key={path} to={path} end={path==='/'} onClick={()=>setOpen(false)}>{label}</NavLink>)}</nav>
    <div className="nav-actions"><a className="phone-link" href="tel:0000000000"><Phone size={15}/> (000) 000-0000</a><Link className="btn btn-small" to="/contact">Book a Detail <ArrowUpRight size={16}/></Link></div>
    <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div></header>
}