import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

// Sample product data - replace with your actual data
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$99.99',
    image: '/product1.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$149.99',
    image: '/product2.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$79.99',
    image: '/product3.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$199.99',
    image: '/product4.jpg',
  },
];

const ProductGrid = () => {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h2" component="h2" align="center" sx={{ mb: 6 }}>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {product.name}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                  {product.price}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid; 