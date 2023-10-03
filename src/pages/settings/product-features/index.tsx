import Layout from '@/layouts/Layout';
import ProductFeature from '@/modules/settings/ProductFeature';
const ProductFeaturesPage = () => {
  return <ProductFeature />;
};
export default ProductFeaturesPage;
ProductFeaturesPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
