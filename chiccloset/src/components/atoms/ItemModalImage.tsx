import { Box, Button } from '@mui/material';
import type { Product } from '../../types';
import React, { useRef } from 'react';

interface ItemModalImageProps {
  editableProduct: Product;
  onImageChange: (dataUrl: string) => void;
}

const ItemModalImage: React.FC<ItemModalImageProps> = ({ editableProduct, onImageChange }) => {
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
      <img
        src={editableProduct.image}
        alt={editableProduct.title}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      />

      <Box mt={2}>
        <input
          accept="image/*"
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <Button variant="text" onClick={handleButtonClick}>
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default ItemModalImage;
