import React from 'react';

import { Grid } from '@mui/material';

import CommonModal from '@/components/CommonModal';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider } from '@/components/ReactHookForm';
import { useForm } from 'react-hook-form';

import { v4 as uuidv4 } from 'uuid';
import {
  newsAndEventsFormDefaultValues,
  newsAndEventsFormFiltersDataArray,
  newsAndEventsFormValidationSchema,
} from './NewsAndEventsModal.data';
import { PostIcon } from '@/assets/icons';

const NewsAndEventsModal = ({
  isNewsAndEventAddModal,
  setIsNewsAndEventAddModal,
}: any) => {
  const methodsAddFaqs = useForm({
    resolver: yupResolver(newsAndEventsFormValidationSchema),
    defaultValues: newsAndEventsFormDefaultValues,
  });

  const onSubmit = () => {
    setIsNewsAndEventAddModal(false);
  };
  const { handleSubmit } = methodsAddFaqs;

  return (
    <CommonModal
      open={isNewsAndEventAddModal}
      handleClose={() => setIsNewsAndEventAddModal(false)}
      handleSubmit={() => setIsNewsAndEventAddModal(false)}
      title="Add News and Events"
      okText="add"
      footer={true}
      submitIcon={<PostIcon color="white" />}
    >
      <>
        <FormProvider
          methods={methodsAddFaqs}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={4}>
            {newsAndEventsFormFiltersDataArray?.map((item: any) => (
              <Grid item xs={12} md={item?.md} key={uuidv4()}>
                <item.component {...item.componentProps} size={'small'}>
                  {item?.componentProps?.select
                    ? item?.options?.map((option: any) => (
                        <option key={option?.value} value={option?.value}>
                          {option?.label}
                        </option>
                      ))
                    : null}
                </item.component>
              </Grid>
            ))}
          </Grid>
        </FormProvider>
      </>
    </CommonModal>
  );
};

export default NewsAndEventsModal;
