'use client';

import React from 'react';
import { Popover, Button, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Props {
  onChange: ({}) => void;
}

const ActionBtn = ({ onChange }: Props) => {
  const MenuItems = ['Edit', 'View Activity', 'Change Status', 'Delete'];
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
      >
        Actions
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {MenuItems.map((item) => (
          <MenuItem
            onClick={() => {
              onChange(item);
              handleClose();
            }}
            key={item}
          >
            {item}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default ActionBtn;
