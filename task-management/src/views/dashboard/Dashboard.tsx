// External
import React, { FC, ReactElement, useState } from 'react';

// Style
import Stack from '@mui/material/Stack';

// Components
import { Card } from '../../components/Card/Card';
import TaskTable from '../../components/TaskTable/TaskTable';
import Navbar from '../../components/Navbar/Navbar';

type town = {
  name: string;
  id: string;
  manager: string;
};

export const Dashboard: FC = (): ReactElement => {
  const [selectedDisplay, setSelectedDisplay] = useState('Towns');

  const towns: town[] = [
    { name: 'Dighton', id: '1', manager: 'Janice Boucher' },
    { name: 'Rehoboth', id: '2', manager: 'John Smith' },
    { name: 'Ryanham', id: '3', manager: 'Jim Johnson' },
    { name: 'Orlando', id: '4', manager: 'Janice Boucher' },
    { name: 'Titusville', id: '5', manager: 'Bob Eason' },
  ];

  const handleTownSelected = () => {
    setSelectedDisplay('Tasks');
  };

  console.log(towns);
  return (
    <>
      <Navbar />
      <div style={{ marginLeft: '12px' }}>
        <h1>My {selectedDisplay}</h1>
        <Stack direction="row" spacing={2}>
          {selectedDisplay === 'Towns' &&
            towns.map((town) => (
              <Card
                onClick={() => handleTownSelected()}
                key={town.id}
                manager={town.manager}
                name={town.name}
              />
            ))}
        </Stack>
        {selectedDisplay === 'Tasks' && <TaskTable />}
      </div>
    </>
  );
};
