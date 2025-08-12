import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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
        zIndex: 1,
        borderRadius: '50%',
        width: 56,
        height: 60,
        backgroundColor: '#d9d9d9',
        color: '#fffff',
        '&:hover': {
          backgroundColor: 'black',
        }
      }}
      onClick={handleCreate}
    >
      <AddIcon />
    </Button>
  )
}

export default AddItem;
