import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';

const JoinUs = () => {
  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <Box sx={{ 
        py: { xs: 4, md: 8 }, 
        backgroundColor: '#fff',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="reveal" sx={{ pr: { md: 6 } }}>
                <Typography 
                  variant="h2" 
                  component="h1" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 'bold',
                    mb: 3
                  }}
                >
                  Join Us
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: '#555',
                    mb: 4
                  }}
                >
                  Joining the IEEE GRSS Student Chapter offers numerous benefits, including access to valuable
                  resources, networking opportunities, and hands-on experiences in the field of geoscience and
                  remote sensing. As a member, you'll gain technical knowledge, meet industry professionals,
                  and enhance your academic journey.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                className="reveal"
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '400px' },
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                }}
              >
                <Box
                  component="img"
                  src="/placeholder-students.jpg" // Replace with your actual image
                  alt="Students collaborating"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Membership Benefits Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom 
            sx={{ mb: 6 }} 
            className="reveal"
          >
            Membership Benefits
          </Typography>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Card className="reveal" sx={{ 
                height: '100%', 
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-10px)' },
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: '12px'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 40, color: '#f0a500', mr: 2 }} />
                    <Typography variant="h5" component="h3">
                      Professional Development
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    Access to workshops, training, and resources to enhance your professional skills and knowledge.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="reveal" sx={{ 
                height: '100%', 
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-10px)' },
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: '12px'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <GroupsIcon sx={{ fontSize: 40, color: '#f0a500', mr: 2 }} />
                    <Typography variant="h5" component="h3">
                      Networking Opportunities
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    Meet like-minded professionals, build connections, and expand your network through our events and online platforms.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Form */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ 
          backgroundColor: '#f8f9fa', 
          p: { xs: 3, md: 6 }, 
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }} className="reveal">
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            Contact Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Work Email"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Department"
                variant="outlined"
                defaultValue="Student"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="College Name"
                variant="outlined"
                sx={{ mb: 3 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#f0a500',
                  py: 1.5,
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#d89400',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default JoinUs; 