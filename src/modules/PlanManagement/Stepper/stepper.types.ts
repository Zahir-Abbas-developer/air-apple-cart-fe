export interface IStep {
  key: string;
  label: string;
  component: React.ReactNode;
}
export interface AppHorizontalStepperProps {
  stepsArray: IStep[];
  addPlanFormValues: any;
  setAddPlanFormValues: React.Dispatch<React.SetStateAction<any>>;
  disableNextButton?: boolean;
}
