import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { TaskTableStyle } from './Tasks.Style';

const TaskTable = ({ data }: any) => {
  const tableHeader = [
    'task name',
    'task status',
    'linked company',
    'assigned user',
    'task type',
    'last date',
  ];
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell size="small" sx={TaskTableStyle.tableHead}>
              <Checkbox />
            </TableCell>
            {tableHeader.map((value) => (
              <TableCell size="small" sx={TaskTableStyle.tableHead} key={value}>
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((obj: any) => (
            <TableRow key={obj.id} sx={TaskTableStyle.tableBodyCell}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{obj.taskName}</TableCell>
              <TableCell>{obj.taskStatus}</TableCell>
              <TableCell>{obj.linkedCompany}</TableCell>
              <TableCell>{obj.assignedUser}</TableCell>
              <TableCell>{obj.taskType}</TableCell>
              <TableCell>{obj.lastDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
