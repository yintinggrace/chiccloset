import { Box, Typography } from '@mui/material';
import string from '../../string';
import colors from '../../color';

const Hero = () => {
  return (
    <Box
      sx={{
        mt: 8,
        height: { xs: '60vh', sm: '70vh', md: '60vh' },
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
        zIndex: -1,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          bgcolor: colors.transparent,
          zIndex: 0,
        },
      }}
    >
      <Box sx={{
        padding: 2,
        color: colors.white,
        zIndex: 1
      }}>
        <Typography variant="h2" component="h1" sx={{ zIndex: 1 }}>
          {string.hero.adminGreeting}
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, zIndex: 1 }}>
          {string.hero.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
