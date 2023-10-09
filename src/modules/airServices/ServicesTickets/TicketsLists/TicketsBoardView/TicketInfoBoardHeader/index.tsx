import { Box, Typography, useTheme } from '@mui/material';
import { ticketInfoBoardHeaderColor } from './TicketInfoBoardHeader.data';

export default function TicketInfoBoardHeader({ title, total }: any) {
  const theme: any = useTheme();

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      borderBottom={`2px solid ${
        theme['palette'][`${ticketInfoBoardHeaderColor(title)}`]['main']
      }`}
      pb={0.5}
    >
      <Typography
        variant="h6"
        color={theme['palette'][`${ticketInfoBoardHeaderColor(title)}`]['main']}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        bgcolor={
          theme['palette'][`${ticketInfoBoardHeaderColor(title)}`]['main']
        }
        color={theme.palette.common.white}
        px={0.5}
        ml={1}
        borderRadius={1}
      >
        {total}
      </Typography>
    </Box>
  );
}
