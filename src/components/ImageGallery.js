import "./ImageGallery.css"
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageGallery() {
  return (
    <div className="imgs">
      <ImageList variant="masonry" cols={3} gap={6}>
        {[...Array(44).keys()].map((img) => (
          <ImageListItem key={img}>
            <img
              src={`${`https://res.cloudinary.com/myclutch/image/upload/v1642641235/Mere%20and%20I/MereandI/${img}.webp`}?w=248&fit=crop&auto=format`}
              srcSet={`${`https://res.cloudinary.com/myclutch/image/upload/v1642641235/Mere%20and%20I/MereandI/${img}.webp`}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={''}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    
    </div>
  );
}

