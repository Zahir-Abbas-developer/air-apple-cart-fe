import React, { useState } from 'react';

import { Box, Button, Typography, useTheme } from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';

import { FilterSharedIcon, RefreshSharedIcon } from '@/assets/icons';
import PlusShared from '@/assets/icons/shared/plus-shared';

import { styles } from './QuickLinks.style';

const QuickLinks = () => {
  const theme = useTheme();
  const [isQuickLinksFilterDrawerOpen, setIsQuickLinksFilterDrawerOpen] =
    useState(false);
  const [quickLinksSearch, setQuickLinksSearch] = useState('');

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
          Quick Links
        </Typography>
        <Button variant="contained" sx={{ height: '36px', fontWeight: '500' }}>
          <PlusShared /> &nbsp; Manage
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
          searchBy={quickLinksSearch}
          setSearchBy={setQuickLinksSearch}
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
            onClick={() => setIsQuickLinksFilterDrawerOpen(true)}
          >
            <FilterSharedIcon /> &nbsp; Filter
          </Button>
        </Box>
      </Box>
      <CommonDrawer
        isDrawerOpen={isQuickLinksFilterDrawerOpen}
        onClose={() => setIsQuickLinksFilterDrawerOpen(false)}
        title="Filters"
        okText="Apply"
        isOk={true}
        footer={true}
        submitHandler={() => setIsQuickLinksFilterDrawerOpen(false)}
      >
        Quick links Filters
      </CommonDrawer>
    </Box>
  );
};

export default QuickLinks;
