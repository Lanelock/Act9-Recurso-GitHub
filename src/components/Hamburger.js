import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import {TweenMax} from "gsap"
import './imagen.scss';

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleSongsReturn,
  handleSongs,
  staggerRevealClose
} from "./Animations";

import Crybaby from "../images/Crybaby.png";
import Been from "../images/Been.webp";
import Life from "../images/Life.jpg";
import Broken from "../images/Broken.jpg";
import Hellboy from "../images/Hellboy.png";
import HeartBroken from "../images/hearthbroken.png";

const songs = [
  { name: "Crybaby", image: Crybaby },
  { name: "I've Been Waiting", image: Been },
  { name: "Life is Beautiful", image: Life },
  { name: "Broken Smile", image: Broken },
  { name: "Hellboy", image: Hellboy }
];


const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let songsBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);
 

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  

    TweenMax.to('#image', 3, {rotationY:360, transformOrigin:"left top",delay: 10,
    repeat: -10,
    repeatDelay: 5,
    immediateRender:true})
    TweenMax.to('#image', 3, {rotationY:360, transformOrigin:"left 50% -200",delay: 5,
    repeat: -5,
    repeatDelay: 5,
    immediateRender:true})


  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (songsBackground = el)}
          className='menu-songs-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/logros'>
                      Logros
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/discografia'>
                      Discografia
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/biografia'>
                      Biografia
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>Iconic Tattoo</h3>
                
                <div className='Heart-image' id="image">
                <img src={HeartBroken} alt="Hearthbreak"/>
                </div>
                
              
                <p>
                <b>Tatuaje:</b> El tatuaje del corazón de Lil Peep se encuentra sobre el logotipo de Anarchy en su mejilla izquierda.
                <div>
                <b>Interpretación:</b> En 2015, Lil Peep se tatuó en la cara este tatuaje de un corazón roto. Era una forma de mostrar lo deprimido que se sentía en ese momento.
                </div>
                </p>
              </div>
              <div className='locations'>
                Best song:
                {/* Returning the list of songs */}
                {songs.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleSongs(el.image, songsBackground)}
                    onMouseOut={() => handleSongsReturn(songsBackground)}>
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;