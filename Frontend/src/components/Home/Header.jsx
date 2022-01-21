import { Link, Navigate } from "react-router-dom";
import "./Header.css";
import {  TextField, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { MouseOverPopover } from './Dashboard';
import { CustomizedBadges } from './CartBadge';
import { Navigation } from "./Navigation";

export const Header = () => {
    return (
        <div>
            <div className="banner">Shipping outside of the U.S. or Canada? 
                <Link className="bannerLink" to="*"> Learn About International Shipping</Link></div>
            <div className="headerBox">
                <img className="headLogo" src="Nordstrom-logo.png" />
                <div className="rightBox">
                    <TextField
                        fullWidth
                        id="standard-basic"
                        variant="standard"
                        size="small"
                        placeholder="Search"
                        sx={{width: '200px', fontSize: '8px' }}
                        InputProps={{
                        endAdornment: (
                            <IconButton>
                                <SearchOutlinedIcon />
                            </IconButton>
                        ),
                        }}
                    />
                    <div className="signIn">
                        <MouseOverPopover />
                    </div>
                    <div>
                        <CustomizedBadges />
                    </div>
                </div>
            </div>

            <Navigation />

        </div>
    )
};