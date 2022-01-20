import { IconButton } from '@mui/material';
import * as React from 'react';
import {OutlinedInput} from '@mui/material';
import { InputLabel } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { FormControl } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import "./Login.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Register = () => {

    const [form, setForm] = useState({});

    const handlerRegisterChange = ({target: {name, value}}) => {
        setForm({
            ...form, 
            [name] : value,
        });
    };

    const handleSubmit = () => {
        if(!form.email.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')){
            alert("Enter valid Email Id");
        }
        else if(form.first_name.length < 1) {
            alert("Enter valid First name");
        }
        
        // fetch("http://localhost:4500/register", {
        //     method: "POST",
        //     body: JSON.stringify(form),
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // })
        // .then((d) => d.json())
        // .then((res) => {
        //     console.log(res);
        // })
        // .catch((err) => { console.log(err) });
    }

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setForm({ ...form, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    return (
        <div className='form'>
    
            
                <div className='staticTextOne'>Create Account</div>

                <div className='inforCard'>
                    <img src='credit-card.png' />
                    <div>Check out faster</div>
                </div>

                <div className='inforCard'>
                    <img src='delivery-truck.png' />
                    <div>Track orders easily</div>
                </div>

                <div className='inforCard'>
                    <img src='cloud.png' />
                    <div>Use one sign-in across our brands</div>
                </div>


                <FormControl size="medium" sx={{ m: 'auto', mt: '20px', mb: '10px', width: '350px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: '12px' }} >Email</InputLabel>
                        <OutlinedInput label="Email" sx={{ fontSize: '12px' }} name="email" onChange={handlerRegisterChange} />
                </FormControl>

                <FormControl size="medium" sx={{ m: 'auto', mt: '10px', mb: '10px', width: '350px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: '12px' }} >First name</InputLabel>
                        <OutlinedInput label="First name" sx={{ fontSize: '12px' }} name="first_name" onChange={handlerRegisterChange} />
                </FormControl>

                <FormControl size="medium" sx={{ m: 'auto', mt: '10px', mb: '10px', width: '350px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: '12px' }} >Last name</InputLabel>
                        <OutlinedInput label="Last name" sx={{ fontSize: '12px' }} name="last_name" onChange={handlerRegisterChange} />
                </FormControl>
                
                <FormControl size="medium" sx={{ m: 'auto', mt: '10px', mb: '10px', width: '350px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: '12px' }}>Password</InputLabel>
                        <OutlinedInput sx={{ fontSize: '12px' }}
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="small"
                                    >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                </FormControl>

                <div className='staticTextTwo'>By creating an account, you agree to our Privacy Policy and Terms & Conditions.</div>
                 
                <button onClick={handleSubmit} className='signInButton'>Create Account</button>

                <div className='staticTextTwo'>Already have an account? 
                    <Link to={"/login"}>Login here</Link>
                </div>

            
        </div>
    )
};