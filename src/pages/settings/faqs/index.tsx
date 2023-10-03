import Layout from '@/layouts/Layout';
import Faqs from '@/modules/Settings/Faqs';
const FaqsPage = () => {
  return <Faqs />;
};
export default FaqsPage;
FaqsPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
