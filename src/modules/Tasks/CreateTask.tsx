import React from 'react';
import DrawerComp from './Drawer';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateTask = () => {
  return (
    <DrawerComp
      title="Create Task"
      isOk
      okText="Create"
      btnIcon={<AddCircleIcon />}
      btnVariant="contained"
      btnTitle="Create Task"
    >
      <div>dasdlaskjdasd</div>
    </DrawerComp>
  );
};

export default CreateTask;
