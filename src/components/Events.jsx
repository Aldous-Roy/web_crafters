import React, { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Container } from '@mui/material';
import Ai from "../assets/AI.svg";
import tech from "../assets/techpanel.svg";
import research from "../assets/research.svg";


const events = [
  {
    id: 1,
    title: 'AI Workshop',
    description: 'Hands-on workshop on AI technologies...',
    date: 'March 20, 2024',
    image: Ai,
  },
  {
    id: 2,
    title: 'Tech Panel',
    description: 'Insights from leading tech professionals',
    date: 'April 5, 2024',
    image: tech
  },
  {
    id: 3,
    title: 'Research Meet',
    description: 'Showcase of student research projects',
    date: 'April 25, 2024',
    image: research
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
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Typography
              variant="h2"
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

          <Box
              sx={{
                display: 'flex',
                overflowX: 'auto',
                gap: 4,
                pb: 2,
                scrollSnapType: 'x mandatory',
              }}

          >
            {events.map((event, index) => (
                <Card
                    key={event.id}
                    className="reveal"
                    sx={{
                      minWidth: 300,
                      maxWidth: 300,
                      flexShrink: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease-in-out',
                      alignItems: 'center',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      animationDelay: `${index * 0.2}s`,
                      scrollSnapAlign: 'start',
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
                    <Typography gutterBottom variant="h5">
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
            ))}
          </Box>
        </Container>
      </Box>
  );
};

export default Events;