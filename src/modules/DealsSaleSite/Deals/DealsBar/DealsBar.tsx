import { DealsMenu, Umbrella } from '@/assets/icons';
import { Typography, Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DelasTable from '../DelasTable';

const DealsBar = () => {
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
          <Button variant="outlined" sx={{ gap: '8px' }}>
            <Umbrella /> Import
          </Button>
          <Button variant="contained" sx={{ gap: '8px' }}>
            {' '}
            <AddCircleIcon /> Create Deal
          </Button>
        </Box>
      </Box>
      <DelasTable />
    </>
  );
};

export default DealsBar;
