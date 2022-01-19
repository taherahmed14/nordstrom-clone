import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import {OutlinedInput} from '@mui/material';
import { TextField } from '@mui/material';
import "./OTPpage.css";

export const OTPpage = () => {
    return (
        <div className='container'>
            <div className='contentBox'>
                <div className='OTPHead1'>Enter verification code</div>
                <div className='OTPHead2'>
                    We have just sent a verification code to your Email id.
                </div>

                <FormControl size="medium" sx={{ mt: '20px', mb: '10px', width: '350px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: '12px' }} type="number"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} >OTP</InputLabel>
                        <OutlinedInput label="OTP" sx={{ fontSize: '12px' }} />
                </FormControl>

                <div className='OTPHead2' style={{ cursor: "pointer" }}>Send the code again</div>

                <button className='verifyButton'>Verify</button>
            </div>

            <div className='imgBox'>
                <img src="OTP-Banner.png" />
            </div>
        </div>
    )
}