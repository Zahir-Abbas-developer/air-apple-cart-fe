import React, { useState } from 'react';
import DrawerComp from './Drawer';
import { Button, Typography } from '@mui/material';

const ManageQueues = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <DrawerComp
      title={toggle ? 'Create queue' : 'Manage queues'}
      btnTitle="Manage Queues"
      isOk={toggle}
      okText="create"
      submitHandler={handleToggle}
    >
      {!toggle ? (
        <>
          <Typography sx={{ my: '32px' }}>
            From the actions menu, you can edit, delete or create a saved view
            from any of your existing queues.
          </Typography>
          <h4 style={{ marginBottom: '32px' }}>global Table Here</h4>
          <Button variant="outlined" onClick={handleToggle}>
            Create queue
          </Button>
        </>
      ) : (
        <p>edit Comrt</p>
      )}
    </DrawerComp>
  );
};

export default ManageQueues;
