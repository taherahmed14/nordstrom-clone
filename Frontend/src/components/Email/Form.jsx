import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSelector, useDispatch } from 'react-redux';
import { getUserError, getUserLoading, getUserSuccess } from '../../Features/Login/actions';
import { useEffect } from 'react';
import { useState } from 'react';

export const SendOTP = () => {
  const form = useRef();

  const [mailDet, setMailDet] = useState({
    first_name: "",
    email: "",
  });

  useEffect(() => { 
    getUserData();
  }, []);

  const { userData } = useSelector((state) => ({
    userData: state.loginState.userData,
  }));

  const dispatch = useDispatch();

  function getUserData() {
      dispatch(getUserLoading());
      fetch("http://localhost:4500/login")
      .then((d) => d.json())
      .then((res) => {
          dispatch(getUserSuccess(res));
          setMailDet({
            first_name: res[res.length - 1].first_name,
            email: res[res.length - 1].email,
            otp: res[res.length - 1].otp,
          });
      })
      .catch((err) => {
          dispatch(getUserError());
      })
  };

  let data = {
    to_name: mailDet.first_name,
    to_email: mailDet.email,
    otp: mailDet.otp,
  }

  const sendEmail = () => {
    emailjs.send('service_e26pfww', 'template_g6k0bz8', data, 'user_yi6j031DkWe1zzrpAAMGh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
};