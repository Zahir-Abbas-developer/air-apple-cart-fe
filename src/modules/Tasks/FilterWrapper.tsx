'use client';

import React from 'react';
import { Box, Button, TextField, TextFieldProps, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ActionBtn from './ActionBtn';
import EditColumn from './EditColumn';
import FilterComp from './FilterComp';
import Toggler from './Toggler';
import { RefreshIcon } from '@/assets/images';
import { filterStyles } from './Tasks.Style';

interface Props {
  handleActionBtn: ({}) => void;
  handleToggler: ({}) => void;
  handleRefreshList?: () => void;
  searchBarProps?: TextFieldProps;
  disableActionBtn?: boolean;
}

const Filter = ({
  searchBarProps = {},
  handleActionBtn = () => {},
  handleToggler = () => {},
  handleRefreshList = () => {},
  disableActionBtn,
}: Props) => {
  return (
    <Box sx={filterStyles.filterWrapper}>
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
          <Button variant="outlined" onClick={handleRefreshList}>
            <RefreshIcon />
          </Button>
        </Tooltip>
        <ActionBtn
          disableActionBtn={disableActionBtn}
          onChange={handleActionBtn}
        />
        <EditColumn />
        <FilterComp />
        <Toggler onClick={handleToggler} />
      </Box>
    </Box>
  );
};

export default Filter;
