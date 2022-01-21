import React from "react";
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
import SearchIcon from '@mui/icons-material/Search';


const theme = createTheme({
    components: {
      MuiIcon: {
        styleOverrides: {
          root: {
            boxSizing: 'content-box',
            fontSize: '1.125rem',
          },
      
        },
      },
    },
});
  

const Header = () => {
    return (
        <>
        <Box sx={{bgcolor:'text.primary',color:'primary.contrastText',py:1,width:'40'}}>
          <Box component="span" sx={{fontWeight: 800}}>Pick Up Today</Box>
          <Box component="span" sx={{}}>—in store or curbside. </Box>
          <Box component="span" sx={{textDecoration:"2px underline",cursor: "pointer"}}>Pickup Options</Box>
        </Box>

        <Box sx={{ height: "100px", p: "30px 30px 0px" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <Box component="span" sx={{ fontSize: "30px" ,fontWeight: "500", cursor: "pointer" }}>NORDSTROM</Box>
                </Box>                    
                <Box sx={{ display: 'flex', justifyContent: 'space-between',width: "20%",'& > :not(style)': {pt:1}}}>
                    <ThemeProvider theme={theme} >
                        <Chip icon={<SearchIcon />} label="Search" sx={{bgcolor:'#ffffff',  cursor: "pointer"  }} />

                        <Chip label="Sign In" icon={<ExpandMoreIcon />}  sx={{bgcolor:'#ffffff' , cursor: "pointer",'&:hover': {borderBottom: "2px solid #d61f27" } }} />
                        <Chip icon={<WorkOutlineSharpIcon />} sx={{bgcolor:'#ffffff' , cursor: "pointer" }} />
                    </ThemeProvider>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between',bgcolor: 'primary.secondary', pt:1}}>
                <Box sx={{ color: 'error.main', cursor: "pointer" ,'&:hover': {borderBottom: "2px solid #d61f27" }}}>Sale</Box>
                <Box sx={{  cursor: "pointer" , '&:hover': {borderBottom: "2px solid black"}}}>Women</Box>
                <Box sx={{  cursor: "pointer" , '&:hover': {borderBottom: "2px solid black"}}} >Men</Box>
                <Box sx={{  cursor: "pointer" , '&:hover': {borderBottom: "2px solid black"}}} >Kids</Box>
                <Box sx={{  cursor: "pointer" , '&:hover': {borderBottom: "2px solid black"}}} >Young Adult</Box>
                <Box sx={{  cursor: "pointer" , '&:hover': {borderBottom: "2px solid black"}}} >Activewear</Box>
                <Box sx={{  cursor: "pointer" , '&:hover': {borderBottom: "2px solid black"}}} >Home</Box>
                <Box sx={{  cursor: "pointer" , '&:hover': {borderBottom: "2px solid black"}}} >Beauty</Box>
                <Box sx={{  cursor: "pointer" , '&:hover': {borderBottom: "2px solid black"}}} >Designer</Box>
                <Box sx={{  cursor: "pointer" , '&:hover': {borderBottom: "2px solid black"}}} >Gifts</Box>
            </Box>
        </Box>
        </>
)};

export default Header;