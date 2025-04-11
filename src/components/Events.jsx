import React, { useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box, Container } from '@mui/material';

const events = [
  {
    id: 1,
    title: 'AI Workshop',
    description: 'Hands-on workshop on AI technologies...',
    date: 'March 20, 2024',
    image: '/ai-workshop.jpg',
  },
  {
    id: 2,
    title: 'Tech Panel',
    description: 'Insights from leading tech professionals',
    date: 'April 5, 2024',
    image: '/tech-panel.jpg',
  },
  {
    id: 3,
    title: 'Research Meet',
    description: 'Showcase of student research projects',
    date: 'April 25, 2024',
    image: '/research-meet.jpg',
  },
];

const Events = () => {
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
      sx={{ 
        py: 8, 
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          className="reveal"
          sx={{ 
            mb: 6, 
            fontWeight: 'bold',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          Upcoming Events
        </Typography>
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item key={event.id} xs={12} sm={6} md={4}>
              <Card
                className="reveal"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animationDelay: `${index * 0.2}s`,
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                  sx={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {event.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {event.date}
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: '#f0a500',
                      color: '#f0a500',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#d89400',
                        backgroundColor: 'rgba(240, 165, 0, 0.1)',
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    RSVP Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Events; 