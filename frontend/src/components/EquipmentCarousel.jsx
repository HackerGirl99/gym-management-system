import React from 'react';
import { Carousel, Image } from 'react-bootstrap'; // Consider if needed

import gym01Image from '../GYMpic/gym01.jpg';
import gym02Image from '../GYMpic/gym02.jpg';
import gym03Image from '../GYMpic/gym03.jpg';

const images = [gym01Image, gym02Image, gym03Image];

const EquipmentCarousel = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div className="rounded-lg overflow-hidden flex justify-center items-center"> {/* Added border container */}
            <Image
              src={image} // Assuming images is an array of image paths
              alt={`Equipment ${index + 1}`} // Descriptive alt text
              fluid
              className="w-1000 h-64 md:h-80 object-cover" // Removed rounded-lg (already in border container)
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default EquipmentCarousel;
