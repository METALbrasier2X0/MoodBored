import React from 'react';

/**
 * Code to show the home page
 * @return  {React element}             Containers that shows the home page   
 */

function BoardIcon(props) {

  return (
   <>

    <div className='navbar__bubbles__board navbar__bubbles__element'> 
    <figure>
    <img src={props.link} alt={props.alt} />
    <figcaption>{props.caption}</figcaption>
    </figure> 
    </div>


    </>

  );
}

export default BoardIcon;