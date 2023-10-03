import React, { useState } from 'react';

import { Box, Button, Typography, useTheme } from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';

import { FilterSharedIcon, RefreshSharedIcon } from '@/assets/icons';

import { styles } from './Enquiries.styles';

const Enquiries = () => {
  const theme = useTheme();
  const [isEnquiriesFilterDrawerOpen, setIsEnquiriesFilterDrawerOpen] =
    useState(false);
  const [faqsSearch, setFaqsSearch] = useState('');

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
      <CommonDrawer
        isDrawerOpen={isEnquiriesFilterDrawerOpen}
        onClose={() => setIsEnquiriesFilterDrawerOpen(false)}
        title="Filters"
        okText="Apply"
        isOk={true}
        footer={true}
        submitHandler={() => setIsEnquiriesFilterDrawerOpen(false)}
      />
    </Box>
  );
};

export default Enquiries;
