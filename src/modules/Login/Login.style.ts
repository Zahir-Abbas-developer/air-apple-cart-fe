import { styled } from '@mui/system';

export const AuthHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 20,
  width: '100%',
  zIndex: 1,
  padding: '0 7%',
  '& a': {
    backgroundColor: '#41CCB8',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85px',
    height: '44px',
  },
});

export const aTag = {
  textAlign: 'center',
  color: '#38CAB5',
  fontWeight: '600',
};

export const loginDashboard = {
  backgroundColor: 'rgb(245, 245, 245)',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const formStyling = {
  display: 'grid',
  border: '1.5px solid #E5E7EB',
  borderRadius: '8px',
  padding: '30px',
  marginTop: '30px',
};
