import React, { useEffect, useState } from 'react';
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
        image: tech,
    },
    {
        id: 3,
        title: 'Research Meet',
        description: 'Showcase of student research projects',
        date: 'April 25, 2024',
        image: research,
    },
];

const Events = () => {
    const [visibleItems, setVisibleItems] = useState({});

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleItems((prev) => ({
                        ...prev,
                        [entry.target.dataset.index]: true,
                    }));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

        const elements = document.querySelectorAll('[data-index]');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <Box sx={{ py: 8, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    align="center"
                    data-index="title"
                    style={{
                        marginBottom: '48px',
                        fontWeight: 'bold',
                        opacity: visibleItems['title'] ? 1 : 0,
                        transform: visibleItems['title'] ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.6s ease-in-out',
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
                    {events.map((event, index) => {
                        const isVisible = visibleItems[index];
                        return (
                            <Card
                                key={event.id}
                                data-index={index}
                                style={{
                                    minWidth: 300,
                                    maxWidth: 300,
                                    flexShrink: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease-in-out',
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    scrollSnapAlign: 'start',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={event.image}
                                    alt={event.title}
                                    style={{
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease-in-out',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5">
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ marginBottom: '12px' }}>
                                        {event.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ marginBottom: '12px' }}>
                                        {event.date}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        style={{
                                            borderColor: '#f0a500',
                                            color: '#f0a500',
                                            transition: 'all 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = '#d89400';
                                            e.currentTarget.style.backgroundColor = 'rgba(240, 165, 0, 0.1)';
                                            e.currentTarget.style.transform = 'scale(1.02)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '#f0a500';
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        RSVP Now
                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default Events;