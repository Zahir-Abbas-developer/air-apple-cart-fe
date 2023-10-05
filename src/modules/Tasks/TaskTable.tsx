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
            <TableCell size="small" sx={style.tableHead}>
              <Checkbox />
            </TableCell>
            {tableHeader.map((value) => (
              <TableCell size="small" sx={style.tableHead} key={value}>
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((obj: any) => (
            <TableRow key={obj.id} sx={style.tableBodyCell}>
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

const style = {
  tableHead: {
    textTransform: 'capitalize',
    borderBottom: '1px solid #EAECF0',
    backgroundColor: '#F9FAFB',
  },
  tableBodyCell: {
    '& td': {
      textTransform: 'capitalize',
      borderBottom: '1px solid #EAECF0',
    },
  },
};
