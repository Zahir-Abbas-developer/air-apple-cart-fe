import { useState, useMemo } from 'react';
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
import { MenuItem, Select } from '@mui/material';

interface Data {
  invoiceAmount: string;
  linkedQuote: string;
  status: number;
  invoiceName: string;
  createdBy: string;
  createdDate: string;
}

function createData(
  invoiceName: string,
  invoiceAmount: string,
  status: number,
  linkedQuote: string,
  createdBy: string,
  createdDate: string,
): Data {
  return {
    invoiceName,
    invoiceAmount,
    status,
    linkedQuote,
    createdBy,
    createdDate,
  };
}

const rows = [
  createData(
    'Iphone Import from UK',
    '£20',
    3.7,
    'Iphone import from Uk',
    'Azeem Aslam',
    '23/09/2023',
  ),
  createData(
    'Laptop purchase deal',
    '£20',
    3.7,
    'Iphone import from Uk',
    'Azeem Aslam',
    '23/09/2023',
  ),
  createData(
    'Mobile accessories',
    '£20',
    3.7,
    'Iphone import from Uk',
    'Azeem Aslam',
    '23/09/2023',
  ),
  createData(
    'Laptop accessories',
    '£20',
    3.7,
    'Iphone import from Uk',
    'Azeem Aslam',
    '23/09/2023',
  ),
  createData(
    'Computer accessories',
    '£20',
    3.7,
    'Iphone import from Uk',
    'Azeem Aslam',
    '23/09/2023',
  ),
  createData(
    'Tablet accessories',
    '£20',
    3.7,
    'Iphone import from Uk',
    'Azeem Aslam',
    '23/09/2023',
  ),
  createData(
    'Electrical accessories',
    '£20',
    3.7,
    'Iphone import from Uk',
    'Azeem Aslam',
    '23/09/2023',
  ),
  createData(
    'Electronic accessories',
    '£20',
    3.7,
    'Iphone import from Uk',
    'Azeem Aslam',
    '23/09/2023',
  ),
  createData(
    'Mac accessories',
    '£20',
    3.7,
    'Iphone import from Uk',
    'Azeem Aslam',
    '23/09/2023',
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'invoiceName',
    numeric: false,
    disablePadding: true,
    label: 'Invoice Name',
  },
  {
    id: 'invoiceAmount',
    numeric: true,
    disablePadding: false,
    label: 'Invoice Amount',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'linkedQuote',
    numeric: true,
    disablePadding: false,
    label: 'Linked Quote',
  },
  {
    id: 'createdBy',
    numeric: true,
    disablePadding: false,
    label: 'Created By',
  },
  {
    id: 'createdDate',
    numeric: true,
    disablePadding: false,
    label: 'Created Date',
  },
];

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
        {headCells.map((headCell) => (
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

export default function InvoicesTable(props: any) {
  const { selected, setSelected } = props;
  const [order, setOrder] = useState<Order>('asc');
  const [selectedOptions, setSelectedOptions] = useState('');
  const [orderBy, setOrderBy] = useState<keyof Data>('invoiceAmount');
  // const [selected, setSelected] = useState<readonly string[]>([]);
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
      const newSelected = rows.map((n) => n.invoiceName);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

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
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.invoiceName);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.invoiceName)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.invoiceName}
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
                      {row.invoiceName}
                    </TableCell>
                    <TableCell align="right">{row.invoiceAmount}</TableCell>
                    <TableCell align="right">
                      <Select
                        value={selectedOptions}
                        onChange={(event: any) =>
                          setSelectedOptions(event.target.value)
                        }
                      >
                        <MenuItem value="">Select an option</MenuItem>
                        <MenuItem value="Option 1">Option 1</MenuItem>
                        <MenuItem value="Option 2">Option 2</MenuItem>
                        <MenuItem value="Option 3">Option 3</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="right">{row.linkedQuote}</TableCell>
                    <TableCell align="right">{row.createdBy}</TableCell>
                    <TableCell align="right">{row.createdDate}</TableCell>
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
