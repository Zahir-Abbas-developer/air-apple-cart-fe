import { Box, Button, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import PublishIcon from '@mui/icons-material/Publish';
// import { ExportIcon } from '@/assets/icons';
import { TicketsExport } from '../TicketsExport';
export const TicketsListHeader = ({ setOpenCreateTicket }: any) => {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={'1rem'}
      >
        <Typography variant="h6">Ticket List - All Tickets</Typography>
        <Box
          gap={'1rem'}
          display={'flex'}
          // justifyContent={'space-evenly'}
          alignItems={'center'}
          flexWrap={'wrap'}
        >
          {/* <Button variant="outlined" size="large" startIcon={<ExportIcon />}>
            Export
          </Button> */}
          <TicketsExport />
          <Button
            variant="contained"
            size="large"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => setOpenCreateTicket?.()}
          >
            Create Ticket
          </Button>
        </Box>
      </Box>
    </>
  );
};
