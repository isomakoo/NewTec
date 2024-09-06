import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Select } from 'antd';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './faq.css';

const { Option } = Select;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDomainModalVisible, setIsDomainModalVisible] = useState(false);
  const [isWebsiteModalVisible, setIsWebsiteModalVisible] = useState(false);
  const [isTechnicalModalVisible, setIsTechnicalModalVisible] = useState(false);

  const [name, setName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [websitePurpose, setWebsitePurpose] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Animation happens only once
    });
  }, []);

  const questions = [
    { 
      question: "NewTec qanday xizmatlarni taqdim etadi?", 
      answer: "NewTec turli xil xizmatlarni taqdim etadi, jumladan: Veb-sayt yaratish va dizayn, Domen va hosting xizmatlari, Texnik qo'llab-quvvatlash, SEO va marketing.", 
      action: "NewTec xizmatlaridan foydalanish uchun bog'laning",
      modalType: 'website'
    },
    { 
      question: "Domenlarni qanday sotib olsam bo'ladi?", 
      answer: "Domen sotib olish uchun domen nomini tanlash, domen ro'yxatga olish kompaniyasini tanlash, domenni ro'yxatga olish, va DNS sozlamalarini konfiguratsiya qilish zarur.", 
      action: "Domen sotib olish uchun murojaat qiling",
      modalType: 'domain'
    },
    { 
      question: "Texnik qo'llab-quvvatlash qanday ishlaydi?", 
      answer: "Texnik qo'llab-quvvatlash muammo aniqlash, yechim topish, yordam ko'rsatish, va monitoring orqali amalga oshiriladi.", 
      action: "Texnik qo'llab-quvvatlash uchun murojaat qiling",
      modalType: 'technical'
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const showModal = (type) => {
    switch (type) {
      case 'domain':
        setIsDomainModalVisible(true);
        break;
      case 'website':
        setIsWebsiteModalVisible(true);
        break;
      case 'technical':
        setIsTechnicalModalVisible(true);
        break;
      default:
        break;
    }
  };

  const handleModalCancel = (type) => {
    switch (type) {
      case 'domain':
        setIsDomainModalVisible(false);
        break;
      case 'website':
        setIsWebsiteModalVisible(false);
        break;
      case 'technical':
        setIsTechnicalModalVisible(false);
        break;
      default:
        break;
    }
  };

  const sendToTelegram = async (message) => {
    const token = 'YOUR_BOT_TOKEN'; // Replace with your bot token
    const chatId = 'YOUR_CHAT_ID'; // Replace with your chat ID

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });
      alert('Ma\'lumot yuborildi!');
    } catch (error) {
      console.error('Telegram botga ma\'lumot yuborishda xatolik:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };

  const handleSubmitDomain = async () => {
    const message = `Yangi domen so'rovi:\nIsm: ${name}\nTarif: ${selectedPlan}\nTelefon raqami: ${phoneNumber}`;
    await sendToTelegram(message);
    handleModalCancel('domain');
  };

  const handleSubmitWebsite = async () => {
    const message = `Yangi sayt so'rovi:\nIsm: ${name}\nTelefon: ${phoneNumber}\nSayt maqsadi: ${websitePurpose}`;
    await sendToTelegram(message);
    handleModalCancel('website');
  };

  return (
    <div className="faq-container" data-aos="fade-up">
      <h3>Tez-tez so'raladigan savollar</h3>
      <ul className="faq-list">
        {questions.map((item, index) => (
          <li key={index} className="faq-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {item.question}
              <span className={`faq-toggle ${activeIndex === index ? 'open' : ''}`}>+</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer" data-aos="fade-in">
                <p>{item.answer}</p>
                <p className="action-text">{item.action}</p>
                <button
                  className="cta-button"
                  onClick={() => showModal(item.modalType)}
                >
                  Bog'lanish
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Domen Modal */}
      <Modal
        title="Domen sotib olish uchun murojaat"
        visible={isDomainModalVisible}
        onCancel={() => handleModalCancel('domain')}
        footer={[
          <Button key="cancel" onClick={() => handleModalCancel('domain')}>
            Bekor qilish
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitDomain}>
            Yuborish
          </Button>,
        ]}
        data-aos="zoom-in"
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

      {/* Sayt yaratish Modal */}
      <Modal
        title="Sayt yaratish uchun murojaat"
        visible={isWebsiteModalVisible}
        onCancel={() => handleModalCancel('website')}
        footer={[
          <Button key="cancel" onClick={() => handleModalCancel('website')}>
            Bekor qilish
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmitWebsite}>
            Yuborish
          </Button>,
        ]}
        data-aos="zoom-in"
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

      {/* Texnik yordam Modal */}
      <Modal
        title="Texnik yordam"
        visible={isTechnicalModalVisible}
        onCancel={() => handleModalCancel('technical')}
        footer={[
          <Button key="cancel" onClick={() => handleModalCancel('technical')}>
            Bekor qilish
          </Button>,
        ]}
        data-aos="zoom-in"
      >
        <p>Texnik yordam 24/7 uchun bizning telefon raqamimiz:</p>
        <p>
          <strong>
            <a href="tel:+998904448767">+998 90 444 87 67</a>
          </strong>
        </p>
      </Modal>
    </div>
  );
};

export default FAQ;
