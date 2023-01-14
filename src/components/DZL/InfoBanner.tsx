import { Grid } from '@mui/material';
import React from 'react';

const InfoBanner = () => {
  return (
    <Grid container spacing={2} minHeight={160}>
      <Grid
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h2>Test 1 </h2>
      </Grid>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h2>Test 2 </h2>
      </Grid>
      <Grid
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h2>Test 3 </h2>
      </Grid>
      <Grid
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h2>Test 4 </h2>
      </Grid>
    </Grid>
  );
};

export default InfoBanner;
