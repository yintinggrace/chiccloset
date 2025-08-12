import { Box, Button } from '@mui/material';
import type { Product } from '../../types';
import React, { useRef } from 'react';
import string from '../../string';

interface ItemModalImageProps {
  editableProduct: Product;
  onImageChange: (dataUrl: string) => void;
  isNew: boolean;
}

const ItemModalImage: React.FC<ItemModalImageProps> = ({ editableProduct, onImageChange, isNew }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {editableProduct.image ? (
        <img
          src={editableProduct.image}
          alt={editableProduct.title}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      ) : null }

      {isNew ? (
        <Box mt={2}>
          <input
            accept="image/*"
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <Button variant="text" onClick={handleButtonClick}>
            {string.itemmodal.addButton }
          </Button>
        </Box>
       ) : (
        <Box mt={2}>
          <input
            accept="image/*"
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <Button variant="text" onClick={handleButtonClick}>
            {string.itemmodal.editButton }
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ItemModalImage;
