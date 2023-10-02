import React, { useState } from 'react';

import { Avatar, Box, Button, Divider, Typography } from '@mui/material';

import CommonDrawer from '@/components/Drawer';

import Search from '@/components/Search';

import FilterUser from '../UsersDetails/Drawers/FilterUser/FilterUser';

import AddUser from '../UsersDetails/Drawers/AddUser/AddUser';

import { FilterSharedIcon, PlusSharedIcon } from '@/assets/icons';

const UsersSidebar = () => {
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);
  const [openAdduserDrawer, setOpenAdduserDrawer] = useState(false);

  return (
    <Box p={'24px'}>
      <Box
        py={1}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h3">Users</Typography>
        <Button
          onClick={() => {
            setOpenAdduserDrawer(true);
          }}
          variant="contained"
          startIcon={<PlusSharedIcon />}
        >
          Add User
        </Button>
      </Box>
      <Divider />
      <Box
        py={1}
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}
      >
        <Search label="Placeholder" />
        <Button
          onClick={() => {
            setOpenFilterDrawer(true);
          }}
          sx={{
            border: '1px solid grey',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FilterSharedIcon />
        </Button>
      </Box>

      <Box
        className="users-wrapper"
        sx={{
          backgroundColor: '#F3F4F6',
          borderRadius: '4px',
          padding: '11px 8px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>Roberts Rohan</Typography>
              <Typography>active</Typography>
            </Box>
            <Typography>Robert@airapplecart.co.uk</Typography>
          </Box>
        </Box>
      </Box>

      {openFilterDrawer && (
        <CommonDrawer
          isDrawerOpen={openFilterDrawer}
          setIsDrawerOpen={setOpenFilterDrawer}
          title="Filters"
          okText="Apply"
          submitHandler={() => {}}
          isOk={true}
        >
          <FilterUser />
        </CommonDrawer>
      )}

      {openAdduserDrawer && (
        <CommonDrawer
          isDrawerOpen={openAdduserDrawer}
          setIsDrawerOpen={setOpenAdduserDrawer}
          title="Add User"
          okText="Add"
          submitHandler={() => {}}
          isOk={true}
        >
          <AddUser />
        </CommonDrawer>
      )}
    </Box>
  );
};

export default UsersSidebar;
