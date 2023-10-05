import React, { useState } from 'react';

import { Box, Button, Typography, useTheme } from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';

import { FilterSharedIcon, RefreshSharedIcon } from '@/assets/icons';
import PlusShared from '@/assets/icons/shared/plus-shared';

import { styles } from './TaxCalculations.styles';

const TaxCalculation = () => {
  const theme = useTheme();
  const [
    isTaxCalculationFilterDrawerOpen,
    setIsTaxCalculationFilterDrawerOpen,
  ] = useState(false);
  const [isTaxCalculationDrawerOpen, setIsTaxCalculationDrawerOpen] =
    useState(false);
  const [taxCalculationSearch, setTaxCalculationSearch] = useState('');

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
          Tax Calculation
        </Typography>
        <Button
          variant="contained"
          sx={{ height: '36px', fontWeight: '500' }}
          onClick={() => setIsTaxCalculationDrawerOpen(true)}
        >
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
          searchBy={taxCalculationSearch}
          setSearchBy={setTaxCalculationSearch}
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
            onClick={() => setIsTaxCalculationFilterDrawerOpen(true)}
          >
            <FilterSharedIcon /> &nbsp; Filter
          </Button>
        </Box>
      </Box>
      <CommonDrawer
        isDrawerOpen={isTaxCalculationFilterDrawerOpen}
        onClose={() => setIsTaxCalculationFilterDrawerOpen(false)}
        title="Filters"
        okText="Apply"
        isOk={true}
        footer={true}
        submitHandler={() => setIsTaxCalculationFilterDrawerOpen(false)}
      >
        <Box>Filters</Box>
      </CommonDrawer>

      <CommonDrawer
        isDrawerOpen={isTaxCalculationDrawerOpen}
        onClose={() => setIsTaxCalculationDrawerOpen(false)}
        title="Tax Form"
        okText="Apply"
        isOk={true}
        footer={true}
        submitHandler={() => setIsTaxCalculationDrawerOpen(false)}
      >
        <Box>Tax Calculation Form</Box>
      </CommonDrawer>
    </Box>
  );
};

export default TaxCalculation;
