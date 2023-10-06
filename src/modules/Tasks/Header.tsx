import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Import from './Import';
import ActivityAndPerformance from './ActivityAndPerformance/ActivityAndPerformance';
import CreateTask from './CreateTask';
import { headerStyles } from './Tasks.Style';

const Header = () => {
  const theme = useTheme();

  const { header, title, action } = headerStyles(theme);

  return (
    <Box sx={header}>
      <Typography sx={title}>Tasks</Typography>
      <Box sx={action}>
        {/* <ManageQueues /> */}
        <Import />
        <ActivityAndPerformance />
        <CreateTask />
      </Box>
    </Box>
  );
};

export default Header;
