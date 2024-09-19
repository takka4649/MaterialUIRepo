import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: 'green',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography variant="h2">Welcome to Our Company</Typography>
        <Typography variant="h6" sx={{ marginBottom: '2rem' }}>
          We provide the best services to help your business grow.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
