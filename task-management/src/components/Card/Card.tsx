import React, { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';

interface CardProps {
  onClick: () => void;
  manager: string;
  name: string;
}

export const Card: FC<CardProps> = (props): ReactElement => {
  const { onClick, name, manager } = props;
  return (
    <div onClick={onClick}>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <h1>{name}</h1>
        <h3>{manager}</h3>
      </Box>
    </div>
  );
};
