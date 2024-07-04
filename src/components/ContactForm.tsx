"use client";

import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación básica
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    } else {
      // Marcar campos vacíos como error
      setFormErrors({
        name: formData.name === "",
        email: formData.email === "",
        message: formData.message === "",
      });
    }
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.title}>
        <h2>Contacto</h2>
      </div>
      <div className={styles.formContainer}>
        {submitted ? (
          <p>Gracias por tu mensaje. Te responderemos pronto.</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div
              className={`${styles.formGroup} ${
                formErrors.name ? styles.inputError : ""
              }`}
            >
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
              {formErrors.name && (
                <span className={styles.error}>Este campo es obligatorio</span>
              )}
            </div>
            <div
              className={`${styles.formGroup} ${
                formErrors.email ? styles.inputError : ""
              }`}
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
              {formErrors.email && (
                <span className={styles.error}>Este campo es obligatorio</span>
              )}
            </div>
            <div
              className={`${styles.formGroup} ${
                formErrors.message ? styles.inputError : ""
              }`}
            >
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
              ></textarea>
              {formErrors.message && (
                <span className={styles.error}>Este campo es obligatorio</span>
              )}
            </div>
            <button type="submit" className={styles.button}>
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
