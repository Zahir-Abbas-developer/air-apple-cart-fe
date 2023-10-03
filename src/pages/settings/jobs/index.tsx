import Layout from '@/layouts/Layout';
import Jobs from '@/modules/settings/Jobs';

const JobsPage = () => {
  return <Jobs />;
};
export default JobsPage;
JobsPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
