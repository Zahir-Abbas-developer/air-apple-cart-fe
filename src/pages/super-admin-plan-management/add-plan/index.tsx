import React from 'react';

// ====================================
import SuperAdminLayout from '@/layouts/SuperAdminLayout';

// ====================================
import AddPlanModule from '@/modules/PlanManagement/AddPlan/AddPlan';

// ==================================================================================================================================

const AddPlanPage = () => {
  return <AddPlanModule />;
};

export default AddPlanPage;

// ====================================

AddPlanPage.getLayout = function getLayout(page: any) {
  return <SuperAdminLayout>{page}</SuperAdminLayout>;
};
