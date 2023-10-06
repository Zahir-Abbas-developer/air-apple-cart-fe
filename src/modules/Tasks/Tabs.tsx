import * as React from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { TasksData } from '@/mock/shared/tasks';
import { uuid } from 'uuidv4';
import Filter from './FilterWrapper';
import { useTask } from './useTask';
import { TabPanelProps } from './tasks.interfaces';

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsComp() {
  const { handleToggler, handleTabChange, tabValue, toggler } = useTask();

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          {TasksData.map(({ index, label }) => (
            <Tab key={uuid()} label={label} {...a11yProps(index)} />
          ))}
        </Tabs>
        <Filter
          searchBarProps={{
            placeholder: 'Search Here ...',
          }}
          handleActionBtn={(val) => {
            val;
          }}
          // disableActionBtn
          handleToggler={(val: any) => handleToggler(val)}
          handleRefreshList={() => {
            'refresh';
          }}
        />
      </Box>
      {toggler === 'listView' &&
        TasksData.map(({ index, tableChildren }) => (
          <CustomTabPanel value={tabValue} index={index} key={uuid()}>
            {tableChildren}
          </CustomTabPanel>
        ))}
      {toggler === 'gridView' &&
        TasksData.map(({ index, gridChildtren }) => (
          <CustomTabPanel value={tabValue} index={index} key={uuid()}>
            {gridChildtren}
          </CustomTabPanel>
        ))}
    </Box>
  );
}
