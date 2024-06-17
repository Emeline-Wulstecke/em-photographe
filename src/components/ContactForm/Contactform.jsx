import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contactForm.css';
import Button from '../Button/Button';

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.current.email.value;
    const atIndex = email.indexOf('@');

    if (
      form.current.name.value &&
      email &&
      atIndex !== -1 &&
      form.current.message.value
    ) {
      emailjs
        .sendForm('service_pt0mqca', 'template_2n7kk9e', form.current, 'd0fM7RxVQPlqbha95')
        .then(
          () => {
            console.log('SUCCÈS !');
            setIsSent(true);
            setTimeout(() => {
              setIsSent(false);
              form.current.reset();
            }, 3000);
          },
          (error) => {
            console.log('ÉCHEC...', error.text);
          }
        );
    } else {
      alert("Veuillez remplir tous les champs du formulaire correctement avant d'envoyer.");
    }
  };

  return (
    <section id='contact'>
      <div className='contact'>
      <h2>Me contacter</h2>
      <form ref={form} onSubmit={handleSubmit}>
        {isSent && <p>Merci, votre message a bien été envoyé !</p>}
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" />
        <Button type="submit">Envoyer</Button>
      </form>
      </div>
    </section>
  );
};

export default ContactForm;
