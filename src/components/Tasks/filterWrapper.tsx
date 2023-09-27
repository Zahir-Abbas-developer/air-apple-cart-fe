'use client';

import React from 'react';
import { Box, Button, TextField, TextFieldProps, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SyncIcon from '@mui/icons-material/Sync';
import ActionBtn from './ActionBtn';
import EditColumn from './EditColumn';
import FilterComp from './FilterComp';
import Toggler from './Toggler';

interface Props {
  handleActionBtn: ({}) => void;
  handleToggler: ({}) => void;
  handleRefreshList?: () => void;
  searchBarProps?: TextFieldProps;
}

const Filter = ({
  searchBarProps = {},
  handleActionBtn = () => {},
  handleToggler = () => {},
  handleRefreshList = () => {},
}: Props) => {
  return (
    <Box sx={styles.filterWrapper}>
      <TextField
        placeholder="Search Here"
        size="small"
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        {...searchBarProps}
      />
      <Box display={'flex'} alignItems={'center'} gap={'8px'} flexWrap={'wrap'}>
        <Tooltip title={'Refresh Filter'}>
          <Button size="small" variant="contained" onClick={handleRefreshList}>
            <SyncIcon />
          </Button>
        </Tooltip>
        <ActionBtn onChange={handleActionBtn} />
        <EditColumn />
        <FilterComp />
        <Toggler onClick={handleToggler} />
      </Box>
    </Box>
  );
};

export default Filter;
const styles = {
  filterWrapper: {
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '15px',
  },
};
