import { Box } from '@mui/material';
import string from '../../string';
import colors from '../../color';
import '../../App.css';

const Header = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        bgcolor: colors.white,
        zIndex: 1,
        textAlign: 'center',
        py: 2,
        boxShadow: 1,
      }}
    >
      <img
        src={string.header.logo}
        alt={string.header.altText}
        className='header-logo'

      />
    </Box>
  );
};

export default Header;
