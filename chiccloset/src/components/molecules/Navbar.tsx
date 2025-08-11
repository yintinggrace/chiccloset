import { Tabs, Tab, Box, CircularProgress, Typography } from '@mui/material';
import { useCategories } from '../../hooks/useCategories';
import string from '../../string';

interface NavbarProps {
  selected: string;
}

const Navbar: React.FC<NavbarProps> = ({ selected }) => {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) return <CircularProgress />;
  if (error || !categories) return <Typography variant="body1" component="p">{string.navbar.error}</Typography>;

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={selected}
        aria-label="category tabs"
        variant="scrollable"
        scrollButtons="auto"
      >
        {categories.map((category) => (
          <Tab key={category} label={category} value={category} />
        ))}
      </Tabs>
    </Box>
  );
};

export default Navbar;
