import React from 'react';
import DelasTable from './Deals/DelasTable';
import HorizontalTabs from '@/components/Tabs/HorizontalTabs';
import Layout from '@/layout';
import DealHeader from './DealHeader';
import DealFilter from './DealFilter';
import DealCustomize from './DealCustomize';

const SalesDeals = () => {
  const DealsTabs = ['All Deals', 'My Deals'];

  return (
    <Layout>
      <DealHeader />
      <DealCustomize />
      <DealFilter />
      <HorizontalTabs tabsDataArray={DealsTabs}>
        {/* <CustomizeColumns /> */}
        <DelasTable />
      </HorizontalTabs>
    </Layout>
  );
};

export default SalesDeals;
