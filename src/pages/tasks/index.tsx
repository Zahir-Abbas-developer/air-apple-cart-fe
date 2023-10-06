import Layout from '@/layout';
import TaskComp from '@/modules/Tasks';
function SuperAdminReportsPage() {
  return <TaskComp />;
}
export default SuperAdminReportsPage;
SuperAdminReportsPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
