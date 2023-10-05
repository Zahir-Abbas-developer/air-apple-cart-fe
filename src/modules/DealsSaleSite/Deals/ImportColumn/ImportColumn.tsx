import React, { useState } from 'react';
import CommonDrawer from '@/components/Drawer';
import { Box, Typography, useTheme } from '@mui/material';
import ImportMapColumnsDeal from './ImportMapColumnsDeal';

const ImportColumn = (props: any) => {
  const theme = useTheme();
  const { setIsImportDetails, IsImportDetails } = props;
  const [columnsSelect, setColumnsSelect] = useState(false);

  const handleImport = () => {
    alert('this is import function');
  };
  const handleNext = () => {
    setColumnsSelect(true);
  };
  return (
    <>
      <CommonDrawer
        isDrawerOpen={IsImportDetails}
        setIsDrawerOpen={setIsImportDetails}
        title="Import Deals"
        okText={columnsSelect ? 'Import' : 'Next'}
        isOk={true}
        submitHandler={columnsSelect ? handleImport : handleNext}
      >
        <Typography
          sx={{ color: '#374151', marginTop: '16px', marginBottom: '8px' }}
        >
          {columnsSelect
            ? 'Map Columns from your file to the right CRM fields. Your 5 unmapped columns won’t be imported'
            : 'Uploaded file must have these columns'}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            background: '#374151',
            borderRadius: '30px',
            padding: '2px',
            width: '26%',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Step {columnsSelect ? '2' : '1'} of 2
        </Typography>
        {!columnsSelect ? (
          <Box>
            <Typography
              sx={{ color: '#374151', marginTop: '16px', marginBottom: '8px' }}
            ></Typography>
            <ul
              style={{
                paddingLeft: '30px',
                color: theme?.palette?.grey[500_12],
              }}
            >
              <li>Name</li>
              <li>Deal Value</li>
            </ul>
            <Typography sx={{ color: '#4B5563', marginY: '8px' }}>
              Import Deals
            </Typography>
          </Box>
        ) : (
          <ImportMapColumnsDeal />
        )}
      </CommonDrawer>
    </>
  );
};

export default ImportColumn;
