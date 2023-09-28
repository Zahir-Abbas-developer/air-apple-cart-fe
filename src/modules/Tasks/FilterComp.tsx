import React from 'react';
import DrawerComp from './Drawer';
import { FilterIcon } from '@/assets/images';

const FilterComp = () => {
  return (
    <DrawerComp
      btnTitle="Filter"
      title="Filter"
      btnIcon={<FilterIcon />}
      key={'filter'}
    >
      <p>this is filter comp</p>
    </DrawerComp>
  );
};

export default FilterComp;
