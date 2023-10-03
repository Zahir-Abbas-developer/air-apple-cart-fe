import Layout from '@/layouts/Layout';
import TaxCalculation from '@/modules/settings/TaxCalculations';
const TaxCalculationPage = () => {
  return <TaxCalculation />;
};
export default TaxCalculationPage;
TaxCalculationPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
