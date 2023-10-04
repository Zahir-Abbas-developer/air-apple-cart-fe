import React from 'react';

import Link from 'next/link';

import { Button, Typography, Box } from '@mui/material';

import AppAvatarGroup from '@/components/AvatarGroup/AvatarGroup';

import { avatarGroupMockData } from './Plan-Management-Data';

const PlanManagement = () => {
  return (
    <div>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        gap={1}
      >
        <Typography variant="h4" sx={styles.planManagementHeading}>
          Plan Management
        </Typography>

        <Box sx={styles.linkStyle}>
          <Link href={'/super-admin-plan-management/add-plan'}>
            <Button variant="contained" fullWidth>
              Add Plan
            </Button>
          </Link>
        </Box>
      </Box>

      <br />
      <br />
      <AppAvatarGroup data={avatarGroupMockData} />

      <Typography variant="h5">Table Here</Typography>
    </div>
  );
};

export default PlanManagement;

// ==================================================================================================================================
const styles = {
  planManagementHeading: {
    fontWeight: 600,
    lineHeight: '30px',
    letterSpacing: '-2%',
  },
  linkStyle: {
    '@media (max-width: 400px)': {
      width: '100%',
    },
  },
};
