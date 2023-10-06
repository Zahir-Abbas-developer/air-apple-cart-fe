import React from 'react';
import { Box, Checkbox, Grid, Typography } from '@mui/material';
import { uuid } from 'uuidv4';
import { gridViewStyles } from './Tasks.Style';

const GridView = ({
  title,
  data,
  pendingData,
  inprogressData,
  completedData,
}: any) => {
  // const theme = useTheme();
  return (
    <Grid container spacing={3}>
      <CustomGridWithCardContent title={title} data={data} />
      {title === 'All' && (
        <>
          <CustomGridWithCardContent title={'pending'} data={pendingData} />
          <CustomGridWithCardContent
            title={'inprogress'}
            data={inprogressData}
          />
          <CustomGridWithCardContent
            title={'comppleted'}
            data={completedData}
          />
        </>
      )}
    </Grid>
  );
};

export default GridView;

const CustomBox = ({ label, value, changeStatusColor }: any) => {
  let color: string | any;
  switch (value) {
    case 'inprogress':
      color = '#FFC20E';
      break;
    case 'pending':
      color = '#FF4A4A';
      break;
    case 'completed':
      color = '#47B263';
      break;
    default:
      color = '#';
      break;
  }
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      mt={'8px'}
    >
      <Typography sx={{ ...gridViewStyles.cardSubHead, color: '#6B7280' }}>
        {label}
      </Typography>
      <Typography
        sx={{
          ...gridViewStyles.cardSubHead2,
          color: changeStatusColor && color,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const CustomGridWithCardContent = ({ title, data }: any) => {
  return (
    <Grid item md={3} key={uuid()}>
      <Box sx={gridViewStyles.cardContainer}>
        <Box sx={gridViewStyles.cardTitle}>{title}</Box>
        <Box sx={gridViewStyles.cardWrapper}>
          {data.map((obj: any) => (
            <Box sx={gridViewStyles.cardContent} key={uuid()}>
              <Box
                display={'flex'}
                alignItems={'flex-end'}
                justifyContent={'space-between'}
              >
                <Box>
                  <Typography sx={gridViewStyles.cardHead}>
                    {obj.taskName}
                  </Typography>
                  <Typography sx={gridViewStyles.cardSubHead}>
                    Last Date: {obj.lastDate}
                  </Typography>
                </Box>
                <Checkbox />
              </Box>

              <CustomBox label={'Linked Company'} value={obj.linkedCompany} />
              <CustomBox label={'Assigned User'} value={obj.assignedUser} />
              <CustomBox
                label={'Task Status'}
                value={obj.taskStatus}
                changeStatusColor
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};
