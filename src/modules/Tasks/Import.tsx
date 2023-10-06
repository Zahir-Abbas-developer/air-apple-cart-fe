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
      <div>this is import</div>
    </DrawerComp>
  );
};

export default Import;
