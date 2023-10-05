import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TasksData } from '@/mock/shared/tasks';
import Filter from './FilterWrapper';
import { uuid } from 'uuidv4';
import { useTask } from './actionHandler';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
