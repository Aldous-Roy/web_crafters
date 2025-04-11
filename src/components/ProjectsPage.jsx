import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const projects = [
  {
    id: 1,
    title: 'Deforestation Study',
    description: 'Tracking AI in satellite satellite images',
    image: '/deforestation-study.jpg',
  },
  {
    id: 2,
    title: 'Urban Heat Mapping',
    description: 'Measuring heat distribution in urban areas',
    image: '/urban-heat.jpg',
  },
  {
    id: 3,
    title: 'Flood Risk Analysis',
    description: 'Analyzing flood zones via geospatial data',
    image: '/flood-risk.jpg',
  },
  {
    id: 4,
    title: 'Climate Monitoring',
    description: 'Tracking climate change globally',
    image: '/climate-monitoring.jpg',
  },
  {
    id: 5,
    title: 'Soil Erosion Study',
    description: 'Mapping and assessing soil loss trends',
    image: '/soil-erosion.jpg',
  },
  {
    id: 6,
    title: 'Renewable Energy Maps',
    description: 'Estimating solar and wind power capacity',
    image: '/renewable-energy.jpg',
  },
  {
    id: 7,
    title: 'Biodiversity Mapping',
    description: 'Identifying species-rich regions',
    image: '/biodiversity.jpg',
  },
  {
    id: 8,
    title: 'Water Quality Study',
    description: 'Monitoring pollutants in water bodies',
    image: '/water-quality.jpg',
  },
  {
    id: 9,
    title: 'Air Pollution Maps',
    description: 'Tracking air quality in city areas',
    image: '/air-pollution.jpg',
  },
];

const featuredProjects = [
  {
    id: 1,
    title: 'Green Haven',
    description: 'Innovative eco-friendly design',
    subtitle: 'Explore sustainable architecture projects',
    image: '/green-haven.jpg',
    buttonText: 'Learn More',
  },
  {
    id: 2,
    title: 'Urban Oasis',
    description: 'Revitalized urban spaces',
    subtitle: 'Discover community-focused designs',
    image: '/urban-oasis.jpg',
    buttonText: 'Explore',
  },
  {
    id: 3,
    title: 'River Arc',
    description: 'Engineering marvels in infrastructure',
    subtitle: 'One plus groundbreaking projects',
    image: '/river-arc.jpg',
    buttonText: 'View',
  },
];

const ProjectsPage = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Projects Gallery Section */}
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
          Projects Gallery
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
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
            </Grid>
          ))}
        </Grid>

        {/* Featured Projects Section */}
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          sx={{ 
            mb: 6,
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Featured Projects
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {featuredProjects.map((project) => (
            <Grid item key={project.id} xs={12} md={4}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsPage; 