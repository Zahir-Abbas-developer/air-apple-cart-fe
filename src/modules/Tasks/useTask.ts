import * as React from 'react';

export const useTask = () => {
  // grid view and list view
  const [toggler, setToggler] = React.useState<string>('listView');
  const handleToggler = (value: string) => setToggler(value);

  // tab
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return {
    toggler,
    handleToggler,
    tabValue,
    handleTabChange,
  };
};
