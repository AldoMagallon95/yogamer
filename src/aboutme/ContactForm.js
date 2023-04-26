import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('https://getform.io/f/1c018c3d-d0c1-4916-81a1-5af7af3ce7d1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    })
      .then((response) => {
        if (response.ok) {
          alert('Mensaje enviado con éxito');
          setFormValues({ name: '', email: '', message: '' });
        } else {
          alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        }
      })
      .catch((error) => {
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formValues.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formValues.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        value={formValues.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Enviar mensaje</button>
    </form>
  );
};

export default ContactForm;
