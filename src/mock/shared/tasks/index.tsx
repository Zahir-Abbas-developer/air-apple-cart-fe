import TanstackTable from '@/components/Tabel/TanstackTable';
import GridView from '@/modules/Tasks/GridView';
import { tasksColumns } from './task.data';

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
    tableChildren: (
      <TanstackTable data={TaskTableData('all')} columns={tasksColumns} />
    ),
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
    tableChildren: (
      <TanstackTable data={TaskTableData('my-task')} columns={tasksColumns} />
    ),
    gridChildtren: (
      <GridView title={'My Tasks'} data={TaskTableData('my-task')} />
    ),
  },
  {
    index: 2,
    label: 'Pending',
    tableChildren: (
      <TanstackTable data={TaskTableData('pending')} columns={tasksColumns} />
    ),
    gridChildtren: (
      <GridView title={'pending'} data={TaskTableData('pending')} />
    ),
  },
  {
    index: 3,
    label: 'In-Progress',
    tableChildren: (
      <TanstackTable
        data={TaskTableData('inprogress')}
        columns={tasksColumns}
      />
    ),
    gridChildtren: (
      <GridView title={'inprogress'} data={TaskTableData('inprogress')} />
    ),
  },
  {
    index: 4,
    label: 'Completed',
    tableChildren: (
      <TanstackTable data={TaskTableData('completed')} columns={tasksColumns} />
    ),
    gridChildtren: (
      <GridView title={'completed'} data={TaskTableData('completed')} />
    ),
  },
];
