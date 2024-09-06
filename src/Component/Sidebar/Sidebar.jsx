import React, { useState } from 'react';
import './Sidebar.css';
import uzb from '../../assets/itichnik.jpg';
import rus from '../../assets/brov.png';
import { Modal, Button, Input, Select } from 'antd';
import { motion } from 'framer-motion'; // Framer Motion import qilinadi

const { Option } = Select;

// Telegram Bot Token va Chat ID ni xavfsiz saqlash uchun .env faylidan foydalaning
const TELEGRAM_BOT_TOKEN = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU';
const CHAT_ID = '6914657739';

const sendMessageToTelegram = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: 'HTML',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!data.ok) {
      throw new Error(data.description);
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
};

function Testimonials() {
  const [isWebsiteModalVisible, setIsWebsiteModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [websitePurpose, setWebsitePurpose] = useState('');

  const showWebsiteModal = () => {
    setIsWebsiteModalVisible(true);
  };

  const handleWebsiteCancel = () => {
    setIsWebsiteModalVisible(false);
  };

  const handleWebsiteSubmit = async () => {
    const message = `
      <b>Sayt yaratish uchun murojaat qilish</b>\n\n
      <b>Ism:</b> ${name}\n
      <b>Telefon:</b> ${phoneNumber}\n
      <b>Sayt maqsadi:</b> ${websitePurpose}
    `;
    
    await sendMessageToTelegram(message);

    // Input maydonlarini tozalash
    setName('');
    setPhoneNumber('');
    setWebsitePurpose('');

    setIsWebsiteModalVisible(false);

    alert('Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.');
  };

  // Animatsiya variantlari
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: '#1b2332',
      color: '#fff',
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section 
      className="testimonials"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h3 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mijozlarimiz Fikri
        </motion.h3>
        <motion.div 
          className="testimonial-wrapper"
          variants={containerVariants}
        >
          {[
            {
              img: uzb, 
              alt: "O'zbekistan Mijoz", 
              text: "NewTec bilan hamkorlik qilish juda oson va qulay!", 
              name: "O'zbekistan Mijoz"
            },
            {
              img: rus, 
              alt: "Rossiya Mijoz", 
              text: "Xizmatlari yuqori sifatda va doimiy qo'llab-quvvatlashni ta'minlashadi.", 
              name: "Rossiya Mijoz"
            },
          ].map((testimonial, index) => (
            <motion.div 
              className="testimonial-item" 
              key={index}
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.img 
                src={testimonial.img} 
                alt={testimonial.alt} 
                className="testimonial-image"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
              <div className="testimonial-content">
                <p>{testimonial.text}</p>
                <span>- {testimonial.name}</span> <br />
                <b className="sidebar-text">Biz bilan hamkorlikni boshlash</b> <br />
                <motion.button 
                  className="hero-btnes" 
                  onClick={showWebsiteModal}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Murojat Qilish
                </motion.button> 
              </div>
            </motion.div>
          ))}
        </motion.div>
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
          <Button key="submit" type="primary" onClick={handleWebsiteSubmit}>
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
    </motion.section>
  );
}

export default Testimonials;
