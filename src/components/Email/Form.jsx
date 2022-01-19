import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const SendOTP = () => {
  const form = useRef();

  let data = {
    to_name: "Taher Ahmed",
    to_email: "sjtaherahmed@gmail.com"
  }

  const sendEmail = () => {
    emailjs.send('service_e26pfww', 'template_g6k0bz8', data, 'user_yi6j031DkWe1zzrpAAMGh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <button onClick={sendEmail}>Send Email</button>
  );
};
