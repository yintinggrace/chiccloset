import { Button, Box } from '@mui/material';
import string from '../../string';

interface ItemModalButtonProps {
  onClose: () => void;
}

const ItemModalButton: React.FC<ItemModalButtonProps> = ({ onClose }) => {
  return (
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Button onClick={onClose} variant="contained" color="primary">
        {string.itemmodal.cancelButton}
      </Button>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="contained"
          color="primary"
        >
          {string.itemmodal.saveButton}
        </Button>

        <Button
          variant="contained"
          color="primary"
        >
          {string.itemmodal.deleteButton}
        </Button>
      </Box>
    </Box>
  )
}

export default ItemModalButton;
