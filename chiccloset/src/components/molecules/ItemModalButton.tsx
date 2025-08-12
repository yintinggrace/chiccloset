import { Button, Box, Typography } from '@mui/material';
import string from '../../string';

interface ItemModalButtonProps {
  onClose: () => void;
  handleSave: () => void;
  hasTriedSaving: boolean;
  isPending: boolean;
  isFormInvalid: boolean;
}

const ItemModalButton: React.FC<ItemModalButtonProps> = ({ onClose, handleSave, hasTriedSaving, isPending, isFormInvalid }) => {
  return (
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Button onClick={onClose} variant="contained" color="primary">
        {string.itemmodal.cancelButton}
      </Button>

      {hasTriedSaving && isFormInvalid && (
        <Typography variant="body2" color="error">
          Please fill in all fields before saving.
        </Typography>
      )}

      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          disabled={isPending}
        >
          {isPending
            ? string.itemmodalbutton.isPending
            : string.itemmodal.saveButton
          }
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
