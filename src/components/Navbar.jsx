import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ['Home', 'Join', 'Events', 'Projects', 'About Us'];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} component="a" href={`#${item.toLowerCase().replace(' ', '-')}`}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="IEEE GRSS Logo" style={{ height: '40px', marginRight: '10px' }} />
          <span style={{ fontSize: '1.2rem' }}>IEEE GRSS Student Chapter</span>
        </Typography>
        
        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {menuItems.map((item) => (
            <Button 
              key={item} 
              sx={{ 
                color: 'black',
                mx: 1,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#f0a500'
                }
              }} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
            >
              {item}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: '#f0a500',
              '&:hover': {
                backgroundColor: '#d89400'
              }
            }}
          >
            Join Now
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 