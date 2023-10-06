import React from 'react';
import { Popover, Button, MenuItem, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TaskInterfaceProps } from './tasks.interfaces';
import { ActionBtnStyles } from './Tasks.Style';

const ActionBtn = ({ disableActionBtn, onChange }: TaskInterfaceProps) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const MenuItems = ['Edit', 'View Activity', 'Change Status', 'Delete'];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        variant="outlined"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
        disabled={disableActionBtn}
        classes={{ outlined: 'outlined_btn' }}
        sx={ActionBtnStyles(theme, disableActionBtn)}
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
