import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TasksData } from '@/mock/shared/tasks';
import Filter from './filterWrapper';
import { uuid } from 'uuidv4';

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
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {TasksData.map(({ index, label }) => (
            <Tab key={uuid()} label={label} {...a11yProps(index)} />
          ))}
        </Tabs>
        <Filter
          searchBarProps={{
            placeholder: 'sdkljhjkfhkjsdghds',
          }}
          handleActionBtn={(val) => {
            val;
          }}
          handleToggler={(val) => {
            val;
          }}
          handleRefreshList={() => {
            'refresh';
          }}
        />
      </Box>
      {TasksData.map(({ index, children }) => (
        <CustomTabPanel value={value} index={index} key={uuid()}>
          {children}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
