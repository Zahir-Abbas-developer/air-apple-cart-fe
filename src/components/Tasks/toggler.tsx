import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

const Toggler = ({ onClick = () => {} }: { onClick: ({}) => void }) => {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      size="small"
    >
      <Button onClick={() => onClick('listView')}>One</Button>
      <Button onClick={() => onClick('gridView')}>Two</Button>
    </ButtonGroup>
  );
};

export default Toggler;
