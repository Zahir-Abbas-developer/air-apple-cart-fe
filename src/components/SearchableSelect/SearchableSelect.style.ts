export const wrapperSearchDropdown = {
  width: '100%',
  position: 'absolute',
  left: '0',
  top: '50px',
  borderRadius: '8px',
  border: '1px solid #F3F4F6',
  background: '#fff',
  boxShadow:
    '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
};

export const textareaSearchDropdown = {
  '& div': {
    border: 'none',
    '&:hover fieldset': {
      borderColor: '#88DFD3 !important',
      boxShadow: '0px 0px 0px 3px #A0E5DB80',
    },
  },
  width: { lg: '440px', md: '440px', sm: '100%', xs: '100%' },
  '& input': {
    height: '44px',
    border: `none`,
    borderRadius: '8px',
    fontSize: '16px',
    padding: '0px 10px',
    color: 'black',
  },
};

export const SearchSelectStyles = {
  searchSelect: (theme: any) => {
    return {
      border: theme?.palette?.primary?.main,
      '& div': {
        border: 'none',
        '&:hover, &:focus fieldset': {
          outline: 'none',
          borderColor: '#88DFD3 !important',
          boxShadow: '0px 0px 0px 3px #A0E5DB80',
        },
      },
      width: { lg: '440px', md: '440px', sm: '100%', xs: '100%' },
      '& input': {
        height: '44px',
        border: `none`,
        borderRadius: '8px',
        fontSize: '16px',
        padding: '0px 10px',
        color: 'black',
      },
    };
  },
};
