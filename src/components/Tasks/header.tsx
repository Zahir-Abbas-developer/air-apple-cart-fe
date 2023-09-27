import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <Box sx={style.header}>
      <Typography sx={style.title}>Tasks</Typography>
      <Box>
        <Button>import</Button>
        <Button>import</Button>
        <Button>import</Button>
      </Box>
    </Box>
  );
};

export default Header;

const style = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    flexWrap: 'wrap',
    gap: '15px',
  },
  title: {
    flex: 1,
    fontSize: '24px',
    fontWeight: 600,
    color: '#1F2937',
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
};
