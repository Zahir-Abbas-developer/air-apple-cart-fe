import React, { useState } from 'react';

import { Box, useTheme, Button, Checkbox, Grid } from '@mui/material';

import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';

import CommonDrawer from '@/components/CommonDrawer';
import Search from '@/components/Search';
import TanstackTable from '@/components/Tabel/TanstackTable';
import CustomPagination from '@/components/CustomPagination';

import { FormProvider } from '@/components/ReactHookForm';

import { useForm } from 'react-hook-form';

import { FilterSharedIcon, RefreshSharedIcon } from '@/assets/icons';

import { styles } from './JobsApplication.styles';
import {
  jobApplicationDefaultValues,
  jobApplicationFiltersDataArray,
  jobApplicationValidationSchema,
} from './JobApplication.data';

const JobApplication = () => {
  const data: any = [
    {
      id: 1,
      jobTitle: 'React JS Developer',
      candidate: 'We are looking for  a ...',
      applyDate: 'Marketing',
      jobPostedDate: '1',
      resume: 'Arlene McCoy',
      coverLetter: '10/04/2023',
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
      accessorFn: (row: any) => row.candidate,
      id: 'candidate',
      isSortable: true,
      header: 'Candidate',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.applyDate,
      id: 'applyDate',
      isSortable: true,
      header: 'Apply Date',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.jobPostedDate,
      id: 'jobPostedDate',
      isSortable: true,
      header: 'Job Posted Date',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.resume,
      id: 'resume',
      isSortable: true,
      header: 'Resume',
      cell: (info: any) => info.getValue(),
    },
    {
      accessorFn: (row: any) => row.coverLetter,
      id: 'coverLetter',
      isSortable: true,
      header: 'Cover Letter',
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
  const [jobApplicationSearch, setJobApplicationSearch] = useState<string>('');
  const [isJobApplicationFilterDrawer, setIsJobApplicationFilterDrawer] =
    useState<boolean>(false);

  const methodsJobApplication = useForm({
    resolver: yupResolver(jobApplicationValidationSchema),
    defaultValues: jobApplicationDefaultValues,
  });

  const onSubmit = () => {
    setIsJobApplicationFilterDrawer(false);
  };
  const { handleSubmit } = methodsJobApplication;

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
          searchBy={jobApplicationSearch}
          setSearchBy={setJobApplicationSearch}
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
            onClick={() => setIsJobApplicationFilterDrawer(true)}
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
        isDrawerOpen={isJobApplicationFilterDrawer}
        onClose={() => setIsJobApplicationFilterDrawer(false)}
        title="Filter"
        okText="Apply"
        isOk={true}
        footer={true}
        submitHandler={handleSubmit(onSubmit)}
      >
        <>
          <FormProvider
            methods={methodsJobApplication}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={4}>
              {jobApplicationFiltersDataArray?.map((item: any) => (
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

export default JobApplication;
