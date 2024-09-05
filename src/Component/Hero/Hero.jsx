import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import logo1 from '../../assets/Frame 2.png';
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import yellov from '../../assets/yellov.png';
import e from '../../assets/e.png';
import Typed from 'typed.js';
import { Modal, Button, Input, Select } from 'antd'; // Modal va boshqa komponentlar
import axios from 'axios'; // Axios kutubxonasini import qilish

const { Option } = Select;

function Hero() {
  const typedElement = useRef(null);
  const [isWebsiteModalVisible, setIsWebsiteModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [websitePurpose, setWebsitePurpose] = useState('');

  useEffect(() => {
    const options = {
      strings: [
        'Sizning raqamli muvaffaqiyatingiz uchun xizmatlar', 
        'Biznesingizni rivojlantirish uchun eng yaxshi yechimlar'
      ],
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 3000,
      loop: true,
    };
    const typed = new Typed(typedElement.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  // Modal ochish va yopish funksiyalari
  const showWebsiteModal = () => {
    setIsWebsiteModalVisible(true);
  };

  const handleWebsiteCancel = () => {
    setIsWebsiteModalVisible(false);
  };

  const handleSubmitWebsite = async () => {
    const token = 'BOT_TOKEN'; // O'zingizning bot tokeningizni kiriting
    const chatId = 'CHAT_ID'; // O'zingizning chat IDingizni kiriting

    const message = `Yangi sayt so'rovi:\nIsm: ${name}\nTelefon: ${phoneNumber}\nSayt maqsadi: ${websitePurpose}`;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert('Ma\'lumot yuborildi!');
      setIsWebsiteModalVisible(false); // Modalni yopish
      setName(''); // Inputlarni tozalash
      setPhoneNumber('');
      setWebsitePurpose('');
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-list">
          <img src={logo1} alt="Logo" className="hero-logo" />
          <ul className="hero-navbar">
            <li className="foother-navbar-item">
              <a href="#" className="hero-link">О нас</a>
            </li>
            <li className="foother-navbar-item">
              <a href="#" className="hero-link">Услуги</a>
            </li>
            <li className="foother-navbar-item">
              <a href="#" className="hero-link">Тарифы и цены</a>
            </li>
            <li className="foother-navbar-item">
              <a href="#" className="hero-link">Блог</a>
            </li>
          </ul>
          <button className="hero-btn">Bog'lanish</button>
        </div>
        <div className="hero-box">
          <nav>
            <nav className='hero-boxses'>
              <h1 id="my-element">
                STAR<span style={{color: '#1b2332'}}>NEWTEC-</span> <span ref={typedElement} style={{color: '#1b2332', width: 450, height: 500}}></span>
              </h1> 
            </nav>
            <button className="hero-btnes" onClick={showWebsiteModal}>Murojat Qilish</button> 
            <a href="https://www.linkedin.com/in/isomiddin-qurbonov-662537304/" target="_blank" rel="noopener noreferrer" className='hero-lnk-btn'>
              <CiLinkedin />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hero-fac-btn">
              <FaFacebook />
            </a>
            <a href="https://www.threads.net/@kurbonov__me?xmt=AQGzeFaWWXO6cWqq1nS4RvdytVHMJ0BZxH5uvxUKzLt2qZw" target="_blank" rel="noopener noreferrer" className="hero-imst-btn">
              <FaInstagram />
            </a>
          </nav>
          <nav className='hero-images'>
            <img src={yellov} alt="Rasm" className='hero-img'/>
            <img src={e} alt="Rasm" className='hero-icons'/>
          </nav>
        </div>
      </div>

      {/* Sayt yaratish uchun modal */}
      <Modal
        title="Sayt yaratish uchun murojaat qilish"
        visible={isWebsiteModalVisible}
        onCancel={handleWebsiteCancel}
        footer={[
          <Button key="cancel" onClick={handleWebsiteCancel}>
            Bekor qilish
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitWebsite}>
            Yuborish
          </Button>,
        ]}
      >
        <div>
          <label>Ismingiz:</label>
          <Input
            placeholder="Ismingizni kiriting"
            style={{ marginBottom: '1rem' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Telefon raqamingiz:</label>
          <Input
            placeholder="Telefon raqamingizni kiriting"
            style={{ marginBottom: '1rem' }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label>Sayt maqsadi:</label>
          <Select
            placeholder="Sayt maqsadini tanlang"
            style={{ width: '100%', marginBottom: '1rem' }}
            value={websitePurpose}
            onChange={(value) => setWebsitePurpose(value)}
          >
            <Option value="ish">Ish uchun</Option>
            <Option value="biznes">Biznes</Option>
            <Option value="shaxsiy_blog">Shaxsiy blog</Option>
            <Option value="ta'lim">Ta'lim</Option>
            <Option value="do'kon">Online do'kon</Option>
          </Select>
        </div>
      </Modal>
    </div>
  );
}

export default Hero;
