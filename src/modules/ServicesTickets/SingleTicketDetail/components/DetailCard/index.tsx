import { ViewDetailDocumentTextIcon } from '@/assets/icons';
import { AvatarImage } from '@/assets/images';
import { Box, Chip, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export const DetailCard = () => {
  return (
    <Box
      sx={{
        border: '2px solid #EAECF0',
        borderRadius: '.5rem',
        paddingY: '1rem',
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={3.9}
          padding={1.5}
          borderRight={{ md: '1px solid #EAECF0' }}
          borderBottom={{ xs: '1px solid #EAECF0', md: 'none' }}
        >
          <Box>
            <Box
              display={'flex'}
              flexWrap={'wrap'}
              alignItems={'center'}
              gap={1}
              marginBottom={1.5}
            >
              <Image src={AvatarImage} alt="Avatar" />
              <div>
                <Typography variant="body2" fontWeight={600}>
                  {' '}
                  Sophie Baxter
                </Typography>
                {/* <Typography variant="caption">Created On</Typography> */}
              </div>
            </Box>
            <Box
              display={'flex'}
              flexWrap={'wrap'}
              justifyContent={'space-between'}
              marginBottom={1}
            >
              <Typography variant="body2" fontWeight={600}>
                Email
              </Typography>
              <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
                sophiebaxterl@gmail.com
              </Typography>
            </Box>
            <Box
              display={'flex'}
              flexWrap={'wrap'}
              justifyContent={'space-between'}
              marginBottom={1}
            >
              <Typography variant="body2" fontWeight={600}>
                Created on:
              </Typography>
              <Typography variant="body2">Sun, 5 Mar 9:41 PM</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={3.9}
          padding={1.5}
          borderRight={{ md: '1px solid #EAECF0' }}
          borderBottom={{ xs: '1px solid #EAECF0', md: 'none' }}
        >
          {/* <CloseOutlined style={{ float: 'right' }} /> */}
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            // justifyContent={'space-between'}
            gap={1}
            marginBottom={1}
          >
            <Typography variant="body2" fontWeight={600}>
              Description:
            </Typography>
            <Typography variant="body2" sx={{ flex: '1' }}>
              Hi Team, I have been unable to send any emails since this morning.
              What’s going on? Regards, Andrea
            </Typography>
          </Box>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            gap={1}
            // justifyContent={'space-between'}
            marginBottom={1}
          >
            <Typography variant="body2" fontWeight={600}>
              Attachments:
            </Typography>
            <Box display={'flex'} flexWrap={'wrap'} gap={0.5} marginBottom={1}>
              <ViewDetailDocumentTextIcon />
              <Typography variant="body2">file-mame-0.text</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3.9} padding={1.5}>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            marginBottom={1}
          >
            <Typography variant="body2" fontWeight={600}>
              Status
            </Typography>
            <Chip
              label={'Open'}
              variant="outlined"
              size="small"
              color="primary"
            />
            {/* <Typography variant="body2">email@service.com</Typography> */}
          </Box>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            marginBottom={1}
          >
            <Typography variant="body2" fontWeight={600}>
              Due by
            </Typography>
            <Typography variant="body2">Tue, 14 Mar 10:00 AM</Typography>
          </Box>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            marginBottom={1}
          >
            <Typography variant="body2" fontWeight={600}>
              Associated By:
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', textDecoration: 'underline' }}
            >
              Deals
            </Typography>
          </Box>
          {/* <Box
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            marginBottom={1}
          >
            <Typography variant="body2">Email</Typography>
            <Typography variant="body2">email@service.com</Typography>
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
};
