import React from 'react';

// ====================================
import Layout from '@/layouts/Layout';

// ====================================
import AddPlanModule from '@/modules/PlanManagement/AddPlan/AddPlan';

// ==================================================================================================================================

const AddPlanPage = () => {
  return <AddPlanModule />;
};

export default AddPlanPage;

// ====================================

AddPlanPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
