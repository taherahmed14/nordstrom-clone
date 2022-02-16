import * as React from 'react';
import { Popover } from '@mui/material';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "./Header.css";

export const NavBeauty = () => {

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
        boxShadow: "0", margin: "0px 40px 0px 40px",
        ":hover": {borderBottom: "1px solid black", background: "white", boxShadow: "0"} }}>
        Beauty
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
              <Link to={"/products"} className='categories'>Blazers and sports coats</Link>
              <Link to={"/products"} className='categories'>Coats and Jackets</Link>
              <Link to={"/products"} className='categories'>Dress shirts</Link>
              <Link to={"/products"} className='categories'>Jeans</Link>
              <Link to={"/products"} className='categories'>Joggers and sweatpants</Link>
              <Link to={"/products"} className='categories'>Lounges, Pajamas and Robes</Link>
              <Link to={"/products"} className='categories'>Pants</Link>
              <Link to={"/products"} className='categories'>Polo Shirts</Link>
              <Link to={"/products"} className='categories'>Shirts</Link>
              <Link to={"/products"} className='categories'>Socks</Link>
              <Link to={"/products"} className='categories'>Suits & Separates</Link>
              <Link to={"/products"} className='categories'>Sweaters</Link>
              <Link to={"/products"} className='categories'>Sweatshirts & hoodies</Link>
              <Link to={"/products"} className='categories'>T-shirts</Link>
              <Link to={"/products"} className='categories'>Underwares & Boxers</Link> 
            </div>
              
          </div>

          <div>
            <div className='catergoriesHead'>Shoes</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Boots</Link>
              <Link to={"/products"} className='categories'>Comfort</Link>
              <Link to={"/products"} className='categories'>Dress shoes</Link>
              <Link to={"/products"} className='categories'>Dress shirts</Link>
              <Link to={"/products"} className='categories'>Loafers and Slip-ons</Link>
              <Link to={"/products"} className='categories'>Oxford & Derbys</Link>
              <Link to={"/products"} className='categories'>Running Shoes</Link>
              <Link to={"/products"} className='categories'>Sandals and Flip-flops</Link>
              <Link to={"/products"} className='categories'>Shoes cares and Accessories</Link>
              <Link to={"/products"} className='categories'>Slippers</Link>
            </div>  
          </div>

          <div>
            <div className='catergoriesHead'>Accessories</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Bags & Bagpacks</Link>
              <Link to={"/products"} className='categories'>Belts</Link>
              <Link to={"/products"} className='categories'>Face masks</Link>
              <Link to={"/products"} className='categories'>Gloves</Link>
              <Link to={"/products"} className='categories'>Hats</Link>
              <Link to={"/products"} className='categories'>Headphones</Link>
              <Link to={"/products"} className='categories'>Jewelry</Link>
              <Link to={"/products"} className='categories'>Phonecases</Link>
              <Link to={"/products"} className='categories'>Scarves</Link>
              <Link to={"/products"} className='categories'>Sunglasses & eyewears</Link>
              <Link to={"/products"} className='categories'>Ties & pocket Squares</Link>
              <Link to={"/products"} className='categories'>Wallets</Link>
              <Link to={"/products"} className='categories'>Watches</Link>
            </div>  
          </div>

          <div>
            <div className='catergoriesHead'>Designers</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Designer Clothing</Link>
              <Link to={"/products"} className='categories'>Designer shoes</Link>
              <Link to={"/products"} className='categories'>Designer Accessories</Link>
            </div> 

            <div className='catergoriesHead'>Big & Tall</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Clothing</Link>
              <Link to={"/products"} className='categories'>Jeans</Link>
              <Link to={"/products"} className='categories'>Pants</Link>
              <Link to={"/products"} className='categories'>Shirts</Link>
            </div>

            <div className='catergoriesHead'>Grooming & Cologne</div>
            <div className='catBox'>
              <Link to={"/products"} className='categories'>Body care & Deodrant</Link>
              <Link to={"/products"} className='categories'>Cologne</Link>
              <Link to={"/products"} className='categories'>Dopp Kits & Toiletry</Link>
              <Link to={"/products"} className='categories'>Gifts and Sets</Link>
              <Link to={"/products"} className='categories'>Hair Products</Link>
            </div>

          </div>

          <div>
              <img src='Beauty-Popover.jpg' style={{marginTop: '50px', height: '350px'}} />
              <Link to={"/products"} className='categories'>Men</Link>
          </div>

        </div>
        
      </Popover>

    </div>
  );
}
