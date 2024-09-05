import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import "./Foother.css"; // Stil faylini chaqiradi

const Foother = () => {
  return (
    <div>
      <div className="foother-navbar">
        <div>
          <ul className="foother-list">
            <li className="foother-item">
              <p className="foother-title">
                <span style={{color: '#e57f34'}}>STAR</span>NEWTEC
              </p>
              <p className="foother-item-title">
                STARNEWTEC - Biznesingizni rivojlantirish uchun eng yaxshi yechimlar
              </p>
              <div className="social-buttons">
                <a href="https://www.linkedin.com/in/isomiddin-qurbonov-662537304/" target="_blank" rel="noopener noreferrer" className="hero-lnk-btn">
                  <CiLinkedin />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hero-fac-btn">
                  <FaFacebook />
                </a>
                <a href="https://www.threads.net/@kurbonov__me?xmt=AQGzeFaWWXO6cWqq1nS4RvdytVHMJ0BZxH5uvxUKzLt2qZw" target="_blank" rel="noopener noreferrer" className="hero-imst-btn">
                  <FaInstagram />
                </a>
              </div>
            </li>
            <li className="foother-item">
              <h4 className="foother-item-texts">Quick Links</h4>
              <a href="#" className="foother-link">О нас</a> <br />
              <a href="#" className="foother-link">Услуги</a> <br />
              <a href="#" className="foother-link">Тарифы и цены</a> <br />
              <a href="#" className="foother-link">Блог</a>
            </li>
            <li className="foother-item">
              <h4 className="foother-item-texts">Contact Us</h4>
              <a href="tel:+998901234567" className="foother-link">
                <BsTelephone style={{width: 30, height: 20}} /> +998 90 123 45 67
              </a> <br />
              <a href="mailto:starnewtec@gmail.com" className="foother-link">
                <MdOutlineMail style={{width: 30, height: 20}} /> starnewtec@gmail.com
              </a> <br />
              <a href="#" className="foother-link">
                <MdOutlineLocationOn style={{width: 30, height: 20}} /> Toshkent Shahri, Yunusobod tumani
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="containers">
          <p>&copy; 2024 NewTec. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
};

export default Foother;
