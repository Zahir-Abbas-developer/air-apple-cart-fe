import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { ticketsActionDropdown } from './TicketsAction.data';
import { v4 as uuidv4 } from 'uuid';
import { Typography, useTheme } from '@mui/material';
import { ExportIcon } from '@/assets/icons';

export const TicketsExport = () => {
  //   const { ticketsActionDropdown } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="outlined"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // endIcon={<ArrowDropDownIcon />}
        startIcon={<ExportIcon />}
      >
        Export
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '.MuiMenu-paper': {
            paddingX: 2,
          },
        }}
      >
        <MenuItem
          key={uuidv4()}
          onClick={() => handleClose?.()}
          //   sx={{ padding: 1.5 }}
        >
          <Typography variant="body2" color={theme.palette.grey?.[600]}>
            CSV
          </Typography>
        </MenuItem>
        <MenuItem
          key={uuidv4()}
          onClick={() => handleClose?.()}
          sx={{ padding: 1.5 }}
        >
          <Typography variant="body2" color={theme.palette.grey?.[600]}>
            Excel
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
