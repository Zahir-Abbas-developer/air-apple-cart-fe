import React, { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';

import PlusShared from '@/assets/icons/shared/plus-shared';

const PlanTypeCreation = () => {
  const [isPlanTypeCreationDrawer, setIsPlanTypeCreationDrawer] =
    useState(false);
  const [planTypeCreationSearch, setPlanTypeCreationSearch] = useState('');

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
