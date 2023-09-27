import React, { useState } from 'react';
import { Button, Drawer, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DrawerComp = ({
  title,
  btnTitle,
  btnIcon,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
  btnTitle?: string;
  btnIcon?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <>
      <Button
        size="small"
        variant="outlined"
        startIcon={btnIcon}
        onClick={handleToggle}
      >
        {btnTitle}
      </Button>
      <Drawer
        open={open}
        onClose={handleToggle}
        anchor="right"
        PaperProps={{
          style: {
            minWidth: '400px',
            borderRadius: '30px 0px 0px 30px',
            padding: '32px 24px',
          },
        }}
      >
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          marginBottom={'32px'}
        >
          <Typography>{title}</Typography>
          <CloseIcon onClick={handleToggle} sx={{ cursor: 'pointer' }} />
        </Box>
        {children}
      </Drawer>
    </>
  );
};

export default DrawerComp;
