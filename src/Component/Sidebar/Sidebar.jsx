import React, { useState } from 'react';
import './Sidebar.css';
import uzb from '../../assets/itichnik.jpg';
import rus from '../../assets/brov.png';
import { Modal, Button, Input, Select } from 'antd';

const { Option } = Select;

// Replace these constants with your actual Telegram Bot Token and Chat ID
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

    // Clear input fields
    setName('');
    setPhoneNumber('');
    setWebsitePurpose('');

    setIsWebsiteModalVisible(false);

    alert('Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.');
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h3>Mijozlarimiz Fikri</h3>
        <div className="testimonial-wrapper">
          <div className="testimonial-item">
            <img src={uzb} alt="O'zbekistan Mijoz" className="testimonial-image" />
            <div className="testimonial-content">
              <p>NewTec bilan hamkorlik qilish juda oson va qulay!</p>
              <span>- O'zbekistan Mijoz</span> <br />
              <b className="sidebar-text">Biz bilan hamkorlikni boshlash</b> <br />
              <button className="hero-btnes" onClick={showWebsiteModal}>Murojat Qilish</button> 
            </div>
          </div>
          <div className="testimonial-item">
            <img src={rus} alt="Rossiya Mijoz" className="testimonial-image" />
            <div className="testimonial-content">
              <p>Xizmatlari yuqori sifatda va doimiy qo'llab-quvvatlashni ta'minlashadi.</p>
              <span>- Rossiya Mijoz</span> <br />
              <b className='sidebar-text'>Biz bilan hamkorlikni boshlash</b> <br />
              <button className="hero-btnes" onClick={showWebsiteModal}>Murojat Qilish</button> 
            </div>
          </div>
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
    </section>
  );
}

export default Testimonials;
