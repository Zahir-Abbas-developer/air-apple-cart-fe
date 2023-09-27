import React from 'react';
import DrawerComp from './Drawer';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FilterComp = () => {
  return (
    <DrawerComp
      btnTitle="Filter"
      title="Filter"
      // btnIcon={<ArrowDropDownIcon />}
      key={'filter'}
    >
      <p>this is filter comp</p>
    </DrawerComp>
  );
};

export default FilterComp;
