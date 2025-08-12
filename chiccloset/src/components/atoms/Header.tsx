import { Box } from '@mui/material';
import string from '../../string';

const Header = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        bgcolor: 'background.paper',
        zIndex: 1,
        textAlign: 'center',
        py: 2,
        boxShadow: 1,
      }}
    >
      <img
        src={string.header.logo}
        alt={string.header.altText}
        style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
      />
    </Box>
  );
};

export default Header;
