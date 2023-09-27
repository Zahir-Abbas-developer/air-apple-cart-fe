import { Box } from '@mui/material';
import React from 'react';
import Header from './header';
import TabsComp from './tabs';

const TasksComp = () => {
  return (
    <Box sx={style.wrapper}>
      <Box sx={style.wrapperBox}>
        <Header />
        <TabsComp />
      </Box>
    </Box>
  );
};

export default TasksComp;

const style = {
  wrapper: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '24px',
    minHeight: '100vh',
    width: '90%',
    margin: 'auto',
    border: '1px solid red',
  },
  wrapperBox: {
    boxShadow: '0px 1px 2px 0px #1018280F 0px 1px 3px 0px #1018281A',
  },
};
