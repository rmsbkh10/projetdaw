import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Optionnel : envoyer à une API ici
  };

  return (
    <div style={{ backgroundColor: '#fdf0e1', minHeight: '100vh', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#b37a59' }}>Contactez-nous</h1>

      {submitted ? (
        <p style={{ color: '#4a2c2a', fontSize: '18px' }}>Merci pour votre message ! Nous vous répondrons rapidement.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', color: '#4a2c2a' }}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#b37a59',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '6px',
  border: '1px solid #d8b89c',
  fontSize: '16px',
  backgroundColor: '#fffaf6'
};

export default Contact;