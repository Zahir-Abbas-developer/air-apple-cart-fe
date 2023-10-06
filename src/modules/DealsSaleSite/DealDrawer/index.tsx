import React, { useState } from 'react';
import { Button } from '@mui/material';
import CommonDrawer from '@/components/CommonDrawer';

const DealDrawer = ({ btnProps, children, drawerProps }: any) => {
  const [open, setOpen] = useState(false);
  const handleTogle = () => setOpen(!open);
  return (
    <div>
      <Button
        onClick={handleTogle}
        variant={btnProps?.variant ?? 'outlined'}
        {...btnProps}
      >
        {btnProps.title}
      </Button>
      <CommonDrawer
        isDrawerOpen={open}
        onClose={handleTogle}
        isOk={drawerProps?.isOk ?? true}
        cancelText={drawerProps?.cancelText ?? 'Cancel'}
        footer={drawerProps?.footer ?? true}
        {...drawerProps}
      >
        {children}
      </CommonDrawer>
    </div>
  );
};

export default DealDrawer;
