import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center' }}>
      <Typography variant="body2">&copy; 2024 My Company. All Rights Reserved.</Typography>
    </Box>
  );
};

export default Footer;
