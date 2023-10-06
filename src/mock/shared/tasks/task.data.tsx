import { Checkbox } from '@mui/material';

export const tasksColumns: any = [
  {
    accessorFn: (row: any) => row.Id,
    id: 'Id',
    cell: (info: any) => <Checkbox color="primary" name={info.getValue()} />,
    header: <Checkbox color="primary" name="Id" />,
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.taskName,
    id: 'taskName',
    cell: (info: any) => info.getValue(),
    header: 'Task Name',
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.taskStatus,
    id: 'taskStatus',
    isSortable: true,
    header: 'Task Status',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row.linkedCompany,
    id: 'linkedCompany',
    isSortable: true,
    header: 'Linked Company',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row.assignedUser,
    id: 'assignedUser',
    isSortable: true,
    header: 'Assigned User',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row.taskType,
    id: 'taskType',
    isSortable: true,
    header: 'task Type',
    cell: (info: any) => info.getValue(),
  },
  {
    accessorFn: (row: any) => row.lastDate,
    id: 'lastDate',
    isSortable: true,
    header: 'last Date',
    cell: (info: any) => info.getValue(),
  },
];

export const filterData = [
  {
    title: 'Assignee',
    componentProps: {
      name: 'assignee',
      label: 'select',
      options: [{ value: 'value', label: 'label' }],
    },
  },
  {
    title: 'Task Status',
    componentProps: {
      name: 'taskStatus',
      label: 'select',
      options: [{ value: 'value', label: 'label' }],
    },
  },
  {
    title: 'Priority',
    componentProps: {
      name: 'priority',
      label: 'select',
      options: [{ value: 'value', label: 'label' }],
    },
  },
  {
    title: 'Due date',
    componentProps: {
      name: 'dueDate',
      label: 'select',
    },
  },
  {
    title: 'Queue',
    componentProps: {
      name: 'queue',
      label: 'select',
      options: [{ value: 'value', label: 'label' }],
    },
  },
];

export const drawerTasksData = [
  { title: 'Task Name' },
  { title: 'Task Status' },
  { title: 'Linked Company' },
  { title: 'Assigned User' },
  { title: 'Task Type' },
  { title: 'Last Date' },
];
