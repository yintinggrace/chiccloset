import { Button, Box, Typography } from '@mui/material';
import string from '../../string';

interface ItemModalButtonProps {
  onClose: () => void;
  handleSave: () => void;
  handleDelete: () => void;
  hasTriedSaving: boolean;
  isPending: boolean;
  isFormInvalid: boolean;
  isNew: boolean;
}

const ItemModalButton: React.FC<ItemModalButtonProps> = ({ onClose, handleSave, handleDelete, hasTriedSaving, isPending, isFormInvalid, isNew }) => {
  return (
    <Box sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Button onClick={onClose} variant="contained" color="primary">
        {string.itemmodal.buttons.cancelButton}
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
            : string.itemmodal.buttons.saveButton
          }
        </Button>

        {isNew ? null :
          <Button
            variant="contained"
            color="primary"
            onClick={handleDelete}
          >
            {string.itemmodal.buttons.deleteButton}
          </Button>
        }
      </Box>
    </Box>
  )
}

export default ItemModalButton;
