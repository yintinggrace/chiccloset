import { Box, Typography } from '@mui/material';
import string from '../../string';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 5, sm: 7, md: 8 },
        px: { xs: 2, sm: 4 },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
      }}>
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          {string.footer.credit}
        </Typography>

        <Typography
          variant="body2"
          sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
        >
          {string.footer.copyright}
        </Typography>
    </Box>
  );
};

export default Footer;
