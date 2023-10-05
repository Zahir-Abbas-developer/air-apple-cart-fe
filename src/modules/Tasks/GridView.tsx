import { Box, Checkbox, Grid, Typography } from '@mui/material';
import React from 'react';
import { uuid } from 'uuidv4';

const GridView = ({
  title,
  data,
  pendingData,
  inprogressData,
  completedData,
}: any) => {
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
      <Typography sx={{ ...styles.cardSubHead, color: '#6B7280' }}>
        {label}
      </Typography>
      <Typography
        sx={{ ...styles.cardSubHead2, color: changeStatusColor && color }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const CustomGridWithCardContent = ({ title, data }: any) => {
  return (
    <Grid item md={3} key={uuid()}>
      <Box sx={styles.cardContainer}>
        <Box sx={styles.cardTitle}>{title}</Box>
        <Box sx={styles.cardWrapper}>
          {data.map((obj: any) => (
            <Box sx={styles.cardContent} key={uuid()}>
              <Box
                display={'flex'}
                alignItems={'flex-end'}
                justifyContent={'space-between'}
              >
                <Box>
                  <Typography sx={styles.cardHead}>{obj.taskName}</Typography>
                  <Typography sx={styles.cardSubHead}>
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

const styles = {
  cardContainer: {
    borderRadius: '10px',
    border: '1px solid #E5E7EB',
  },
  cardTitle: {
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#1F305D',
    boxShadow: '0px 3px 6px 0px #6B72801A',
    textTransform: 'capitalize',
  },
  cardWrapper: {
    padding: '16px',
    backgroundColor: '#F9FAFB',
  },
  cardContent: {
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    padding: '10px',
    backgroundColor: '#fff',
    '&:not(:last-child)': {
      marginBottom: '16px',
    },
  },
  cardHead: {
    fontWeight: 700,
    fontSize: '14px',
    color: '#374151',
    textTransform: 'capitalize',
  },
  cardSubHead: {
    fontWeight: 400,
    fontSize: '12px',
    color: '#9CA3AF',
    marginTop: '3px',
    textTransform: 'capitalize',
  },
  cardSubHead2: {
    color: '#1F305D',
    fontWeight: 600,
    fontSize: '12px',
    textTransform: 'capitalize',
  },
};
