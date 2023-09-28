import SuperAdminLayout from '@/layouts/SuperAdminLayout/SuperAdminLayout';

import Jobs from '@/modules/settings/Jobs';

const JobsPage = () => {
  return <Jobs />;
};
export default JobsPage;
JobsPage.getLayout = function getLayout(page: any) {
  return <SuperAdminLayout>{page}</SuperAdminLayout>;
};
