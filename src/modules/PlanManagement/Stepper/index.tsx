import React from 'react';

// ====================================
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import { Stack, Stepper, Step, StepLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// ==================================================================================================================================
const theme = createTheme({
  components: {
    MuiStepConnector: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            '& .MuiStepConnector-line': {
              borderTopWidth: 2,
              borderStyle: 'solid',
              borderColor: 'green',
            },
          },
          '&.Mui-completed': {
            '& .MuiStepConnector-line': {
              borderTopWidth: 2,
              borderStyle: 'solid',
              borderColor: '#784af4',
            },
          },
          alternativeLabel: {
            top: 10,
            left: 'calc(-50% + 16px)',
            right: 'calc(50% + 16px)',
          },
        },
      },
    },
  },
});

const CustomStepper = styled(Stepper)(() => ({
  '.MuiStepConnector-line': {
    border: '2px solid red',
    borderRadius: '1px',
  },
}));

const QontoStepIconRoot: React.FC<{
  active?: boolean;
  completed: boolean;
  className: string;
}> = ({ completed, className }) => (
  <div className={className}>
    {completed ? (
      <Check style={{ color: '#784af4', zIndex: 1, fontSize: 18 }} />
    ) : (
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'currentColor',
          marginTop: '0.5rem',
        }}
      />
    )}
  </div>
);

interface QontoStepIconProps {
  active: boolean;
  completed: boolean;
  className: string;
}

function QontoStepIcon(props: QontoStepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot
      active={active}
      completed={completed}
      className={className}
    />
  );
}

export default function CustomizedSteppers() {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ width: '100%' }} spacing={4}>
        <CustomStepper alternativeLabel activeStep={1}>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon} />
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon} />
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon} />
          </Step>
        </CustomStepper>
      </Stack>
    </ThemeProvider>
  );
}
