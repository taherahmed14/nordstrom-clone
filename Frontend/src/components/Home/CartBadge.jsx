import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const CustomizedBadges = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
    fetch("/cart")
      .then((response) => response.json())
      .then((data) => {
        setCount(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Link to={"/cart"}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={count} color="secondary" sx={{paddingRight: '10px'}}>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}