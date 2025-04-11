import React, { useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
  useEffect(() => {
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('fade-in');
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: 'url(/satellite-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)',
        },
        '@keyframes float': {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          className="hero-content"
          sx={{ 
            maxWidth: '600px', 
            ml: { xs: 2, md: 8 },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.2,
              opacity: 0,
              animation: 'fadeIn 0.8s ease-out forwards',
              animationDelay: '0.2s',
            }}
          >
            Join the IEEE GRSS Student Chapter!
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: 'white',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.25rem' },
              opacity: 0,
              animation: 'fadeIn 0.8s ease-out forwards',
              animationDelay: '0.4s',
            }}
          >
            Empowering students through research, collaboration, and innovation.
          </Typography>
          <Button
              onClick={() => navigate('/join')}
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#f0a500',
              color: 'white',
              padding: '12px 30px',
              fontSize: '1.1rem',
              opacity: 0,
              animation: 'fadeIn 0.8s ease-out forwards, float 3s ease-in-out infinite',
              animationDelay: '0.6s',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#d89400',
                transform: 'scale(1.05)',
              },
            }}
          >
            Join Us Now!
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 