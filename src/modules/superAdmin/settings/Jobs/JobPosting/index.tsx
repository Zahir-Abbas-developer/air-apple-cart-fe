import React, { useState } from 'react';

import { Box, useTheme, Button, Checkbox, Grid } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';

import CommonDrawer from '@/components/CommonDrawer';
import Search from '@/components/Search';
import TanstackTable from '@/components/Tabel/TanstackTable';
import CustomPagination from '@/components/CustomPagination';

import { FormProvider } from '@/components/ReactHookForm';

import { JobPostingPropsI } from './JobPostingProps.interface';

import { useForm } from 'react-hook-form';

import { FilterSharedIcon, RefreshSharedIcon } from '@/assets/icons';

import { styles } from './Jobs.styles';
import {
  jobPostingDataArray,
  jobPostingDefaultValues,
  jobPostingValidationSchema,
} from './jobPosting.data';

const JobPosting = ({
  isJobPostingDrawer,
  setIsJobPostingDrawer,
}: JobPostingPropsI) => {
  const data: any = [
    {
      id: 1,
      jobTitle: 'React JS Developer',
      shortDescription: 'We are looking for  a ...',
      category: 'Marketing',
      noOfVacancy: '1',
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
      accessorFn: (row: any) => row.jobTitle,
      id: 'jobTitle',
      cell: (info: any) => info.getValue(),
      header: 'Job Title',
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row.shortDescription,
      id: 'shortDescription',
      isSortable: true,
      header: 'Short Discription',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.category,
      id: 'category',
      isSortable: true,
      header: 'Category',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.noOfVacancy,
      id: 'noOfVacancy',
      isSortable: true,
      header: 'No ofVacency',
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
      header: 'Created date',
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

  const theme = useTheme();
  const [jobPostingSearch, setJobPostingSearch] = useState<string>('');

  const methodsCreateNewTicketForm = useForm({
    resolver: yupResolver(jobPostingValidationSchema),
    defaultValues: jobPostingDefaultValues,
  });

  const onSubmit = () => {
    setIsJobPostingDrawer(false);
  };
  const { handleSubmit } = methodsCreateNewTicketForm;

  return (
    <Box>
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
          searchBy={jobPostingSearch}
          setSearchBy={setJobPostingSearch}
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
          <Button sx={styles.filterButton(theme)}>
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
        isDrawerOpen={isJobPostingDrawer}
        onClose={() => setIsJobPostingDrawer(false)}
        title="Post a Job"
        okText="Post"
        isOk={true}
        footer={true}
        submitHandler={handleSubmit(onSubmit)}
      >
        <>
          <FormProvider
            methods={methodsCreateNewTicketForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={4}>
              {jobPostingDataArray?.map((item: any) => (
                <Grid item xs={12} md={item?.md} key={uuidv4()}>
                  <item.component {...item.componentProps} size={'small'}>
                    {item?.componentProps?.select
                      ? item?.options?.map((option: any) => (
                          <option key={option?.value} value={option?.value}>
                            {option?.label}
                          </option>
                        ))
                      : null}
                  </item.component>
                </Grid>
              ))}
            </Grid>
          </FormProvider>
        </>
      </CommonDrawer>
    </Box>
  );
};

export default JobPosting;
