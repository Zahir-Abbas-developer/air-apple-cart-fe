import SuperAdminLayout from '@/layouts/SuperAdminLayout';
import Faqs from '@/modules/Settings/Faqs';
const FaqsPage = () => {
  return <Faqs />;
};
export default FaqsPage;
FaqsPage.getLayout = function getLayout(page: any) {
  return <SuperAdminLayout>{page}</SuperAdminLayout>;
};
