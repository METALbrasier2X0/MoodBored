import React from 'react';

/**
 * Code to display the navbar page
 * @return  {React element}             Containers that shows the home page   
 */

import BoardIcon from './BoardIcon';

function Navbar() {

  return (
   <>
    <div className='navbar'>        

        <div className='navbar__bubbles'>
        <div className='navbar__bubbles__home navbar__bubbles__element'> </div>

        <BoardIcon link="" alt="" />
        <BoardIcon link="" alt="" />
        <BoardIcon link="" alt="" />
        
        <div className='navbar__bubbles__search navbar__bubbles__element'> </div>
        </div>
        <div className='navbar__account'>
        <div className='navbar__account__settings navbar__account__element '> </div>
        <div className='navbar__account__profile navbar__account__element '> </div>
        </div>


    </div>
   </>


  );
}

export default Navbar;