import { RHFDatePicker, RHFSelect } from '@/components/ReactHookForm';
import * as Yup from 'yup';
export const jobApplicationValidationSchema = Yup.object().shape({
  candidates: Yup.string().trim().required('Field is Required'),
  applyDate: Yup.string().trim().required('Field is Required'),
  status: Yup.string().trim().required('Field is Required'),
});

export const jobApplicationDefaultValues = {
  candidates: '',
  applyDate: '',
  status: '',
};

export const jobApplicationFiltersDataArray = [
  {
    componentProps: {
      name: 'candidates',
      label: 'Candidates',
      select: true,
    },
    options: [
      { value: 'John Doe', label: 'John Doe' },
      { value: 'Andrew', label: 'Andrew' },
      { value: 'Richard robertson', label: 'Richard robertson' },
      { value: 'Franksten', label: 'Franksten' },
    ],
    component: RHFSelect,
    md: 12,
  },
  {
    componentProps: {
      name: 'applyDate',
      label: 'Apply Date',
      fullWidth: true,
    },
    component: RHFDatePicker,
    md: 12,
  },
  {
    componentProps: {
      name: 'status',
      label: 'Status',
      select: true,
    },
    options: [
      { value: 'Pending', label: 'Pending' },
      { value: 'Short listed', labelShort: 'listed' },
      { value: 'Interview Schedule', label: 'Interview Scheduled' },
      { value: 'Interviewed', label: 'Interviewed' },
    ],
    component: RHFSelect,
    md: 12,
  },
];
