import React from 'react';
import "./Main.css"
import bby from "../../assets/icon7.png"
import color from '../../assets/icon9.png'
import seo from '../../assets/icon12.png'
import header from '../../assets/icon6.png'
import development from '../../assets/icon2.png'
import area from '../../assets/icon5.png'
import post from '../../assets/icon1.png'
import blogs from '../../assets/icon3.png'
import { FaRoad } from 'react-icons/fa';

function Main() {
  return (
    <div>
       <div className="main">
        <div className="container">
          <h1 className='main-title'>Procus features</h1>
          <ul className="main-navbar">
            <li className="main-item">
              <img src={post} alt="Rasm" className='main-icon'/>
              <h2 className="main-item-title">Post Layouts</h2>
              <p className="main-item-text">Procus has 5 unique post layouts, each with 3 flexible content layout options in a Standard, Gallery, or Video format.</p>
            </li>
            <li className="main-item">
              <img src={development} alt="Rasm" className='main-icon' />
              <h2 className="main-item-title">Development Ready</h2>
              <p className="main-item-text">Build pixel-perfect posts & pages with Gutenberg's content system, including Procus's custom "Post Grid" block.</p>
            </li>
            <li className="main-item">
              <img src={blogs} alt="Rasm"  className='main-icon'/>
              <h2 className="main-item-title">Blog Layouts</h2>
              <p className="main-item-text">Beautifully structure your content with 8 distinct blog layout designs & additional customization options.</p>
            </li>
            <li className="main-item">
              <img src={area} alt=""  className='main-icon'/>
              <h2 className="main-item-title">Featured Area</h2>
              <p className="main-item-text">The 7 striking featured area designs artfully showcase your content while packing a major visual punch!</p>
            </li>
            <li className="main-item">
              <img src={header} alt="" className='main-icon'/>
              <h2 className="main-item-title">Header layouts</h2>
              <p className="main-item-text">The 3 unique & attractive header options let you expertly frame your menu, logo, & more in elegant simplicity.</p>
            </li>
            <li className="main-item">
              <img src={bby} alt="Rasm" className='main-icon'/>
              <h2 className="main-item-title">Legendary Support</h2>
              <p className="main-item-text">Have questions? knock any time. we'll reply as early as possible</p>
            </li>
            <li className="main-item">
              <img src={color} alt="" className='main-icon'/>
              <h2 className="main-item-title">Color & Typography</h2>
              <p className="main-item-text">A boatload of built-in options makes intuitively customizing your color & typography styles a total breeze.</p>
            </li>
            <li className="main-item">
              <img src={seo} alt="Rasm" className='main-icon' />
              <h2 className="main-item-title">SEO Friendly</h2>
              <p className="main-item-text">Procus is coded to current SEO best practices and 100% compatible with the powerful & popular Yoast SEO plugin.</p>
            </li>
          </ul>
        </div>
       </div>
    </div>
  );
}

export default Main;
