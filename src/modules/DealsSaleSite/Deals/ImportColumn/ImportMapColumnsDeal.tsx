import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import checkIcon from '@/assets/images/shared/checkIcon.png';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const ImportMapColumnsDeal = () => {
  // const importMap = [
  //   {
  //     title: "Column1",
  //     field: 'column1',
  //     mapped: false,
  //     isValid: false,
  //   },
  //   {
  //     title: "Column2",
  //     field: 'column2',
  //     mapped: false,
  //     isValid: false,
  //   },
  // ];

  // const [mappings, setMappings] = useState(importMap);

  // const handleMapping = (crmField: any, value: string, index: any) => {
  //   const updatedMappings = [...mappings];
  //   updatedMappings[index].field = crmField;
  //   updatedMappings[index].mapped = crmField.trim() !== '';
  //   updatedMappings[index].isValid = crmField.trim() !== '';
  //   setMappings(updatedMappings);
  // };

  // const handleSubmit = () => {
  //   const allMappingsValid = mappings.every(mapping => mapping.isValid);

  //   if (allMappingsValid) {
  //     console.log('Mappings:', mappings);
  //   } else {
  //     console.log('Some mappings are invalid. Please fix them.');
  //   }
  // };

  const [fieldsValue, setFieldsValue] = useState<any>({
    dealName: '',
    dealValue: '',
    dealStage: '',
    dealPipline: '',
  });

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFieldsValue({ ...fieldsValue, [name]: value });
  };

  const tableData = [
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'dealName',
        label: 'Deal Name',
      },
      options: [
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'dealValue',
        label: 'Deal Value',
      },
      options: [
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'dealStage',
        label: 'Deal Stage',
      },
      options: [
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'dealPipline',
        label: 'Deal Pipline',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'owner',
        label: 'Sales Owner',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'type',
        label: 'Choose Value',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'expectedCloseDate',
        label: 'Expected Close Date',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'closeDate',
        label: 'Choose Value',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'paymentStatus',
        label: 'Payment Status',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'probability',
        label: 'Probability',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'accountName',
        label: 'Choose Value',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'emailAddress',
        label: 'Choose Value',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
    {
      fileColumn: 'field column',
      selectProps: {
        name: 'source',
        label: 'Choose Value',
      },
      options: [
        { head: 'head' },
        { label: 'label 1', value: 'value1' },
        { label: 'label 2', value: 'value2' },
      ],
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>File Columns</th>
            <th>CRM Fields</th>
            <th>Mapped</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, i) => (
            <tr key={uuidv4()}>
              <td style={{ padding: '10px' }}>{data.fileColumn}</td>
              <td colSpan={2} style={{ padding: '10px' }}>
                <CustomSelect
                  index={i}
                  handleChange={handleChange}
                  value={fieldsValue[data.selectProps.name]}
                  options={data.options}
                  {...data.selectProps}
                />
              </td>
              <td>
                <Image
                  src={checkIcon}
                  alt={'icon' + i}
                  style={{
                    opacity: fieldsValue[data.selectProps.name] ? 1 : 0.7,
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImportMapColumnsDeal;

const CustomSelect = ({
  handleChange,
  value,
  options,
  index,
  ...rest
}: any) => {
  return (
    <FormControl fullWidth>
      <InputLabel
        sx={{
          transform: 'translate(14px, 8px) scale(1) !important',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -8px) scale(1) !important',
            fontSize: '12px',
          },
        }}
        id={'select-label' + index}
      >
        {rest.label}
      </InputLabel>
      <Select
        size="small"
        labelId={'select-label' + index}
        id={'select' + index}
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {options.map((option: any) =>
          option.head ? (
            <ListSubheader key={option.head}>{option.head}</ListSubheader>
          ) : (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ),
        )}
      </Select>
    </FormControl>
  );
};
