import { useState } from 'react';

import { useRouter } from 'next/router';

import { useTheme } from '@mui/material';

import {
  TABLE_CONSTANTS,
  ticketsListsColumnFunction,
} from './PlanDetails.data';

export const usePlanDetails = () => {
  const theme = useTheme();
  const router = useRouter();

  const [ticketsListsColumn, seTTicketsListsColumn] = useState(
    ticketsListsColumnFunction(theme, router),
  );

  return {
    ticketsListsColumn,
    router,
    TABLE_CONSTANTS,
    seTTicketsListsColumn,
  };
};
