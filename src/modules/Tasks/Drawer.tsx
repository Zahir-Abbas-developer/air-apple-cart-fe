import React, { useState } from 'react';
import { Button } from '@mui/material';
import { uuid } from 'uuidv4';
import CommonDrawer from '@/components/CommonDrawer';
import { TaskDrawerInterfaceProps } from './tasks.interfaces';

const DrawerComp = ({
  title = 'title',
  btnTitle = '',
  btnIcon = '',
  btnVariant = 'outlined',
  children,
  submitHandler = () => {},
  isOk = true,
  okText = 'submit',
  hideFooter = false,
}: TaskDrawerInterfaceProps) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <>
      <Button
        variant={btnVariant}
        startIcon={btnIcon}
        sx={{
          minHeight: '36px',
          '& .startIcon': {
            marginRight: btnTitle ? '8px' : '-4px',
          },
        }}
        classes={{
          startIcon: 'startIcon',
        }}
        onClick={handleToggle}
      >
        {btnTitle}
      </Button>
      <CommonDrawer
        footer={hideFooter}
        title={title}
        isDrawerOpen={open}
        onClose={handleToggle}
        key={title + uuid()}
        submitHandler={submitHandler}
        isOk={isOk}
        okText={okText}
      >
        {children}
      </CommonDrawer>
    </>
  );
};

export default DrawerComp;
