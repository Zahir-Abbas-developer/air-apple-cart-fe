// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import { visuallyHidden } from '@mui/utils';
// import TanstackTable from '@/components/Tabel/TanstackTable';
// import CustomPagination from '@/components/CustomPagination';
// import { dealsColumns } from '../Delas.data';
// import { dealsTableData } from '@/mock/modules/DealsTableData';

// interface Data {
//   DealOwner: string;
//   DealName: string;
//   CloseDate: string;
//   Amount: string;
//   DealStage: string;
//   DealPipeline: string;
// }

// type Order = 'asc' | 'desc';

// interface EnhancedTableProps {
//   numSelected: number;
//   onRequestSort: (
//     event: React.MouseEvent<unknown>,
//     property: keyof Data,
//   ) => void;
//   onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   order: Order;
//   orderBy: string;
//   rowCount: number;
// }

// function EnhancedTableHead(props: EnhancedTableProps) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props;

//   const createSortHandler =
//     (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
//       onRequestSort(event, property);
//     };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {dealsTableData.map((headCell: any) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// export default function DelasTable() {
//   const [order, setOrder] = useState<Order>('asc');

//   const [orderBy, setOrderBy] = useState<keyof Data>('DealOwner');
//   const [selected, setSelected] = useState<readonly string[]>([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleRequestSort = (
//     event: React.MouseEvent<unknown>,
//     property: keyof Data,
//   ) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       const newSelected = dealsTableData.map((n: any) => n.dealOwner);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (name: string) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected: readonly string[] = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const isSelected = (name: string) => selected.indexOf(name) !== -1;

//   const emptyRows =
//     page > 0
//       ? Math.max(0, (1 + page) * rowsPerPage - dealsTableData.length)
//       : 0;

//   // const visibleRows = useMemo(
//   //   () =>
//   //     stableSort(dealsTableData, getComparator(order, orderBy)).slice(
//   //       page * rowsPerPage,
//   //       page * rowsPerPage + rowsPerPage,
//   //     ),
//   //   [order, orderBy, page, rowsPerPage],
//   // );

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <TanstackTable columns={dealsColumns} data={dealsTableData} />
//         <CustomPagination
//           count={1}
//           rowsPerPageOptions={[1, 2]}
//           entriePages={1}
//         />
//       </Paper>
//     </Box>
//   );
// }
