import OTPInput from "otp-input-react";
import { useEffect } from 'react';
import { useState } from 'react';
import "./OTPpage.css";
import { useDispatch, useSelector } from 'react-redux';
import { getUserError, getUserLoading, getUserSuccess } from '../../Features/Login/actions';
import { Alert } from '@mui/material';
import { Navigate } from 'react-router-dom';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Header } from "../Home/Header";
import { Footer } from "../Home/Footer";


export const OTPpage = () => {
    const [OTP, setOTP] = useState("");
    const [userOTP, setuserOTP] = useState("");
    const [error, setError] = useState(false);
    const [status, setStatus] = useState(false);

    const form = useRef();

    const [mailDet, setMailDet] = useState({
        first_name: "",
        email: "",
    });

    const { userData } = useSelector((state) => ({
        userData: state.loginState.userData,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        getUserData();
    }, [])

    function getUserData() {
        dispatch(getUserLoading());
        fetch("http://localhost:4500/login")
        .then((d) => d.json())
        .then((res) => {
            dispatch(getUserSuccess(res));
            setuserOTP(res[res.length - 1].otp);
            setMailDet({
                first_name: res[res.length - 1].first_name,
                email: res[res.length - 1].email,
            });
        })
        .catch((err) => {
            dispatch(getUserError());
        })
    };

    const handleOTPSubmit = () => {
        if(OTP != userOTP) {
            setError(true);
        }
        else{
            setStatus(true);
            sendEmail();
        }
    }

    let data = {
        to_name: mailDet.first_name,
        to_email: mailDet.email
    }

    const sendEmail = () => {
        emailjs.send('service_e26pfww', 'template_jy11h7m', data, 'user_yi6j031DkWe1zzrpAAMGh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    // if(status) {
    //     return <Navigate to={"/orderConfirm"} />
    // }

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='contentBox'>
                    <div className='OTPHead1'>Enter verification code</div>
                    <div className='OTPHead2'>
                        We have just sent a verification code to your Email id.
                    </div>

                    <OTPInput className='OTPinput' value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure />
                    {error ?
                        <Alert severity="error" sx={{ fontSize: '12px', p: '2px', width: '200px', marginLeft: '135px' }}>Incorrect OTP</Alert>
                        :
                        ""
                    }
                    
                    <div className='OTPHead2' style={{ cursor: "pointer" }}>Send the code again</div>

                    <button className='verifyButton' onClick={handleOTPSubmit}>Verify</button>
                </div>

                <div className='imgBox'>
                    <img src="OTP-Banner.png" />
                </div>
            </div>
            <Footer />
        </div>
    )
}