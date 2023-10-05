import GridView from '@/modules/Tasks/GridView';
import TaskTable from '@/modules/Tasks/TaskTable';

const tableMockData = [
  {
    id: '1',
    taskName: 'verification',
    taskStatus: 'inprogress',
    linkedCompany: 'apple',
    assignedUser: 'darlene robertson',
    taskType: 'email',
    lastDate: '21-03-2023 01:46 PM',
  },
  {
    id: '2',
    taskName: 'deal lock',
    taskStatus: 'pending',
    linkedCompany: 'dell',
    assignedUser: 'darlene robertson',
    taskType: 'call',
    lastDate: '21-03-2023 01:46 PM',
  },
  {
    id: '3',
    taskName: 'service maintenance',
    taskStatus: 'completed',
    linkedCompany: 'microsoft',
    assignedUser: 'darlene robertson',
    taskType: 'email',
    lastDate: '21-03-2023 01:46 PM',
  },
  {
    id: '4',
    taskName: 'server install',
    taskStatus: 'my-task',
    linkedCompany: 'apple',
    assignedUser: 'darlene robertson',
    taskType: 'email',
    lastDate: '21-03-2023 01:46 PM',
  },
  {
    id: '5',
    taskName: 'verification',
    taskStatus: 'my-task',
    linkedCompany: 'apple',
    assignedUser: 'darlene robertson',
    taskType: 'email',
    lastDate: '21-03-2023 01:46 PM',
  },
];

const TaskTableData = (type: string) =>
  type === 'all'
    ? tableMockData
    : tableMockData.filter((obj) => obj.taskStatus === type);

export const TasksData = [
  {
    index: 0,
    label: 'All',
    tableChildren: <TaskTable data={TaskTableData('all')} />,
    gridChildtren: (
      <GridView
        title={'All'}
        data={TaskTableData('all')}
        myTaskData={TaskTableData('my-task')}
        pendingData={TaskTableData('pending')}
        inprogressData={TaskTableData('inprogress')}
        completedData={TaskTableData('completed')}
      />
    ),
  },
  {
    index: 1,
    label: 'My Tasks',
    tableChildren: <TaskTable data={TaskTableData('my-task')} />,
    gridChildtren: (
      <GridView title={'My Tasks'} data={TaskTableData('my-task')} />
    ),
  },
  {
    index: 2,
    label: 'Pending',
    tableChildren: <TaskTable data={TaskTableData('pending')} />,
    gridChildtren: (
      <GridView title={'pending'} data={TaskTableData('pending')} />
    ),
  },
  {
    index: 3,
    label: 'In-Progress',
    tableChildren: <TaskTable data={TaskTableData('inprogress')} />,
    gridChildtren: (
      <GridView title={'inprogress'} data={TaskTableData('inprogress')} />
    ),
  },
  {
    index: 4,
    label: 'Completed',
    tableChildren: <TaskTable data={TaskTableData('completed')} />,
    gridChildtren: (
      <GridView title={'completed'} data={TaskTableData('completed')} />
    ),
  },
];
