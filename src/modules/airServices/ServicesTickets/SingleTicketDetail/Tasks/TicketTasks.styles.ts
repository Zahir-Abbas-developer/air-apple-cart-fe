const TO_DO = 'To do';
const IN_PROGRESS = 'In-Progress';

export const taskStyles: any = {
  headContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headText: { color: 'slateBlue.main', fontWeight: 500 },
  actionBtn: {
    px: '18px',
    color: 'custom.main',
    ':hover': { bgcolor: 'common.white' },
    border: '1px solid #D1D5DB',
    display: 'flex',
    alignItems: 'center',
    justifyContents: 'center',
  },
  addTaskBtn: {
    px: '18px',
    bgcolor: 'primary.main',
    color: 'common.white',
    ':hover': { bgcolor: 'primary.main' },
  },
  btnContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: { sm: 'flex-end', xs: 'center' },
  },
  detailDrawerTitel: { color: 'grey.600', fontWeight: 600 },
  detailDrawerWorspace: {
    bgcolor: '#1d4289',
    color: 'common.white',
    borderRadius: '5px',
    padding: '2px 8px',
    marginRight: '8px',
  },
  detailDrawerImg: {
    height: '16px',
    width: '16px',
    marginRight: '8px',
  },
  detailDrawerGridCenter: { display: 'flex', alignItems: 'center' },
};

export const taskDetailStyle = (taskDetailStatus: any) => [
  {
    position: 'absolute',
    top: 16,
    right: '4.5rem',
    border: `1px solid ${
      taskDetailStatus === TO_DO
        ? '#38CAB5'
        : taskDetailStatus === IN_PROGRESS
        ? '#0AADC7'
        : '#FF4A4A'
    }`,
    bgcolor:
      taskDetailStatus === TO_DO
        ? '#EBFAF8'
        : taskDetailStatus === IN_PROGRESS
        ? '#E6F7F9'
        : '#FFEDED',
    color:
      taskDetailStatus === TO_DO
        ? '#38CAB5'
        : taskDetailStatus === IN_PROGRESS
        ? '#0AADC7'
        : '#FF4A4A',
    padding: '0px 12px',
    height: 'fit-content',
    fontSize: '14px !important',
    fontWeight: 500,
  },
];
export const valStyle = (drawerStatusVal: any) => [
  {
    position: 'absolute',
    top: 16,
    right: '4.5rem',
    border: `1px solid ${
      drawerStatusVal === TO_DO
        ? '#38CAB5'
        : drawerStatusVal === IN_PROGRESS
        ? '#0AADC7'
        : '#FF4A4A'
    }`,
    bgcolor:
      drawerStatusVal === TO_DO
        ? '#EBFAF8'
        : drawerStatusVal === IN_PROGRESS
        ? '#E6F7F9'
        : '#FFEDED',
    color:
      drawerStatusVal === TO_DO
        ? '#38CAB5'
        : drawerStatusVal === IN_PROGRESS
        ? '#0AADC7'
        : '#FF4A4A',
    padding: '0px 12px',
    height: 'fit-content',
    fontSize: '14px !important',
    fontWeight: 500,
  },
];
export const statusOptionStyle = (statusOption: any) => [
  {
    border: `1px solid ${
      statusOption === TO_DO
        ? '#38CAB5'
        : statusOption === IN_PROGRESS
        ? '#0AADC7'
        : '#FF4A4A'
    }`,
    bgcolor:
      statusOption === TO_DO
        ? '#EBFAF8'
        : statusOption === IN_PROGRESS
        ? '#E6F7F9'
        : '#FFEDED',
    color:
      statusOption === TO_DO
        ? '#38CAB5'
        : statusOption === IN_PROGRESS
        ? '#0AADC7'
        : '#FF4A4A',
    width: 'fit-content',
    borderRadius: '4px',
    m: '10px',
    p: '2px 14px',
  },
];
