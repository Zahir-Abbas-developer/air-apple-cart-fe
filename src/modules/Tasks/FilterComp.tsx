import React, { useState } from 'react';
import DrawerComp from './Drawer';
import { FilterIcon } from '@/assets/images';
import { TextField, Typography, MenuItem, Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { uuid } from 'uuidv4';
import { filterData } from '@/mock/shared/tasks/filter-mock-data';
import dayjs from 'dayjs';

const FilterComp = () => {
  const [values, setValues] = useState<any>({
    assignee: '',
    taskStatus: '',
    priority: '',
    dueDate: dayjs(),
    queue: '',
  });

  const handleFilterChange = (event: any) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleDatePickerChange = (value: any) => {
    const newVal = dayjs(value);
    setValues({ ...values, dueDate: newVal });
  };

  return (
    <DrawerComp
      btnTitle="Filter"
      title="Filter"
      btnIcon={<FilterIcon />}
      key={'filter'}
    >
      {filterData.map((obj) => (
        <Box key={uuid()} mb={'32px'}>
          <Typography
            sx={{
              color: '#4B5563',
              fontSize: '16px',
              fontWeight: 500,
              mb: '8px',
            }}
          >
            {obj.title}
          </Typography>
          {obj.title === 'Due date' ? (
            <DatePickerComp
              value={values[obj.componentProps.name]}
              onChange={handleDatePickerChange}
              {...obj.componentProps}
            />
          ) : (
            <SelectComp
              key={uuid()}
              title={obj.title}
              value={values[obj.componentProps.name]}
              onChange={handleFilterChange}
              {...obj.componentProps}
            />
          )}
        </Box>
      ))}
    </DrawerComp>
  );
};

export default FilterComp;

const SelectComp = ({ ...rest }) => {
  return (
    <TextField
      size="small"
      fullWidth
      select
      value={rest?.value}
      SelectProps={{
        sx: {
          borderRadius: '8px',
          border: '1.5px solid #E5E7EB',
        },
      }}
      {...rest}
    >
      {rest.options
        ? rest.options.map((option: any) => (
            <MenuItem key={uuid()} value={option?.value}>
              {option?.label}
            </MenuItem>
          ))
        : null}
    </TextField>
  );
};

const DatePickerComp = ({ ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={rest?.value}
        sx={{
          '& .MuiInputBase-root': {
            borderRadius: '8px',
          },
        }}
        slotProps={{
          textField: {
            size: 'small',
            fullWidth: true,
            sx: {
              borderRadius: '8px',
            },
            name: rest?.name,
            label: rest?.label,
          },
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
};
