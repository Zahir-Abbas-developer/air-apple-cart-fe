import SuperAdminLayout from '@/layouts/SuperAdminLayout';
import TaskComp from '@/modules/Tasks';
function SuperAdminReportsPage() {
  return <TaskComp />;
}
export default SuperAdminReportsPage;
SuperAdminReportsPage.getLayout = function getLayout(page: any) {
  return <SuperAdminLayout>{page}</SuperAdminLayout>;
};
