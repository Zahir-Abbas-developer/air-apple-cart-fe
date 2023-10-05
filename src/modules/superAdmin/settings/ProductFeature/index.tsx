import React, { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';

import PlusShared from '@/assets/icons/shared/plus-shared';

const ProductFeature = () => {
  const [isAddProductFeatureDrawer, setIsAddProductFeatureDrawer] =
    useState(false);
  const [productFeatureSearch, setProductFeatureSearch] = useState('');

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
