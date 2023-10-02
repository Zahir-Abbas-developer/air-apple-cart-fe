import React from 'react';

// ====================================
import SuperAdminLayout from '@/layouts/SuperAdminLayout/SuperAdminLayout';

// ====================================
import AddPlanModule from '@/modules/PlanManagement/AddPlan/AddPlan';

// ====================================
// import { ArrowLeftIcon } from '@/assets/icons';

// ==================================================================================================================================

const AddPlanPage = () => {
  return <AddPlanModule />;
};

export default AddPlanPage;

// ====================================

AddPlanPage.getLayout = function getLayout(page: any) {
  return <SuperAdminLayout>{page}</SuperAdminLayout>;
};
