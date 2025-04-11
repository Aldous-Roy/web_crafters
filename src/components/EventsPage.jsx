import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent, Button, Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import meetup from '../assets/meetup.svg';
import AI from '../assets/AI.svg';
import robotic from '../assets/robotics.svg';

const upcomingEvents = [
    {
        id: 1,
        title: 'Network Meetup',
        date: 'Sat, Nov 18',
        description: 'An informal meet-up for professionals and enthusiasts in the field of robotics and systems',
        image: meetup
    },
    {
        id: 2,
        title: 'AI in Robotics Symposium',
        date: 'Fri, May 10',
        description: 'An insightful symposium discussing the role of artificial intelligence in robotics',
        image: AI
    },
    {
        id: 3,
        title: 'Robotics and Automation Workshop',
        date: 'Mon, April 25',
        description: 'A hands-on workshop covering the latest in robotics and automation technologies',
        image: robotic
    },
];

const facts = [
    {
        id: 1,
        icon: '🛰️',
        text: 'Satellites can detect underground water using microwave remote sensing!',
    },
    {
        id: 2,
        icon: '🌱',
        text: 'Remote sensing helps farmers monitor crop health, moisture, and yield predictions from space',
    },
    {
        id: 3,
        icon: '🌋',
        text: 'Thermal imaging from satellites can predict volcanic eruptions and monitor lava flow!',
    },
    {
        id: 4,
        icon: '🌍',
        text: 'GRSS techniques are used to study global climate change, deforestation, and melting glaciers',
    },
];

const EventsPage = () => {
    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    const handlePrevFact = () => {
        setCurrentFactIndex((prev) => (prev === 0 ? facts.length - 1 : prev - 1));
    };

    const handleNextFact = () => {
        setCurrentFactIndex((prev) => (prev === facts.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box sx={{ py: 8, backgroundColor: '#fff' }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Typography
                    variant="h2"
                    component="h1"
                    align="center"
                    sx={{
                        mb: 6,
                        fontWeight: 'bold',
                        color: '#333',
                    }}
                >
                    Upcoming Events
                </Typography>

                {/* Event Cards */}
                <Grid container spacing={4} sx={{ mb: 8 }}>
                    {upcomingEvents.map((event) => (
                        <Grid item key={event.id} xs={12} md={4}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={event.image}
                                    alt={event.title}
                                    sx={{
                                        width: '60%',
                                        mx: 'auto',
                                        display: 'block',
                                        height: 200,
                                        objectFit: 'contain',
                                    }}
                                />
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                                        {event.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                                        {event.date}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                        {event.description}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            borderColor: '#f0a500',
                                            color: '#f0a500',
                                            '&:hover': {
                                                borderColor: '#d89400',
                                                backgroundColor: 'rgba(240, 165, 0, 0.1)',
                                            },
                                        }}
                                    >
                                        RSVP
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Join Our Chapter */}
                <Box
                    sx={{
                        textAlign: 'center',
                        py: 8,
                        px: 2,
                        backgroundColor: '#f8f8f8',
                        borderRadius: '16px',
                        mb: 8,
                    }}
                >
                    <Typography variant="h3" component="h2" sx={{ mb: 3, color: '#333' }}>
                        Join Our Chapter
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', color: '#666' }}>
                        Be part of a vibrant community of innovators and leaders. Join us to explore exciting opportunities, events,
                        and collaborations in the IEEE GRSS Student Chapter.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: '#f0a500',
                            '&:hover': {
                                backgroundColor: '#d89400',
                            },
                            px: 4,
                            py: 1.5,
                        }}
                    >
                        Join Now
                    </Button>
                </Box>

                {/* Do You Know? */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" component="h2" sx={{ mb: 6, color: '#333' }}>
                        Do you Know?
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                            maxWidth: '800px',
                            mx: 'auto',
                        }}
                    >
                        <IconButton
                            onClick={handlePrevFact}
                            sx={{
                                color: '#f0a500',
                                '&:hover': { backgroundColor: 'rgba(240, 165, 0, 0.1)' },
                            }}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>

                        <Card
                            sx={{
                                flexGrow: 1,
                                py: 4,
                                px: 3,
                                minHeight: '200px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <Typography variant="h2" sx={{ mb: 2 }}>
                                {facts[currentFactIndex].icon}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {facts[currentFactIndex].text}
                            </Typography>
                        </Card>

                        <IconButton
                            onClick={handleNextFact}
                            sx={{
                                color: '#f0a500',
                                '&:hover': { backgroundColor: 'rgba(240, 165, 0, 0.1)' },
                            }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default EventsPage;