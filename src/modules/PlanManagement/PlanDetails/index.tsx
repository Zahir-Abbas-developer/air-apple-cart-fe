import React from 'react';

import TanstackTable from '@/components/Tabel/TanstackTable';

import { usePlanDetails } from './usePlanDetails';

import { ticketsListsData } from './PlanDetails.data';

const PlanDetails = () => {
  const { ticketsListsColumn } = usePlanDetails();

  return (
    <div>
      <TanstackTable columns={ticketsListsColumn} data={ticketsListsData} />
    </div>
  );
};

export default PlanDetails;
