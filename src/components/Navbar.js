import React from 'react';

import { Link } from 'react-router-dom';


function Navbar() {
 

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/botcollection' >
           BOT COLLECTON
          </Link>
          <Link to='/yourBotArmy' className='nav-links' >
            YOUR BOTARMY
            </Link>
              </div>
          
            </nav>
    </>
  );
}

export default Navbar;