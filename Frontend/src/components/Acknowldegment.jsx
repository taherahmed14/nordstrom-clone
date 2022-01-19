import CardGiftcardSharpIcon from '@mui/icons-material/CardGiftcardSharp';
import { useState } from 'react';
import "./Acknowldegment.css";
import { LinearProgress } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from 'react-router-dom';

export const OrderConfirm = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 5000);

    return (
        <div>
            { loading ? 
                <Stack sx={{ width: '30%', color: 'grey.500', mt: '300px', ml: '35%' }} spacing={2}>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" />
                    <LinearProgress color="inherit" />
                </Stack>
            :
                <div className='successContainer'>
                    <div className='sucLeftBox'>
                        <CardGiftcardSharpIcon />
                        <div className='titleOne'>Thank You!</div>
                        <div className='titleTwo'>Order confirmation has been sent to your mail.</div>
                        <Link to="*" className='continueShpButton'>Continue Shopping</Link>
                    </div>
                
                    <div className='sucRightBox'>

                    </div>
                </div>
            }
        </div>
    )
};