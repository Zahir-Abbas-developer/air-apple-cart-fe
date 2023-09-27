import React from 'react';

// ====================================
import Link from 'next/link';

// ====================================
import { Box, Typography } from '@mui/material';

// ====================================
import SuperAdminLayout from '@/layouts/SuperAdminLayout/SuperAdminLayout';

// ====================================
import StepperModule from '@/modules/PlanManagement/Stepper';

// ====================================
import { ArrowLeftIcon } from '@/assets/icons';

// ==================================================================================================================================

const AddPlanPage = () => {
  return (
    <div>
      <Box display={'flex'} alignItems={'center'} gap={1}>
        <Link href={'/super-admin-plan-management'}>
          <ArrowLeftIcon />
        </Link>
        <Typography variant="h4">Add Plan Form</Typography>
      </Box>

      <Typography variant="h6">Stepper</Typography>

      <StepperModule />

      <Typography variant="h6">Stepper 1 child form</Typography>
    </div>
  );
};

export default AddPlanPage;

// ====================================

AddPlanPage.getLayout = function getLayout(page: any) {
  return <SuperAdminLayout>{page}</SuperAdminLayout>;
};
