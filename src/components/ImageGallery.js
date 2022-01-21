import "./ImageGallery.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageGallery() {
  return (
    <Box className="imgs" sx={{ width: 500, height: 550, overflowY: 'scroll', margin: 'auto'}}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {[...Array(44).keys()].map((img) => (
          <ImageListItem key={img}>
            <img
              src={`${`https://res.cloudinary.com/myclutch/image/upload/v1642641235/Mere%20and%20I/MereandI/${img}.png`}?w=248&fit=crop&auto=format`}
              srcSet={`${`https://res.cloudinary.com/myclutch/image/upload/v1642641235/Mere%20and%20I/MereandI/${img}.png`}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={''}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
