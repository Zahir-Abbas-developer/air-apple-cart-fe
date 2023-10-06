export const filterStyles = {
  filterWrapper: {
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '15px',
  },
};

export const ActionBtnStyles = (theme: any, disableActionBtn: any) => ({
  '&.outlined_btn': {
    color: disableActionBtn ? theme.palette.custom.dark : '',
    borderColor: disableActionBtn ? theme.palette.custom.dark : '',
  },
});

export const gridViewStyles = {
  cardContainer: {
    borderRadius: '10px',
    border: '1px solid #E5E7EB',
  },
  cardTitle: {
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#1F305D',
    boxShadow: '0px 3px 6px 0px #6B72801A',
    textTransform: 'capitalize',
  },
  cardWrapper: {
    padding: '16px',
    backgroundColor: '#F9FAFB',
  },
  cardContent: {
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    padding: '10px',
    backgroundColor: '#fff',
    '&:not(:last-child)': {
      marginBottom: '16px',
    },
  },
  cardHead: {
    fontWeight: 700,
    fontSize: '14px',
    color: '#374151',
    textTransform: 'capitalize',
  },
  cardSubHead: {
    fontWeight: 400,
    fontSize: '12px',
    color: '#9CA3AF',
    marginTop: '3px',
    textTransform: 'capitalize',
  },
  cardSubHead2: {
    color: '#1F305D',
    fontWeight: 600,
    fontSize: '12px',
    textTransform: 'capitalize',
  },
};

export const headerStyles = (theme: any) => {
  return {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      flexWrap: 'wrap',
      gap: '15px',
    },
    title: {
      flex: 1,
      fontSize: '24px',
      fontWeight: 600,
      color: theme.palette.grey[800],
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '8px',
    },
  };
};

export const TaskTableStyle = {
  tableHead: {
    textTransform: 'capitalize',
    borderBottom: '1px solid #EAECF0',
    backgroundColor: '#F9FAFB',
  },
  tableBodyCell: {
    '& td': {
      textTransform: 'capitalize',
      borderBottom: '1px solid #EAECF0',
    },
  },
};
