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

export const Login = () => {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
        <div>
    
            <form className='form'>
                <div className='staticTextOne'>Welcome back!</div>
                <div className='staticTextTwo'>Sign in with the same info</div>

                <FormControl size="medium" sx={{ m: 'auto', mt: '20px', mb: '10px', width: '350px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: '12px' }} >Email</InputLabel>
                        <OutlinedInput label="Email" sx={{ fontSize: '12px' }} />
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

                <div className='staticTextThree'>Forgot password?</div>
                <div className='staticTextFour'>
                    <input className='checkBox' type='checkbox' />
                    <label> Keep me signed in.</label>
                </div>
                 
                <button className='signInButton'>Sign in</button>

                <div className='staticTextTwo'>Dont have an account? 
                    <Link to={"*"}>Register</Link>
                </div>

            </form>
        </div>
    )
};