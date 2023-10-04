import React from 'react';

import { useTheme } from '@mui/material/styles';
import { Typography, Button, Grid, Box } from '@mui/material';

import InputField from '@/components/InputField';

import { Controller, FormProvider, useForm } from 'react-hook-form';

const AddPlanForm = () => {
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <FormProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '5px' }}>
                Product / Suite <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="product"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    field={{ ...field }}
                    name="product"
                    placeholder="Enter product"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    type="text"
                    hasError={!!errors?.product}
                  />
                )}
              />

              {errors?.product && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.product?.message}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '10px' }}>
                Plan Type <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="planType"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    field={{ ...field }}
                    name="planType"
                    placeholder="Enter plan type"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    hasError={!!errors?.planType}
                  />
                )}
              />
              {errors?.planType && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.planType?.message}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '10px' }}>
                Description <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    field={{ ...field }}
                    name="description"
                    placeholder="Enter description"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    hasError={!!errors?.description}
                  />
                )}
              />
              {errors?.description && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.description?.message}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '10px' }}>
                Default Users <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="defaultUsers"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    field={{ ...field }}
                    name="defaultUsers"
                    placeholder="Enter default users"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    hasError={!!errors?.defaultUsers}
                  />
                )}
              />
              {errors?.defaultUsers && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.defaultUsers?.message}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '10px' }}>
                Default Storage <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="defaultStorage"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    field={{ ...field }}
                    name="defaultStorage"
                    placeholder="Enter default storage"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    hasError={!!errors?.defaultStorage}
                  />
                )}
              />
              {errors?.defaultStorage && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.defaultStorage?.message}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '10px' }}>
                Plan Price <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="planPrice"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    field={{ ...field }}
                    name="planPrice"
                    placeholder="Enter plan price"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    hasError={!!errors?.planPrice}
                  />
                )}
              />
              {errors?.planPrice && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.planPrice?.message}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '10px' }}>
                Allow Additional Users <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="allowAdditionalUsers"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    field={{ ...field }}
                    name="allowAdditionalUsers"
                    placeholder="Enter allow additional users"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    hasError={!!errors?.allowAdditionalUsers}
                  />
                )}
              />
              {errors?.allowAdditionalUsers && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.allowAdditionalUsers?.message}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '10px' }}>
                Additional Price Per User<span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="additionalUserPrice"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    type="number"
                    field={{ ...field }}
                    name="additionalUserPrice"
                    placeholder="Enter addditional price per user"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    hasError={!!errors?.additionalUserPrice}
                  />
                )}
              />
              {errors?.additionalUserPrice && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.additionalUserPrice?.message}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '10px' }}>
                Allow Additional Storage <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="allowAdditionalSpace"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    field={{ ...field }}
                    name="allowAdditionalSpace"
                    placeholder="Enter allow additional space"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    hasError={!!errors?.allowAdditionalSpace}
                  />
                )}
              />
              {errors?.allowAdditionalSpace && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.allowAdditionalSpace?.message}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box margin={1}>
              <label style={{ marginBottom: '8px', marginTop: '10px' }}>
                Additional Storage Price (Per GB){' '}
                <span style={{ color: 'red' }}>*</span>
              </label>
              <Controller
                name="additionalStoragePrice"
                control={control}
                defaultValue=""
                rules={{ required: 'Required field' }}
                render={({ field }) => (
                  <InputField
                    field={{ ...field }}
                    name="additionalStoragePrice"
                    placeholder="Enter additional storage price"
                    width="100%"
                    height="23px"
                    autoComplete="off"
                    hasError={!!errors?.additionalStoragePrice}
                  />
                )}
              />
              {errors?.additionalStoragePrice && (
                <Typography
                  variant="body1"
                  sx={{ color: theme?.palette?.error?.main }}
                >
                  {' '}
                  {errors?.additionalStoragePrice?.message}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ marginY: '30px' }}>
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default AddPlanForm;
