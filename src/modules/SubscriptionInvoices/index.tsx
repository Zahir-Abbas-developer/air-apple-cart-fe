import React, { useState, useEffect } from 'react';
import { Tab, Box } from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import Subscriptions from './Subscriptions';

function SubscriptionInvoices() {
  /* VARIABLE DECLARATION
  -------------------------------------------------------------------------------------*/
  const [value, setValue] = useState('subscription');

  /* EVENT FUNCTIONS
  -------------------------------------------------------------------------------------*/
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  /* EVENT LISTENERS
  -------------------------------------------------------------------------------------*/
  useEffect(() => {}, []);

  /* RENDER COMPONENT
  -------------------------------------------------------------------------------------*/
  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="subscription & invoices tabs"
          >
            <Tab label="Subscription" value="subscription" />
            <Tab label="Invoices" value="invoices" />
            <Tab label="Payment Methods" value="paymentMethods" />
          </TabList>
        </Box>
        <TabPanel value="subscription">
          <Subscriptions />
        </TabPanel>
        <TabPanel value="invoices">Item Two</TabPanel>
        <TabPanel value="paymentMethods">Item Three</TabPanel>
      </TabContext>
    </>
  );
}

export default SubscriptionInvoices;
