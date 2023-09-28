import React from 'react';
import DrawerComp from './Drawer';
import { UmbrellaIcon } from '@/assets/images';

const Import = () => {
  return (
    <DrawerComp
      title="Import"
      isOk
      okText="Import"
      btnTitle="Import"
      btnIcon={<UmbrellaIcon />}
    >
      <p>this is import</p>
    </DrawerComp>
  );
};

export default Import;
