import { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

interface Data {
  DealOwner: string;
  DealName: string;
  CloseDate: string;
  Amount: string;
  DealStage: string;
  DealPipeline: string;
}

const dealsTableData = [
  {
    id: '1',
    dealOwner: 'Olivia Rhye',
    email: 'olivia@gmail.com',
    dealName: 'Sharemydine',
    closeDate: '10/04/2023',
    amount: '£20',
    dealStage: 'New',
    dealPipeline: 'Sales Pipeline',
  },
  {
    id: '2',
    dealOwner: 'Olivia Rhye',
    email: 'olivia@gmail.com',
    dealName: 'Sharemydine',
    closeDate: '10/04/2023',
    amount: '£20',
    dealStage: 'New',
    dealPipeline: 'Sales Pipeline',
  },
  {
    id: '3',
    dealOwner: 'Olivia Rhye',
    email: 'olivia@gmail.com',
    dealName: 'Sharemydine',
    closeDate: '10/04/2023',
    amount: '£20',
    dealStage: 'New',
    dealPipeline: 'Sales Pipeline',
  },
  {
    id: '4',
    dealOwner: 'Olivia Rhye',
    email: 'olivia@gmail.com',
    dealName: 'Sharemydine',
    closeDate: '10/04/2023',
    amount: '£20',
    dealStage: 'New',
    dealPipeline: 'Sales Pipeline',
  },
  {
    id: '5',
    dealOwner: 'Olivia Rhye',
    email: 'olivia@gmail.com',
    dealName: 'Sharemydine',
    closeDate: '10/04/2023',
    amount: '£20',
    dealStage: 'New',
    dealPipeline: 'Sales Pipeline',
  },
  {
    id: '5',
    dealOwner: 'Olivia Rhye',
    email: 'olivia@gmail.com',
    dealName: 'Sharemydine',
    closeDate: '10/04/2023',
    amount: '£20',
    dealStage: 'New',
    dealPipeline: 'Sales Pipeline',
  },
];

type Order = 'asc' | 'desc';

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {dealsTableData.map((headCell: any) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function DelasTable() {
  const [order, setOrder] = useState<Order>('asc');

  const [orderBy, setOrderBy] = useState<keyof Data>('DealOwner');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = dealsTableData.map((n: any) => n.dealOwner);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - dealsTableData.length)
      : 0;

  // const visibleRows = useMemo(
  //   () =>
  //     stableSort(dealsTableData, getComparator(order, orderBy)).slice(
  //       page * rowsPerPage,
  //       page * rowsPerPage + rowsPerPage,
  //     ),
  //   [order, orderBy, page, rowsPerPage],
  // );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={dealsTableData.length}
            />
            <TableBody>
              {dealsTableData.map((row, index) => {
                const isItemSelected = isSelected(row.dealOwner);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={() => handleClick(row.dealOwner)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.dealOwner}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.dealOwner}
                      {row.email}
                    </TableCell>
                    <TableCell align="right">{row.dealName}</TableCell>
                    <TableCell align="right">{row.closeDate}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{row.dealStage}</TableCell>
                    <TableCell align="right">{row.dealPipeline}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dealsTableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
