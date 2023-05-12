import React from 'react';
import '../../styles/styles.css';

export const Navbar = ({isScrolling}) => {

  const handleTop = ()=>
  {
    window.scrollTo({top:0, left:0, behavior:"smooth"})
  }

  return (
    <nav className={`navbar ${isScrolling>20? "scrolling": null}`}>
        <div className='navbar-logo' onClick={handleTop}> 
        Jeisson Ceballos
        </div>
    </nav>
  )
}
