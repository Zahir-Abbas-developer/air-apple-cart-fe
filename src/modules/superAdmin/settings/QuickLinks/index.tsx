import React, { useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Grid,
  Switch,
  Typography,
  useTheme,
} from '@mui/material';

import Search from '@/components/Search';
import CommonDrawer from '@/components/CommonDrawer';
import TanstackTable from '@/components/Tabel/TanstackTable';
import CustomPagination from '@/components/CustomPagination';

import { isNullOrEmpty } from '@/utils';

import {
  ArrowBackIcon,
  FilterSharedIcon,
  RefreshSharedIcon,
} from '@/assets/icons';
import PlusShared from '@/assets/icons/shared/plus-shared';

import { v4 as uuidv4 } from 'uuid';

import { styles } from './QuickLinks.style';
import { quickLinksData } from '@/mock/modules/Settings/QuickLinks';

const QuickLinks = () => {
  const theme = useTheme();
  const [isQuickLinksFilterDrawerOpen, setIsQuickLinksFilterDrawerOpen] =
    useState(false);
  const [quickLinksSearch, setQuickLinksSearch] = useState('');
  const [isManageQuickLinks, setIsManageQuickLinks] = useState<boolean>(false);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const data: any = [
    {
      id: 1,
      product: 'sales',
      moduleName: 'deals',
      createdDate: '12-july-2023',
      url: 'https://www.airapplecart.co.uk',
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
      accessorFn: (row: any) => row.product,
      id: 'product',
      cell: (info: any) => info.getValue(),
      header: 'Product',
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.moduleName,
      id: 'moduleName',
      isSortable: true,
      header: 'Module/Sub Module Name',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.createdDate,
      id: 'createdDate',
      isSortable: true,
      header: 'Created at',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.url,
      id: 'url',
      isSortable: true,
      header: 'URL',
      cell: (info: any) => info.getValue(),
    },
  ];

  return (
    <>
      {!isManageQuickLinks ? (
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
            <Button
              variant="contained"
              sx={{ height: '36px', fontWeight: '500' }}
              onClick={() => setIsManageQuickLinks(true)}
            >
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
                onClick={() => setIsQuickLinksFilterDrawerOpen(true)}
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
      ) : (
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              cursor: 'pointer',
            }}
            onClick={() => setIsManageQuickLinks(false)}
          >
            <ArrowBackIcon />
            <Typography variant="h4" sx={{ fontWeight: '600' }}>
              Quick Links
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ marginTop: '40px' }}>
            {!isNullOrEmpty(quickLinksData) &&
              quickLinksData.map((item: any) => (
                <Grid item xs={8} lg={4} key={uuidv4()}>
                  <Box sx={styles.quickLinksCard(theme)}>
                    <Box sx={styles.quickLinksCardHead(theme)}>
                      <Typography variant="h6">{item.label}</Typography>
                    </Box>
                    {item.list.map((options: any) => (
                      <Box
                        key={uuidv4()}
                        sx={{
                          padding: '4px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography sx={{ fontWeight: '500' }}>
                          {options.label}
                        </Typography>
                        <Switch {...label} defaultChecked={options.isChecked} />
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default QuickLinks;
