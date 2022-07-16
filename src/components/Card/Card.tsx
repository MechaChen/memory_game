import React, { useState } from 'react';
import {
  Box,
  Image,
  Center,
} from '@chakra-ui/react';

import Baal from './Baal.webp';

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Box
      display="inline-block"
      p="4"
      bg="white"
      width="300px"
      height="400px"
      cursor="pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* content */}
      <Box
        position="relative"
        width="100%"
        height="100%"
        borderRadius="lg"
        borderWidth="1px"
        transition="transform 0.6s"
        style={{ transformStyle: 'preserve-3d' }}
        transform={isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
      >
        {/* main */}
        <Box
          transform="rotateY(180deg)"
          position="absolute"
          width="100%"
          height="100%"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image src={Baal} alt="Baal" />
          <Center>Baal</Center>
        </Box>
        {/* cover */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          style={{ backfaceVisibility: 'hidden' }}
          bg="#8a8"
        />
      </Box>
    </Box>
  );
}

export default Card;
