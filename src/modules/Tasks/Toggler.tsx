import { GridViewIcon, ListViewIcon } from '@/assets/images';
import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

const Toggler = ({ onClick }: { onClick: ({}) => void }) => {
  const [activeColor, setActiveColor] = React.useState('listView');

  const handleClick = (type: string) => {
    onClick(type);
    setActiveColor(type);
  };

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      sx={{ minHeight: '36px' }}
    >
      <Button
        onClick={() => handleClick('listView')}
        sx={{
          '&:hover': { backgroundColor: '#F3F4F6' },
          backgroundColor: activeColor === 'listView' ? '#F3F4F6' : '',
        }}
      >
        <ListViewIcon />
      </Button>
      <Button
        onClick={() => handleClick('gridView')}
        sx={{
          '&:hover': { backgroundColor: '#F3F4F6' },
          backgroundColor: activeColor === 'gridView' ? '#F3F4F6' : '',
        }}
      >
        <GridViewIcon />
      </Button>
    </ButtonGroup>
  );
};

export default Toggler;
