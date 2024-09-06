import React, { useState, useEffect } from 'react';
import './ContactForm.css'; // Stil faylini chaqiradi
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    question: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://api.telegram.org/bot7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '6914657739',
          text: `Yangi savol:\n\nIsm: ${formData.name}\nTelefon raqam: ${formData.phone}\nSavol: ${formData.question}`,
        }),
      });
      
      const data = await response.json();
      if (data.ok) {
        alert('Savolingiz yuborildi. Tez orada siz bilan bog\'lanamiz!');
        setFormData({
          name: '',
          phone: '',
          question: '',
        });
      } else {
        alert('Xato yuz berdi. Iltimos, qayta urinib ko\'ring.');
      }
    } catch (error) {
      alert('Xato yuz berdi. Iltimos, qayta urinib ko\'ring.');
    }
  };

  return (
    <div className="contact-form-container" data-aos="fade-up">
      <div className="contact-form" data-aos="zoom-in">
        <h3 data-aos="fade-down">Savollaringizni yuboring</h3>
        <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
          <label data-aos="fade-left">
            Ism:
            <input
              type="text"
              name="name"
              placeholder="Ismingizni kiriting"
              value={formData.name}
              onChange={handleChange}
              required
              data-aos="fade-right"
            />
          </label>
          <label data-aos="fade-left" data-aos-delay="300">
            Telefon raqam:
            <input
              type="tel"
              name="phone"
              placeholder="Telefon raqamingizni kiriting"
              value={formData.phone}
              onChange={handleChange}
              required
              data-aos="fade-right"
            />
          </label>
          <label data-aos="fade-left" data-aos-delay="400">
            Savolingiz:
            <textarea
              name="question"
              placeholder="Savolingizni yozing"
              value={formData.question}
              onChange={handleChange}
              required
              data-aos="fade-right"
            ></textarea>
          </label>
          <button
            type="submit"
            className="submit-button"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
