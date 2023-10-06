import React from 'react';

import Link from 'next/link';

import { Box, Typography } from '@mui/material';

import useAddPlan from './UseAppPlan';

import { ArrowLeftIcon } from '@/assets/icons';

import AppHorizontalStepper from '../Stepper';

const AddPlan = () => {
  const { addPlanFormValues, setAddPlanFormValues, AddPlanStepperData } =
    useAddPlan();
  return (
    <div>
      <Box display={'flex'} alignItems={'center'} gap={1}>
        <Link href={'/super-admin-plan-management'}>
          <ArrowLeftIcon />
        </Link>
        <Typography variant="h4">Add Plan</Typography>
      </Box>
      <AppHorizontalStepper
        stepsArray={AddPlanStepperData}
        addPlanFormValues={addPlanFormValues}
        setAddPlanFormValues={setAddPlanFormValues}
      />
    </div>
  );
};

export default AddPlan;
