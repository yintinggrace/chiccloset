import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import colors from '../../color';

interface AddItemProps {
  handleCreate: () => void;
}

const AddItem: React.FC<AddItemProps> = ({ handleCreate }) => {
  return (
    <Button
      variant="contained"
      sx={{
        position: 'fixed',
        bottom: 50,
        right: 50,
        zIndex: 1200,
        borderRadius: '50%',
        width: 56,
        height: 60,
        color: colors.white,
        '&:hover': {
          bgcolor: colors.black,
        },
        cursor: 'pointer'
      }}
      onClick={handleCreate}
    >
      <AddIcon />
    </Button>
  )
}

export default AddItem;
