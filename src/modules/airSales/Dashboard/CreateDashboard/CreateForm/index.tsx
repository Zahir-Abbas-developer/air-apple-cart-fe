import React, { useState } from 'react';

import {
  Grid,
  Box,
  Autocomplete,
  TextField,
  Button,
  useTheme,
} from '@mui/material';

import { FormProvider, RHFRadioGroup } from '@/components/ReactHookForm';

import {
  dataArray,
  defaultValues,
  userAndTeams,
  validationSchema,
} from './CreateForm.data';

import { yupResolver } from '@hookform/resolvers/yup';

import { enqueueSnackbar } from 'notistack';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import DetailsView from '../DetailsView';

const CreateForm = ({ setIsShowCreateDashboardForm }: any) => {
  const [selectedDashoardWidget, setSelectedDashboardWidgets] = useState();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });
  const { handleSubmit, watch, reset } = methods;

  const onSubmit = async (values: any) => {
    setSelectedDashboardWidgets(values);
    enqueueSnackbar('Dashboard Created Successfully', {
      variant: 'success',
    });
    reset();
  };
  const theme = useTheme();
  const watchFields = watch(['accessDashboard']);

  return (
    <Box mt={1}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid sm={12} lg={6}>
            {dataArray?.map((item: any) => (
              <Grid
                item
                xs={12}
                md={item?.md}
                key={uuidv4()}
                style={{ paddingTop: '10px' }}
              >
                {item.componentProps.name === 'accessDashboard' ? (
                  <Box>
                    <item.component {...item.componentProps} size="small">
                      {item?.componentProps?.select &&
                        item?.options?.map((option: any) => (
                          <option value={option.value} key={uuidv4()}>
                            {option.label}
                          </option>
                        ))}
                    </item.component>
                    {watchFields[0] === 'Only special user and teams' && (
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={userAndTeams}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} label="users" />
                        )}
                      />
                    )}
                    {watchFields[0] === 'Everyone' && (
                      <RHFRadioGroup
                        options={['View and edit', 'View Only']}
                        name="viewAndEdit"
                        label=""
                      />
                    )}
                  </Box>
                ) : (
                  <item.component {...item.componentProps} size="small" />
                )}
              </Grid>
            ))}
          </Grid>
          <Grid sm={12} lg={6}>
            <DetailsView selectedDashoardWidget={selectedDashoardWidget} />
          </Grid>
          <Grid item sm={4}>
            <Button
              className="small"
              onClick={() => {
                setIsShowCreateDashboardForm(false);
              }}
              sx={{
                border: `1px solid ${theme?.palette?.custom?.dark}`,
                color: theme?.palette?.custom?.main,
                width: '112px',
              }}
            >
              Back
            </Button>
          </Grid>
          <Grid item sm={8} style={{ textAlign: 'end' }}>
            <Button
              className="small"
              sx={{
                border: `1px solid ${theme?.palette?.custom?.dark}`,
                color: theme?.palette?.custom?.main,
                width: '112px',
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className="small"
              type="submit"
              sx={{ marginLeft: '10px' }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};
export default CreateForm;
