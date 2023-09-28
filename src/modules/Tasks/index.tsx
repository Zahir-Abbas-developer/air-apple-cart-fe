import React from 'react';
import Header from './Header';
import TabsComp from './Tabs';

const TaskComp = () => {
  return (
    <div>
      <Header />
      {/* <p>tab component here</p> */}
      <TabsComp />
    </div>
  );
};

export default TaskComp;
