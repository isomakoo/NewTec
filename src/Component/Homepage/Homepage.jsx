import React, { useState, useEffect } from 'react';
import Aos from 'aos'; // Import Aos library
import 'aos/dist/aos.css'; // Import Aos styles
import { FaGlobe, FaServer, FaLaptopCode } from 'react-icons/fa';
import { Modal, Button, Input, Select } from 'antd';
import axios from 'axios';
import './HomePage.css';

const { Option } = Select;

const HomePage = () => {
  const [isDomainModalVisible, setIsDomainModalVisible] = useState(false);
  const [isHostingModalVisible, setIsHostingModalVisible] = useState(false);
  const [isWebsiteModalVisible, setIsWebsiteModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [websitePurpose, setWebsitePurpose] = useState(''); 

  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize Aos with a duration of 1000ms
  }, []);

  // Functions to handle modal visibility
  const showDomainModal = () => {
    setIsDomainModalVisible(true);
  };

  const handleDomainCancel = () => {
    setIsDomainModalVisible(false);
  };

  const showHostingModal = () => {
    setIsHostingModalVisible(true);
  };

  const handleHostingCancel = () => {
    setIsHostingModalVisible(false);
  };

  const showWebsiteModal = () => {
    setIsWebsiteModalVisible(true);
  };

  const handleWebsiteCancel = () => {
    setIsWebsiteModalVisible(false);
  };

  // Submit functions for Telegram
  const handleSubmitDomain = async () => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU'; 
    const chatId = '6914657739'; 
    const message = `Yangi domen so'rovi:\nIsm: ${name}\nTarif: ${selectedPlan}\nTelefon raqami: ${phoneNumber}`;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert('Ma\'lumot yuborildi!');
      setIsDomainModalVisible(false);
      setName('');
      setSelectedPlan('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };

  const handleSubmitHosting = async () => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU';
    const chatId = '6914657739';
    const message = `Yangi hosting so'rovi:\nIsm: ${name}\nTarif: ${selectedPlan}\nTelefon raqami: ${phoneNumber}`;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert('Ma\'lumot yuborildi!');
      setIsHostingModalVisible(false);
      setName('');
      setSelectedPlan('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };

  const handleSubmitWebsite = async () => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU';
    const chatId = '6914657739';
    const message = `Yangi sayt so'rovi:\nIsm: ${name}\nTelefon: ${phoneNumber}\nSayt maqsadi: ${websitePurpose}`;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert('Ma\'lumot yuborildi!');
      setIsWebsiteModalVisible(false);
      setName('');
      setPhoneNumber('');
      setWebsitePurpose('');
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };

  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">NewTec - Ваш цифровой успех начинается здесь</h1>
          <p className="hero-subtitle">Предоставляем полный спектр услуг для вашего онлайн бизнеса</p>
          <div className="cta-buttons">
            <Button className="cta-button" onClick={showDomainModal}>Domen sotib olish</Button>
            <Button className="cta-button" onClick={showHostingModal}>Hostingni tanlash</Button>
            <Button className="cta-button" onClick={showWebsiteModal}>Sayt Yaratish</Button>
          </div>
        </div>
      </header>
      <section className="services-preview">
        <h2>Наши Услуги</h2>
        <div className="service-cards">
          <div className="service-card" data-aos="fade-right">
            <div className="icon-container">
              <FaGlobe className="service-icon" />
            </div>
            <h3>Домены</h3>
            <p>Поиск и регистрация доменов по лучшим ценам.</p>
          </div>
          <div className="service-card" data-aos="fade-up">
            <div className="icon-container">
              <FaServer className="service-icon" />
            </div>
            <h3>Хостинг</h3>
            <p>Мощные серверы и надежное обслуживание для вашего сайта.</p>
          </div>
          <div className="service-card" data-aos="fade-left">
            <div className="icon-container">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3>Создание сайтов</h3>
            <p>Разработка уникальных решений для вашего бизнеса.</p>
          </div>
        </div>
      </section>

      {/* Modal components go here... */}
    </div>
  );
};

export default HomePage;
