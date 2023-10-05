import React, { useState } from 'react';

import { Box, Button, Typography, Checkbox } from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';
import TanstackTable from '@/components/Tabel/TanstackTable';
import CustomPagination from '@/components/CustomPagination';

import PlusShared from '@/assets/icons/shared/plus-shared';

const PlanTypeCreation = () => {
  const [isPlanTypeCreationDrawer, setIsPlanTypeCreationDrawer] =
    useState(false);
  const [planTypeCreationSearch, setPlanTypeCreationSearch] = useState('');

  const data: any = [
    {
      id: 1,
      planTypeName: 'React JS Developer',
      description: 'We are looking for  a ...',
      createdBy: 'Arlene McCoy',
      createdDate: '10/04/2023',
      status: 'open',
    },
  ];
  const columns: any = [
    {
      accessorFn: (row: any) => row.id,
      id: 'id',
      cell: (info: any) => <Checkbox color="primary" name={info.getValue()} />,
      header: <Checkbox color="primary" name="Id" />,
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.planTypeName,
      id: 'planTypeName',
      cell: (info: any) => info.getValue(),
      header: 'Plan Type Name',
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.description,
      id: 'description',
      isSortable: true,
      header: 'Discription',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.createdBy,
      id: 'createdBy',
      isSortable: true,
      header: 'Created By',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.createdDate,
      id: 'createdDate',
      isSortable: true,
      header: 'Created Date',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.status,
      id: 'status',
      isSortable: true,
      header: 'Status',
      cell: (info: any) => info.getValue(),
    },
  ];

  return (
    <Box
      sx={{
        borderRadius: '15px',
        border: '1px solid #EAECF0',
        padding: '16px 24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '19px',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: '600' }}>
          Plan Type Creation
        </Typography>
        <Box>Filter here</Box>
      </Box>
      <Box
        mt={2}
        mb={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Search
          label={'Search here'}
          searchBy={planTypeCreationSearch}
          setSearchBy={setPlanTypeCreationSearch}
          width="100%"
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Button
            variant="contained"
            sx={{ height: '36px', fontWeight: '500' }}
            onClick={() => setIsPlanTypeCreationDrawer(true)}
          >
            <PlusShared /> &nbsp; Add Plan Type
          </Button>
        </Box>
      </Box>
      <Box>
        <TanstackTable columns={columns} data={data} />
        <CustomPagination
          count={1}
          rowsPerPageOptions={[1, 2]}
          entriePages={1}
        />
      </Box>
      <CommonDrawer
        isDrawerOpen={isPlanTypeCreationDrawer}
        onClose={() => setIsPlanTypeCreationDrawer(false)}
        title="Add Plan Type"
        okText="Apply"
        isOk={true}
        footer={true}
        submitHandler={() => setIsPlanTypeCreationDrawer(false)}
      >
        <p>ssdsd</p>
      </CommonDrawer>
    </Box>
  );
};

export default PlanTypeCreation;
