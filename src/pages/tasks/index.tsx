import TaskComp from '@/modules/Tasks';
import SuperAdminLayout from '@/layouts/SuperAdminLayout/SuperAdminLayout';
function SuperAdminReportsPage() {
  return <TaskComp />;
}
export default SuperAdminReportsPage;
SuperAdminReportsPage.getLayout = function getLayout(page: any) {
  return <SuperAdminLayout>{page}</SuperAdminLayout>;
};
