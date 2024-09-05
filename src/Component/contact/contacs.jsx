import React, { useState } from 'react';
import './ContactForm.css'; // Stil faylini chaqiradi

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    question: '',
  });

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
    <div className="contact-form-container">
      <div className="contact-form">
        <h3>Savollaringizni yuboring</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Ism:
            <input
              type="text"
              name="name"
              placeholder="Ismingizni kiriting"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Telefon raqam:
            <input
              type="tel"
              name="phone"
              placeholder="Telefon raqamingizni kiriting"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Savolingiz:
            <textarea
              name="question"
              placeholder="Savolingizni yozing"
              value={formData.question}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit" className="submit-button">Yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
