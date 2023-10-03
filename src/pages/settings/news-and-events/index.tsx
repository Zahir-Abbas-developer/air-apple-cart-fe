import Layout from '@/layouts/Layout';
import NewsAndEvents from '@/modules/settings/NewsAndEvents';
const NewsAndEventsPage = () => {
  return <NewsAndEvents />;
};
export default NewsAndEventsPage;
NewsAndEventsPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
