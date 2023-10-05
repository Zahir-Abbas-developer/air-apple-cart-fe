import React, { useState } from 'react';

import { Box, Button, Checkbox, Typography, useTheme } from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';
import TanstackTable from '@/components/Tabel/TanstackTable';
import CustomPagination from '@/components/CustomPagination';

import { FilterSharedIcon, RefreshSharedIcon } from '@/assets/icons';

import { styles } from './Enquiries.styles';

const Enquiries = () => {
  const theme = useTheme();
  const [isEnquiriesFilterDrawerOpen, setIsEnquiriesFilterDrawerOpen] =
    useState(false);
  const [faqsSearch, setFaqsSearch] = useState('');

  const data: any = [
    {
      id: 1,
      name: 'John Doe',
      companyName: 'Orcalo Holdings',
      email: 'jhon.doe@mail.com',
      phoneNumber: '447788921',
      comments: 'Looking for your sale product',
      status: 'done',
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
      accessorFn: (row: any) => row.name,
      id: 'name',
      cell: (info: any) => info.getValue(),
      header: 'Name',
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.companyName,
      id: 'companyName',
      isSortable: true,
      header: 'Company Name',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.email,
      id: 'email',
      isSortable: true,
      header: 'Email',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.phoneNumber,
      id: 'phoneNumber',
      isSortable: true,
      header: 'Phone Number',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.comments,
      id: 'comments',
      isSortable: true,
      header: 'Comments',
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
          Enquiries
        </Typography>
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
          searchBy={faqsSearch}
          setSearchBy={setFaqsSearch}
          width="100%"
          size="small"
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Button sx={styles.refreshButton}>
            <RefreshSharedIcon />
          </Button>
          <Button
            sx={styles.filterButton(theme)}
            onClick={() => setIsEnquiriesFilterDrawerOpen(true)}
          >
            <FilterSharedIcon /> &nbsp; Filter
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
        isDrawerOpen={isEnquiriesFilterDrawerOpen}
        onClose={() => setIsEnquiriesFilterDrawerOpen(false)}
        title="Filters"
        okText="Apply"
        isOk={true}
        footer={true}
        submitHandler={() => setIsEnquiriesFilterDrawerOpen(false)}
      >
        Filters
      </CommonDrawer>
    </Box>
  );
};

export default Enquiries;
