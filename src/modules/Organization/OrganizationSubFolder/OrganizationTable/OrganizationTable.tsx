import React, { useState } from 'react';

import Image from 'next/image';

import {
  Grid,
  Box,
  Button,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  AvatarGroup,
  Typography,
} from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Search from '@/components/Search';
import CommonDrawer from '@/components/Drawer';

import add from '../../../../assets/images/modules/organization/addcircle.png';

const OrganizationTable = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [value, setValue] = useState('search here');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenEditDrawer(true);
  };

  function createData(
    name: string,
    avatar: any,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, avatar, fat, carbs, protein };
  }

  const rows = [
    createData(
      'Orcalo Holdings',
      <AvatarGroup max={4}>
        <Avatar
          src="../../../../assets/images/modules/organization/addcircle.png"
          alt="Remy Sharp"
        />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>,
      6.0,
      24,
      4.0,
    ),
    createData(
      'Air applecart',
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>,
      9.0,
      37,
      4.3,
    ),
    createData(
      'PPCN',
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>,
      16.0,
      24,
      6.0,
    ),
  ];

  return (
    <>
      <CommonDrawer
        isDrawerOpen={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        title="Create Company"
        okText="ok"
        isOk={true}
        footer={true}
        // submitHandler={}
      >
        <Typography variant="h5">Company Logo</Typography>
        <center>
          <Box
            sx={{
              border: '1px solid #E5E7EB',
              borderRadius: '100px',
              width: '120px',
              height: '120px',
              boxShadow:
                '0px 2px 4px -2px #1018280F, 5px 5px 9px -2px #1018281A',
            }}
          ></Box>
        </center>
      </CommonDrawer>
      <CommonDrawer
        isDrawerOpen={openEditDrawer}
        onClose={() => {
          setOpenEditDrawer(false);
        }}
        title="Edit Company"
        okText="ok"
        isOk={true}
        footer={true}
        // submitHandler={}
      >
        Add COMPANY account
      </CommonDrawer>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Search
              label="Search here"
              width="100%"
              searchBy={value}
              setSearchBy={(e: string) => {
                setValue(e);
              }}
            />
          </Grid>
          <Grid item lg={9} md={9} sm={6} xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
                columnGap: '10px',
              }}
            >
              <Button
                sx={{
                  border: '1px solid #D1D5DB',
                  color: '#6B7280',
                  fontSize: '14px',
                  fontWeight: 500,
                  width: { lg: 'unset', md: 'unset', sm: 'unset', xs: '100%' },
                }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Action <ArrowDropDownIcon sx={{ color: '#6B7280' }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>View</MenuItem>
                <MenuItem>Delete</MenuItem>
              </Menu>
              <Button
                onClick={() => {
                  setOpenDrawer(true);
                }}
                variant="contained"
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                  columnGap: '10px',
                  '&:hover': {
                    backgroundColor: '#38CAB5',
                    color: '#fff',
                  },
                }}
              >
                <Image src={add} alt="add" /> Add Company Account
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ paddingTop: '10px' }}>
        <TableContainer>
          <Table>
            <TableHead sx={{ background: '#EAECF0' }}>
              <TableRow>
                <TableCell sx={{ color: '#4B5563' }}>Company Account</TableCell>
                <TableCell sx={{ color: '#4B5563' }} align="center">
                  Products
                </TableCell>
                <TableCell sx={{ color: '#4B5563' }} align="center">
                  Phone No.
                </TableCell>
                <TableCell sx={{ color: '#4B5563' }} align="center">
                  Address
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.avatar}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default OrganizationTable;
