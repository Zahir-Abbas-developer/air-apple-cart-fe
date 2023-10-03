import React, { useState } from 'react';
import DrawerComp from './Drawer';
import { DragIcon, EditColumnIcon } from '@/assets/images';
import Search from '@/components/Search';
import { Box, Checkbox } from '@mui/material';
import { uuid } from 'uuidv4';

const EditColumn = () => {
  const [search, setSearch] = useState('');

  const columnsData = [
    { title: 'Task Name' },
    { title: 'Task Status' },
    { title: 'Linked Company' },
    { title: 'Assigned User' },
    { title: 'Task Type' },
    { title: 'Last Date' },
  ];

  return (
    <DrawerComp
      btnTitle="Edit Columns"
      btnIcon={<EditColumnIcon />}
      title="Edit Columns"
      key={'editColumns'}
    >
      <Search
        size={'medium'}
        fullWidth
        label={'Search'}
        searchBy={search}
        setSearchBy={setSearch}
      />
      {columnsData.map((column) => (
        <ColumnsWrapper key={uuid()} title={column.title} />
      ))}
    </DrawerComp>
  );
};

export default EditColumn;

const ColumnsWrapper = ({ ...rest }) => {
  const { title } = rest;
  return (
    <Box
      my={'16px'}
      sx={{
        padding: '10px 16px',
        borderRadius: '8px',
        border: '1.5px solid #E5E7EB',
        color: '#9CA3AF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <DragIcon />
        {title}
      </Box>
      <Checkbox />
    </Box>
  );
};
