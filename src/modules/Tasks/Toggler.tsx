import { GridViewIcon, ListViewIcon } from '@/assets/images';
import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

const Toggler = ({ onClick = () => {} }: { onClick: ({}) => void }) => {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      sx={{ minHeight: '36px' }}
    >
      <Button onClick={() => onClick('listView')}>
        <ListViewIcon />
      </Button>
      <Button onClick={() => onClick('gridView')}>
        <GridViewIcon />
      </Button>
    </ButtonGroup>
  );
};

export default Toggler;
