import React, { useState } from 'react';
import { Button } from '@mui/material';
import CommonDrawer from '@/components/Drawer';
import { uuid } from 'uuidv4';

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
}: {
  title?: string;
  children?: React.ReactNode;
  btnTitle?: string;
  btnIcon?: React.ReactNode;
  submitHandler?: () => void;
  isOk?: boolean;
  okText?: string;
  btnVariant?: 'outlined' | 'contained';
  hideFooter?: boolean;
}) => {
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
        requireFooter={hideFooter}
        title={title}
        isDrawerOpen={open}
        setIsDrawerOpen={handleToggle}
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
