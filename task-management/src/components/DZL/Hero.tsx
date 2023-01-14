import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Hero = () => {
  return (
    <>
      <h1>Website & Application Design</h1>
      <p>
        We work with you to transform your dream into a
        passive income or active business. Working with new
        or small businesses is our specialty, we have
        different contract pricing offers that help make
        building your vision a reality. Contact us today to
        start your journey!
      </p>
      <p>
        Drop Zone Live is here to help small businesses or
        simple ideas get off the ground and accelerate.
      </p>
    </>
    // <Box
    //   sx={{
    //     width: 300,
    //     height: 300,
    //     backgroundColor: 'primary.dark',
    //     '&:hover': {
    //       backgroundColor: 'primary.main',
    //       opacity: [0.9, 0.8, 0.7],
    //     },
    //   }}
    // />
  );
};

export default Hero;
