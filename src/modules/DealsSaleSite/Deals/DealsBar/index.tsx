import React, { useState } from 'react';
import { DealsMenu, Umbrella } from '@/assets/icons';
import { Typography, Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CustomizeColumns from '../ImportColumn/ImportColumn';
import CreateDeals from '../CreateDeal';

const DealsBar = () => {
  const [IsImportDetails, setIsImportDetails] = useState(false);
  const [editorValue, setEditorValue] = useState<string>('');
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <DealsMenu /> Deals
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <Button
            onClick={() => setIsImportDetails(true)}
            variant="outlined"
            sx={{ gap: '8px' }}
          >
            <Umbrella /> Import
          </Button>

          <Button
            onClick={() => setIsCreateOpen(true)}
            variant="contained"
            sx={{ gap: '8px' }}
          >
            {' '}
            <AddCircleIcon /> Create Deal
          </Button>
        </Box>
      </Box>
      <CustomizeColumns
        setEditorValue={setEditorValue}
        editorValue={editorValue}
        setIsImportDetails={setIsImportDetails}
        IsImportDetails={IsImportDetails}
      />
      <CreateDeals
        setIsCreateOpen={setIsCreateOpen}
        isCreateOpen={isCreateOpen}
      />
    </>
  );
};

export default DealsBar;
