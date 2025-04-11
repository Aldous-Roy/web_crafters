import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, List, ListItem } from '@mui/material';
import { motion } from 'framer-motion';
import CEO from "../assets/CEO.svg"
import principal from "../assets/principal.svg"
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"

const coreValues = [
  {
    title: 'Innovation',
    description: 'Driving cutting-edge research and novel applications in geoscience and remote sensing.',
  },
  {
    title: 'Excellence',
    description: 'Maintaining high standards in education, publications, and technical contributions.',
  },
  {
    title: 'Collaboration',
    description: 'Fostering partnerships across academia, industry, and government for impactful solutions.',
  },
  {
    title: 'Integrity',
    description: 'Promoting ethical practices, transparency, and scientific rigor in all activities.',
  },
  {
    title: 'Diversity & Inclusion',
    description: 'Building a global, inclusive environment that supports talent from all backgrounds.',
  },
  {
    title: 'Educational Outreach',
    description: 'Empowering students and young professionals through mentorship, workshops, and access to knowledge.',
  },
];

const patrons = [
  {
    name: 'Dr. Sai Prakash Leo Muthu',
    role: 'CHIEF CHAIRMAN',
    image: CEO
  },
  {
    name: 'Dr. K Palani Kumar',
    role: 'Principal, Sri Sai Ram Institute of Technology',
    image: principal
  },
  {
    name: 'Aldous Roy',
    role: 'Stratergist',
    image: boy
  },
  {
    name: 'Gaandhimathy',
    role: 'Captain',
    image: girl
  },
  {
    name: 'Mridhula',
    role: 'ORGANIZER',
    image: girl
  },
  {
    name: 'Ruthi Shankari',
    role: 'Propagator',
    image: girl
  },
  {
    name: 'Krithika S',
    role: 'Executor',
    image: girl
  },
];

const AboutUsPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Mission Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ mb: 4, fontWeight: 'bold', color: '#333' }}
            >
              Mission Statement
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', color: '#666' }}>
              The IEEE Geoscience and Remote Sensing Society (GRSS) Student Chapter at IEEE aims to foster innovation, collaboration, and technical excellence in the fields of geoscience and remote sensing. Our chapter serves as a platform for student members to engage in educational activities, participate in research projects, and network with professionals. We are committed to advancing knowledge in remote sensing technologies, environmental monitoring, and resource management, while also providing opportunities for networking and professional growth.
            </Typography>
          </Box>
        </motion.div>

        {/* Vision and Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mb: 4, fontWeight: 'bold', color: '#333' }}
            >
              Vision and Values of IEEE GRSS?
            </Typography>

            <Typography variant="h4" component="h3" sx={{ mb: 3, color: '#444' }}>
              Vision Statement
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, maxWidth: '800px', mx: 'auto', color: '#666' }}>
              The IEEE Geoscience and Remote Sensing Society (GRSS) envisions being universally recognized for its contributions to geoscience and remote sensing, working as an essential enabler of a vibrant global community of researchers, while fostering innovation and influencing our real world.
            </Typography>

            <Typography variant="h4" component="h3" sx={{ mb: 3, color: '#444' }}>
              Core Values of IEEE GRSS
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, maxWidth: '1200px', mx: 'auto' }}>
              {/* Left Column */}
              <Box sx={{ flex: 1 }}>
                {coreValues.slice(0, 3).map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        mb: 2,
                        textAlign: 'left',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" component="h4" sx={{ mb: 1, color: '#f0a500' }}>
                          {value.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>

              {/* Right Column */}
              <Box sx={{ flex: 1 }}>
                {coreValues.slice(3, 6).map((value, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        mb: 2,
                        textAlign: 'left',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" component="h4" sx={{ mb: 1, color: '#f0a500' }}>
                          {value.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Chief Patrons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mb: 6, fontWeight: 'bold', color: '#333' }}
            >
              CHIEF PATRONS
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {patrons.map((patron, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={patron.image}
                        alt={patron.name}
                        sx={{
                          objectFit: 'cover',
                          borderRadius: '50%',
                          width: '200px',
                          height: '200px',
                          margin: '20px auto',
                        }}
                      />
                      <CardContent>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                          {patron.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {patron.role}
                        </Typography>
                        <Button
                          variant="outlined"
                          sx={{
                            borderColor: '#f0a500',
                            color: '#f0a500',
                            '&:hover': {
                              borderColor: '#d89400',
                              backgroundColor: 'rgba(240, 165, 0, 0.1)',
                            },
                          }}
                        >
                          View Profile
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutUsPage;