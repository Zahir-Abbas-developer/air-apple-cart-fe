import * as Yup from 'yup';

export const addPlanFormDataValues = {
  category: '',
  product: '',
  planType: '',
  description: '',
  defaultUsers: '',
  defaultStorage: '',
  planPrice: '',
  allowAdditionalUsers: '',
  additionalPricePerUser: '',
  allowAdditionalStorage: '',
  additionalStoragePrice: '',
};

export const defaultAddPlanFormDataValues = (
  data: any = addPlanFormDataValues,
) => {
  const {
    category,
    product,
    planType,
    description,
    defaultUsers,
    defaultStorage,
    planPrice,
    allowAdditionalUsers,
    additionalPricePerUser,
    allowAdditionalStorage,
    additionalStoragePrice,
  } = data;
  return {
    category,
    product,
    planType,
    description,
    defaultUsers,
    defaultStorage,
    planPrice,
    allowAdditionalUsers,
    additionalPricePerUser,
    allowAdditionalStorage,
    additionalStoragePrice,
  };
};

export const gpDetailsInfoFormSchema: any = Yup.object().shape({
  category: Yup.string().required('Required field'),
  product: Yup.string().required('Required field'),
  planType: Yup.string().required('Required field'),
  description: Yup.string()
    .trim()
    .required('Required field')
    .min(1, 'Mininum 1 characters')
    .max(400, 'Maximum 400 characters'),
  defaultUsers: Yup.string()
    .trim()
    .required('Required field')
    .matches(/^[A-Za-z\s]*$/, 'only Aplhabets are allowed')
    .min(1, 'Mininum 1 characters')
    .max(30, 'Maximum 50 characters'),
  defaultStorage: Yup.string()
    .trim()
    .required('Required field')
    .min(1, 'Mininum 1 characters')
    .max(50, 'Maximum 50 characters'),
  planPrice: Yup.string()
    .matches(/^[0-9]*$/, 'must be a number')
    .required('Required field')
    .min(12, 'Mininum 1 characters')
    .max(12, 'max is 12'),
  allowAdditionalUsers: Yup.string().required('Required field'),
  additionalPricePerUser: Yup.string()
    .matches(/^[0-9]*$/, 'must be a number')
    .required('Required field')
    .min(12, 'Mininum 1 characters')
    .max(12, 'max is 12'),
  allowAdditionalStorage: Yup.string().required('Required field'),
  additionalStoragePrice: Yup.string()
    .matches(/^[0-9]*$/, 'must be a number')
    .required('Required field')
    .min(12, 'Mininum 1 characters')
    .max(12, 'max is 12'),
});

export const addPlanFormDataValuesFunction = (isFieldDisable = false) => [
  {
    id: 1,
    componentProps: {
      fullWidth: true,
      name: 'product',
      label: 'Product',
      select: true,
      // options: , // dropdown array here
      disabled: isFieldDisable,
    },
    gridLength: 6,
    // component: RHFSelect, // render select component here
  },
];
