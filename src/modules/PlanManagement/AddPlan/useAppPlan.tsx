import { useState } from 'react';

// =======================================
import AddPlanForm from './Forms/AddPlanForm';
import PlanFeaturesForm from './Forms/PlanFeaturesForm';
import ModulesForm from './Forms/ModulesForm';

// =======================================
import { v4 as uuidv4 } from 'uuid';

// =====================================================================================================================
const useAddPlan = () => {
  const [addPlanFormValues, setAddPlanFormValues] = useState({});

  const AddPlanStepperData = [
    {
      key: uuidv4(),
      label: 'Plan Form',
      component: <AddPlanForm />,
      componentProps: { addPlanFormValues, setAddPlanFormValues },
    },
    {
      key: uuidv4(),
      label: 'Plan Features',
      component: <PlanFeaturesForm />,
      componentProps: { addPlanFormValues, setAddPlanFormValues },
    },
    {
      key: uuidv4(),
      label: 'Modules',
      component: <ModulesForm />,
      componentProps: { addPlanFormValues, setAddPlanFormValues },
    },
  ];

  return { addPlanFormValues, setAddPlanFormValues, AddPlanStepperData };
};

export default useAddPlan;
