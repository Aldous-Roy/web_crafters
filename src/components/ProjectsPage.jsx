import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import deforestation from "../assets/deforestation.svg"
import urbanHeat from "../assets/urban heat.svg"
import flood from "../assets/flood.svg"
import climate from "../assets/climate monitoring.svg"
import soilErosion from "../assets/soilerosion.svg"
import renewableEnergy from "../assets/energy.svg"
import biodiversity from "../assets/biodiversity.svg"
import waterQuality from "../assets/water.svg"
import greenheaven from "../assets/Image 20@2x.svg"
import urban from "../assets/urban.svg"

const projects = [
  {
    id: 1,
    title: 'Deforestation Study',
    description: 'Tracking AI in satellite satellite images',
    image: deforestation
  },
  {
    id: 2,
    title: 'Urban Heat Mapping',
    description: 'Measuring heat distribution in urban areas',
    image: urbanHeat
  },
  {
    id: 3,
    title: 'Flood Risk Analysis',
    description: 'Analyzing flood zones via geospatial data',
    image: flood
  },
  {
    id: 4,
    title: 'Climate Monitoring',
    description: 'Tracking climate change globally',
    image: climate
  },
  {
    id: 5,
    title: 'Soil Erosion Study',
    description: 'Mapping and assessing soil loss trends',
    image: soilErosion
  },
  {
    id: 6,
    title: 'Renewable Energy Maps',
    description: 'Estimating solar and wind power capacity',
    image: renewableEnergy
  },
  {
    id: 7,
    title: 'Biodiversity Mapping',
    description: 'Identifying species-rich regions',
    image: biodiversity
  },
  {
    id: 8,
    title: 'Water Quality Study',
    description: 'Monitoring pollutants in water bodies',
    image: waterQuality
  },
];

const featuredProjects = [
  {
    id: 1,
    title: 'Green Haven',
    description: 'Innovative eco-friendly design',
    subtitle: 'Explore sustainable architecture projects',
    image: greenheaven,
    buttonText: 'Learn More',
  },
  {
    id: 2,
    title: 'Urban Oasis',
    description: 'Revitalized urban spaces',
    subtitle: 'Discover community-focused designs',
    image: urban,
    buttonText: 'Explore',
  },
];

const ProjectsPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Projects Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            sx={{ mb: 6, fontWeight: 'bold', color: '#333' }}
          >
            Projects Gallery
          </Typography>
          
          <Grid container spacing={4} sx={{ml:15, mb: 8 }}>
            {projects.map((project, index) => (
              <Grid item key={project.id} xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
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
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
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
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            sx={{ mb: 6, fontWeight: 'bold', color: '#333' }}
          >
            Featured Projects
          </Typography>
          
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {featuredProjects.map((project, index) => (
              <Grid item key={project.id} xs={12} md={4}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
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
                      height="250"
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        {project.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.subtitle}
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
                        {project.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectsPage; 