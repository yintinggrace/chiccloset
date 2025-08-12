import { Box, Typography } from '@mui/material';
import string from '../../string';

const Hero = () => {
  return (
    <Box
      sx={{
        mt: 8,
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: `url(${string.hero.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        color: '#fff',
        zIndex: -1,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 0,
        },
      }}
    >
      <Typography variant="h2" component="h1" sx={{ zIndex: 1 }}>
        {string.hero.adminGreeting}
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, zIndex: 1 }}>
        {string.hero.title}
      </Typography>
    </Box>
  );
};

export default Hero;
