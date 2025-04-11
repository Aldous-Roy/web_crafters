import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import { motion } from 'framer-motion';

const JoinUs = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" sx={{ mb: 4, fontWeight: 'bold', color: '#333' }}>
                Join IEEE GRSS Student Chapter
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#666' }}>
                Be part of a vibrant community dedicated to advancing geoscience and remote sensing technology. Connect with peers, access exclusive resources, and grow your professional network.
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
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Box
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
                    src="/placeholder-students.jpg"
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
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Membership Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ mb: 6, fontWeight: 'bold', color: '#333' }}>
              Member Benefits
            </Typography>
            <Grid container spacing={4}>
              {[1, 2, 3, 4].map((item, index) => (
                <Grid item xs={12} md={6} key={item}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Card sx={{ 
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
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Box sx={{ 
            backgroundColor: '#f8f9fa', 
            p: { xs: 3, md: 6 }, 
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
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
        </motion.div>
      </Container>
    </Box>
  );
};

export default JoinUs; 