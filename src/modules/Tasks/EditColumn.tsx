import React from 'react';
import DrawerComp from './Drawer';
import { EditColumnIcon } from '@/assets/images';
const EditColumn = () => {
  return (
    <DrawerComp
      btnTitle="Edit Columns"
      btnIcon={<EditColumnIcon />}
      title="Edit Columns"
      key={'editColumns'}
    >
      <p>fsdfhkdjfhdskfhdksfhkaf</p>
    </DrawerComp>
  );
};

export default EditColumn;
