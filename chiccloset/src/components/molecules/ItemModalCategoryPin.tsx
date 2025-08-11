import { Box, CircularProgress, Typography, Chip } from '@mui/material';
import { useCategories } from '../../hooks/useCategories';
import string from '../../string';

interface ItemModalCategoryPinProps {
  category: string;
}

const ItemModalCategoryPin: React.FC<ItemModalCategoryPinProps> = ({ category }) => {
  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) return <CircularProgress />;
  if (error || !categories) {
    return <Typography variant="body1" component="p">{string.navbar.error}</Typography>;
  }

  return (
    <Box>
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          fontSize: '12px',
          mb: 1,
        }}
      >
        {string.itemmodal.fields.category}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {categories.slice(1).map((cat) => (
          <Chip
            key={cat}
            label={cat}
            clickable
            color={category === cat ? 'primary' : 'default'}
            variant={category === cat ? 'filled' : 'outlined'}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ItemModalCategoryPin;
