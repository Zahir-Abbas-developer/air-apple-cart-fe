import { Grid } from '@mui/material';

import UserInfo from './UserInfo';
import AddDiscount from './AddDiscount';

const GenerateInvoice = () => {
  return (
    <Grid container>
      <Grid item lg={12}>
        <UserInfo />
        <AddDiscount />
      </Grid>
    </Grid>
  );
};
export default GenerateInvoice;
