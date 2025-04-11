import React, { useEffect } from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, TextField, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../assets/logo.svg"

const Footer = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#fff',
        color: '#333',
        py: 6,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6} className="reveal">
          <Typography variant="h3" component="h2" gutterBottom>
            Join Our Community
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Be part of a vibrant network of innovators and thinkers. Sign up today to connect, learn, and grow with us!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#f0a500',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#d89400',
                transform: 'scale(1.05)',
              },
              px: 4,
              py: 1,
            }}
          >
            Sign Up Now
          </Button>
        </Box>

        <Box textAlign="center" mb={4} className="reveal">
          <img 
            src={logo}
            alt="IEEE GRSS Logo" 
            style={{ 
              height: '50px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
          <Typography variant="h6" mt={2}>
            IEEE GRSS Chapter
          </Typography>
          <Box mt={2} mb={4}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              sx={{ 
                mr: 1, 
                backgroundColor: '#f5f5f5',
                '& .MuiOutlinedInput-root': {
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    '& > fieldset': {
                      borderColor: '#f0a500',
                    },
                  },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#f0a500',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#d89400',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3} className="reveal">
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Box display="flex" flexDirection="column">
              {['Home', 'Join', 'Events', 'Projects', 'About Us'].map((item) => (
                <Link 
                  key={item}
                  href="#" 
                  color="inherit" 
                  underline="hover"
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#f0a500',
                      transform: 'translateX(5px)',
                    },
                    display: 'inline-block',
                    mb: 1,
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className="reveal">
            <Typography variant="h6" gutterBottom>
              IEEE SB
            </Typography>
            <Box display="flex" flexDirection="column">
              {['IEEE SAIRAM', 'SAIRAM ACTIVITIES'].map((item) => (
                <Link 
                  key={item}
                  href="#" 
                  color="inherit" 
                  underline="hover"
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#f0a500',
                      transform: 'translateX(5px)',
                    },
                    display: 'inline-block',
                    mb: 1,
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} pt={4} borderTop={1} borderColor="divider" className="reveal">
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, sm: 0 } }}>
              © {new Date().getFullYear()} IEEE GRSS, Inc.
            </Typography>
            <Box>
              {[TwitterIcon, FacebookIcon, LinkedInIcon].map((Icon, index) => (
                <IconButton 
                  key={index}
                  href="#" 
                  color="inherit"
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#f0a500',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            {['Privacy', 'Terms'].map((item) => (
              <Link 
                key={item}
                href="#" 
                color="inherit" 
                sx={{ 
                  mx: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#f0a500',
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 