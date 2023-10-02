import { useState } from 'react';
import TanstackTable from '@/components/Tabel/TanstackTable';
import { columns, data } from './TicketTasks.mock';
import { Button, Typography } from '@mui/material';
import { TicketTaskDrawer } from './TicketTaskDrawer';
import { PlusSharedIcon, ActionButtonIcon } from '@/assets/icons';
import { taskStyles } from './TicketTasks.styles';

export const Tasks = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <div style={taskStyles?.headContainer}>
        <Typography variant="h5" sx={taskStyles?.headText}>
          Task
        </Typography>
        <div style={taskStyles?.btnContainer}>
          <Button sx={taskStyles?.actionBtn} endIcon={<ActionButtonIcon />}>
            Action
          </Button>
          <Button
            sx={taskStyles?.addTaskBtn}
            onClick={() => setIsDrawerOpen(true)}
            startIcon={<PlusSharedIcon />}
          >
            Add New Task
          </Button>
        </div>
      </div>
      <TicketTaskDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <br />
      <TanstackTable columns={columns(setIsDrawerOpen)} data={data} />
    </div>
  );
};
