import React, { useState } from 'react';

import { Box, Button, Typography, useTheme } from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';

import { FilterSharedIcon, RefreshSharedIcon } from '@/assets/icons';
import PlusShared from '@/assets/icons/shared/plus-shared';

import { styles } from './Faqs.styles';

const Faqs = () => {
  const theme = useTheme();
  const [isFaqsFilterDrawerOpen, setIsFaqsFilterDrawerOpen] = useState(false);
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
          FAQS
        </Typography>
        <Button variant="contained" sx={{ height: '36px', fontWeight: '500' }}>
          <PlusShared /> &nbsp; Add
        </Button>
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
            onClick={() => setIsFaqsFilterDrawerOpen(true)}
          >
            <FilterSharedIcon /> &nbsp; Filter
          </Button>
        </Box>
      </Box>
      <CommonDrawer
        isDrawerOpen={isFaqsFilterDrawerOpen}
        onClose={() => setIsFaqsFilterDrawerOpen(false)}
        title="Filters"
        okText="Apply"
        isOk={true}
        footer={true}
        submitHandler={() => setIsFaqsFilterDrawerOpen(false)}
      />
    </Box>
  );
};

export default Faqs;
