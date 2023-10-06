import { useState } from 'react';

import { useRouter } from 'next/router';

import { useTheme } from '@mui/material';

import {
  TABLE_CONSTANTS,
  PlanDetailsDataColumnFunction,
} from './PlanDetails.data';

export const UsePlanDetails = () => {
  const theme = useTheme();
  const router = useRouter();

  const [ticketsListsColumn, seTTicketsListsColumn] = useState(
    PlanDetailsDataColumnFunction(theme, router),
  );
  // comment: renamed file name so test comment here to let know git about the file name change, otherwise renaming won't work

  return {
    ticketsListsColumn,
    router,
    TABLE_CONSTANTS,
    seTTicketsListsColumn,
  };
};
