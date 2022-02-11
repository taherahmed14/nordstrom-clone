import * as React from 'react';
import { Popover } from '@mui/material';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "./Header.css";

export const NavSales = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div style={{display: 'flex'}}>

      <Button aria-describedby={id} variant="contained" onClick={handleClick} 
        sx={{background: "none", padding: "5px", color: "black", fontSize: "12px", borderRadius: "0",
        boxShadow: "0", margin: "0px 40px 0px 80px",
        ":hover": {borderBottom: "1px solid black", background: "white", boxShadow: "0"} }}>
        Sales
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'centre',
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className='popoverBox'>
          <div>
            <div className='catergoriesHead'>Clothing</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Activewear</Link>
              <Link to={"/products"} className='categories'>Blazers</Link>
              <Link to={"/products"} className='categories'>Coats and Jackets</Link>
              <Link to={"/products"} className='categories'>Dresses</Link>
              <Link to={"/products"} className='categories'>Jeans & Denim</Link>
              <Link to={"/products"} className='categories'>Lingerie, Hosiery & Shapewear</Link>
              <Link to={"/products"} className='categories'>Loungewear</Link>
              <Link to={"/products"} className='categories'>Pants & Leggins</Link>
              <Link to={"/products"} className='categories'>Shorts</Link>
              <Link to={"/products"} className='categories'>Skirts</Link>
              <Link to={"/products"} className='categories'>Sleepwears & Robes</Link>
              <Link to={"/products"} className='categories'>Sweaters</Link>
              <Link to={"/products"} className='categories'>Swimsuits</Link>
              <Link to={"/products"} className='categories'>Sweatshirts & hoodies</Link>
              <Link to={"/products"} className='categories'>T-shirts</Link>
            </div>
              
          </div>

          <div>
            <div className='catergoriesHead'>Shoes</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Booties</Link>
              <Link to={"/products"} className='categories'>Boots</Link>
              <Link to={"/products"} className='categories'>Clogs</Link>
              <Link to={"/products"} className='categories'>Comforts</Link>
              <Link to={"/products"} className='categories'>Dress Shoes</Link>
              <Link to={"/products"} className='categories'>Flats</Link>
              <Link to={"/products"} className='categories'>Heels</Link>
              <Link to={"/products"} className='categories'>Mules & Sliders</Link>
              <Link to={"/products"} className='categories'>Oxford & Loafers</Link>
              <Link to={"/products"} className='categories'>Running Shoes</Link>
              <Link to={"/products"} className='categories'>Sandals</Link>
              <Link to={"/products"} className='categories'>Shoe cares</Link>
              <Link to={"/products"} className='categories'>Slippers</Link>
              <Link to={"/products"} className='categories'>Sneakers</Link>
            </div>  
          </div>

          <div>
            <div className='catergoriesHead'>Handbags</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Bagpacks</Link>
              <Link to={"/products"} className='categories'>Belt bags</Link>
              <Link to={"/products"} className='categories'>Camera Bags</Link>
              <Link to={"/products"} className='categories'>Bucket Bags</Link>
              <Link to={"/products"} className='categories'>Clutches & Pouches</Link>
              <Link to={"/products"} className='categories'>Crossboy bags</Link>
              <Link to={"/products"} className='categories'>Designer bags</Link>
              <Link to={"/products"} className='categories'>Hobo bags</Link>
              <Link to={"/products"} className='categories'>Satchels</Link>
              <Link to={"/products"} className='categories'>Shoulder bags</Link>
              <Link to={"/products"} className='categories'>Tote bags</Link>
              <Link to={"/products"} className='categories'>Wallets & Card cases</Link>
            </div>  

            <div className='catergoriesHead'>Tech Accessories</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Headphones</Link>
              <Link to={"/products"} className='categories'>Phone cases</Link>
              <Link to={"/products"} className='categories'>Popers</Link>
            </div> 
          </div>

          <div>
            <div className='catergoriesHead'>Jewelry</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Bracelets</Link>
              <Link to={"/products"} className='categories'>Earrings</Link>
              <Link to={"/products"} className='categories'>Necklaces</Link>
              <Link to={"/products"} className='categories'>Rings</Link>
              <Link to={"/products"} className='categories'>Wtches</Link>
            </div> 

            <div className='catergoriesHead'>Accessories</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Belts</Link>
              <Link to={"/products"} className='categories'>Face Masks</Link>
              <Link to={"/products"} className='categories'>Gloves</Link>
              <Link to={"/products"} className='categories'>Hair Accessories</Link>
              <Link to={"/products"} className='categories'>Hats</Link>
              <Link to={"/products"} className='categories'>Hijabs</Link>
            </div>

          </div>

          <div style={{display: 'inline-block'}}>
              <img src='Sales-Popover.jpg' style={{marginTop: '50px', marginRight: '50px', height: '350px'}} />
              <br />
              <Link to={"/products"} className='categories'>Women</Link>
          </div>

        </div>
        
      </Popover>

    </div>
  );
}
