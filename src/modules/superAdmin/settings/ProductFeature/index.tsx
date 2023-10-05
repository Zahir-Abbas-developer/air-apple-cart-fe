import React, { useState } from 'react';

import { Box, Button, Typography, Checkbox } from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';
import TanstackTable from '@/components/Tabel/TanstackTable';
import CustomPagination from '@/components/CustomPagination';

import PlusShared from '@/assets/icons/shared/plus-shared';

const ProductFeature = () => {
  const [isAddProductFeatureDrawer, setIsAddProductFeatureDrawer] =
    useState(false);
  const [productFeatureSearch, setProductFeatureSearch] = useState('');
  const data: any = [
    {
      id: 1,
      productName: 'Sales',
      productFeatureName: 'XYZ',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      status: 'active',
      createdBy: 'John Doe',
      createdDate: '12/4/2023',
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
      accessorFn: (row: any) => row.productName,
      id: 'productName',
      cell: (info: any) => info.getValue(),
      header: 'Product Name',
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.productFeatureName,
      id: 'productFeatureName',
      isSortable: true,
      header: 'Project Feature Name',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.description,
      id: 'description',
      isSortable: true,
      header: 'Category',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.status,
      id: 'status',
      isSortable: true,
      header: 'Status',
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
          Product Features Setup
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
          searchBy={productFeatureSearch}
          setSearchBy={setProductFeatureSearch}
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
            onClick={() => setIsAddProductFeatureDrawer(true)}
          >
            <PlusShared /> &nbsp; Add Feature
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
        isDrawerOpen={isAddProductFeatureDrawer}
        onClose={() => setIsAddProductFeatureDrawer(false)}
        title="Add Product Feature form"
        okText="Apply"
        isOk={true}
        footer={true}
        submitHandler={() => setIsAddProductFeatureDrawer(false)}
      >
        <p>ssdsd</p>
      </CommonDrawer>
    </Box>
  );
};

export default ProductFeature;
