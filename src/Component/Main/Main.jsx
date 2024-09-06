import React from 'react';
import './Main.css';
import bby from '../../assets/icon7.png';
import color from '../../assets/icon9.png';
import seo from '../../assets/icon12.png';
import header from '../../assets/icon6.png';
import development from '../../assets/icon2.png';
import area from '../../assets/icon5.png';
import post from '../../assets/icon1.png';
import blogs from '../../assets/icon3.png';
import { motion } from 'framer-motion'; // Framer Motion import qilinadi

function Main() {
  // Animatsiya uchun variantlar
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <div className="main">
        <div className="container">
          <motion.h1
            className="main-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Procus features
          </motion.h1>

          <motion.ul
            className="main-navbar"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
            }}
          >
            {[
              { img: post, title: 'Post Layouts', text: 'Procus has 5 unique post layouts...' },
              { img: development, title: 'Development Ready', text: 'Build pixel-perfect posts...' },
              { img: blogs, title: 'Blog Layouts', text: 'Beautifully structure your content...' },
              { img: area, title: 'Featured Area', text: 'The 7 striking featured area designs...' },
              { img: header, title: 'Header layouts', text: 'The 3 unique & attractive header...' },
              { img: bby, title: 'Legendary Support', text: 'Have questions? knock any time...' },
              { img: color, title: 'Color & Typography', text: 'A boatload of built-in options...' },
              { img: seo, title: 'SEO Friendly', text: 'Procus is coded to current SEO...' },
            ].map((item, index) => (
              <motion.li
                className="main-item"
                key={index}
                variants={itemVariants}
              >
                <img src={item.img} alt="Rasm" className="main-icon" />
                <h2 className="main-item-title">{item.title}</h2>
                <p className="main-item-text">{item.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
