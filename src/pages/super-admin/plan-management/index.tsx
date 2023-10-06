import Layout from '@/layout';

import PlanManagementModule from '@/modules/PlanManagement';

const SuperAdminPlanManagementPage = () => {
  return <PlanManagementModule />;
};

export default SuperAdminPlanManagementPage;

SuperAdminPlanManagementPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
