import React, { useState } from 'react';
import { FaGlobe, FaServer, FaLaptopCode } from 'react-icons/fa'; // Иконки из react-icons
import { Modal, Button, Input, Select } from 'antd'; // Modal va boshqa komponentlar
import axios from 'axios'; // Axios kutubxonasini import qilish
import './HomePage.css'; // Stil fayli

const { Option } = Select;

const HomePage = () => {
  const [isDomainModalVisible, setIsDomainModalVisible] = useState(false);
  const [isHostingModalVisible, setIsHostingModalVisible] = useState(false);
  const [isWebsiteModalVisible, setIsWebsiteModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [websitePurpose, setWebsitePurpose] = useState(''); 

  // Modalni ochish va yopish funksiyalari
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
    setIsWebsiteModalVisible(true); // Sayt yaratish modalini ochish
  };

  const handleWebsiteCancel = () => {
    setIsWebsiteModalVisible(false); // Sayt yaratish modalini yopish
  };

  // Telegram botga ma'lumot yuborish funksiyasi
  const handleSubmitDomain = async () => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU'; // O'zingizning bot tokeningizni kiriting
    const chatId = '6914657739'; // O'zingizning chat IDingizni kiriting
  
    const message = `Yangi domen so'rovi:\nIsm: ${name}\nTarif: ${selectedPlan}\nTelefon raqami: ${phoneNumber}`;
  
    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert('Ma\'lumot yuborildi!');
      setIsDomainModalVisible(false); // Modalni yopish
      setName(''); // Ismni tozalash
      setSelectedPlan(''); // Tarifni tozalash
      setPhoneNumber(''); // Telefon raqamini tozalash
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };
  
  const handleSubmitHosting = async () => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU'; // O'zingizning bot tokeningizni kiriting
    const chatId = '6914657739'; // O'zingizning chat IDingizni kiriting
  
    const message = `Yangi hosting so'rovi:\nIsm: ${name}\nTarif: ${selectedPlan}\nTelefon raqami: ${phoneNumber}`;
  
    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert('Ma\'lumot yuborildi!');
      setIsHostingModalVisible(false); // Modalni yopish
      setName(''); // Ismni tozalash
      setSelectedPlan(''); // Tarifni tozalash
      setPhoneNumber(''); // Telefon raqamini tozalash
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };
  
  const handleSubmitWebsite = async () => {
    const token = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU'; // O'zingizning bot tokeningizni kiriting
    const chatId = '6914657739'; // O'zingizning chat IDingizni kiriting
  
    const message = `Yangi sayt so'rovi:\nIsm: ${name}\nTelefon: ${phoneNumber}\nSayt maqsadi: ${websitePurpose}`;
  
    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert('Ma\'lumot yuborildi!');
      setIsWebsiteModalVisible(false); // Modalni yopish
      setName(''); // Ismni tozalash
      setPhoneNumber(''); // Telefon raqamini tozalash
      setWebsitePurpose(''); // Sayt maqsadini tozalash
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };
  
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
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
          <div className="service-card">
            <div className="icon-container">
              <FaGlobe className="service-icon" />
            </div>
            <h3>Домены</h3>
            <p>Поиск и регистрация доменов по лучшим ценам.</p>
          </div>
          <div className="service-card">
            <div className="icon-container">
              <FaServer className="service-icon" />
            </div>
            <h3>Хостинг</h3>
            <p>Мощные серверы и надежное обслуживание для вашего сайта.</p>
          </div>
          <div className="service-card">
            <div className="icon-container">
              <FaLaptopCode className="service-icon" />
            </div>
            <h3>Создание сайтов</h3>
            <p>Разработка уникальных решений для вашего бизнеса.</p>
          </div>
        </div>
      </section>

      {/* Domen Modal */}
      <Modal 
        title="Domen sotib olish uchun murojaat qilish" 
        visible={isDomainModalVisible} 
        onCancel={handleDomainCancel}
        footer={[
          <Button key="cancel" onClick={handleDomainCancel}>
            Bekor qilish
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitDomain}>
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

          <label>Domenn tariflari:</label>
          <Select 
            placeholder="Tarifni tanlang" 
            style={{ width: '100%', marginBottom: '1rem' }} 
            value={selectedPlan} 
            onChange={(value) => setSelectedPlan(value)}
          >
            <Option value="basic">Basic - $10/oyiga</Option>
            <Option value="standard">Standard - $20/oyiga</Option>
            <Option value="premium">Premium - $30/oyiga</Option>
          </Select>

          <label>Telefon raqamingiz:</label>
          <Input 
            placeholder="Telefon raqamingizni kiriting" 
            style={{ marginBottom: '1rem' }} 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </div>
      </Modal>

      {/* Hosting Modal */}
      <Modal 
        title="Hostingni tanlash" 
        visible={isHostingModalVisible} 
        onCancel={handleHostingCancel}
        footer={[
          <Button key="cancel" onClick={handleHostingCancel}>
            Bekor qilish
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitHosting}>
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

          <label>Hosting tariflari:</label>
          <Select 
            placeholder="Tarifni tanlang" 
            style={{ width: '100%', marginBottom: '1rem' }} 
            value={selectedPlan} 
            onChange={(value) => setSelectedPlan(value)}
          >
            <Option value="basic">Basic - $5/oyiga</Option>
            <Option value="standard">Standard - $10/oyiga</Option>
            <Option value="premium">Premium - $20/oyiga</Option>
          </Select>

          <label>Telefon raqamingiz:</label>
          <Input 
            placeholder="Telefon raqamingizni kiriting" 
            style={{ marginBottom: '1rem' }} 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </div>
      </Modal>
      <Modal
        title="Sayt yaratish uchun murojaat qilish"
        open={isWebsiteModalVisible}
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
};

export default HomePage;
