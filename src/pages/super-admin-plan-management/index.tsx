// ====================================
import SuperAdminLayout from '@/layouts/SuperAdminLayout/SuperAdminLayout';

// ====================================
import PlanManagementModule from '@/modules/PlanManagement';

// ==================================================================================================================================

const SuperAdminPlanManagementPage = () => {
  return <PlanManagementModule />;
};

export default SuperAdminPlanManagementPage;

// ====================================
SuperAdminPlanManagementPage.getLayout = function getLayout(page: any) {
  return <SuperAdminLayout>{page}</SuperAdminLayout>;
};
