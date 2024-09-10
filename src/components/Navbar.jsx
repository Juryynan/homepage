

import { useState } from 'react'
import '../App.css'
import Menu from './Menu';

export default function Navbar ({title, onAbout, onContact}) {
   
    const [clicked, isClicked] = useState(false);

    function eventClick(){
        isClicked(!clicked);
    }

    
    return(
        <section className="Nav">
            <div className="nav-items">
            <h1>{title}</h1>   <button
                    onClick={onAbout}
                >Home</button>
                <button 
                    onClick={onContact}
                >About
                </button>
            </div>
            <div className="nav-mobile">
                <button onClick={eventClick}><img src="src/assets/hamburger.png"></img></button>
                {clicked ? 
                    <Menu 
                        onAbout={onAbout} 
                        onContact={onContact}
                        hide={isClicked}
                /> 
                : 
                <></>}
            </div>
        </section>
    )
    
}