import React, { useState } from 'react';
import { Button, ButtonGroup, useTheme } from '@mui/material';
import { RecycleIcon } from '@/assets/images';
import DrawerComp from '../Drawer';
import Insights from './Insights';
import Feed from './Feed';
import Shedule from './Shedule';

const ActivityAndPerformance = () => {
  const theme = useTheme();
  const btnValues = ['Insights', 'Feed', 'Shedule'];

  const [counter, setCounter] = useState({ count: 0, val: 'Insights' });

  const handleBtnClick = (val: string) => {
    setCounter({ count: counter.count + 1, val });
  };

  return (
    <DrawerComp
      title=""
      btnVariant="contained"
      btnIcon={<RecycleIcon />}
      hideFooter
    >
      {counter.val !== 'Shedule' && (
        <ButtonGroup>
          {btnValues.map((val) => (
            <Button
              key={val}
              onClick={() => handleBtnClick(val)}
              sx={{
                background: val === counter.val ? theme.palette.grey[400] : '',
              }}
            >
              {val}
            </Button>
          ))}
        </ButtonGroup>
      )}
      {counter.count === 0 && <Insights />}
      {counter.count === 1 && <Feed />}
      {counter.count === 2 && <Shedule />}
    </DrawerComp>
  );
};

export default ActivityAndPerformance;
