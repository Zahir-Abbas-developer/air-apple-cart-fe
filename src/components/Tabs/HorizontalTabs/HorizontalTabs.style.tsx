export const styles = {
  cardStyle: (spacing: any, disableBoxShadow: any) => {
    return {
      px: spacing ?? 2,
      boxShadow: disableBoxShadow ? 'none' : undefined,
    };
  },
  circleIconStyle: { ml: 'auto', mt: 0.5, cursor: 'pointer' },
  tabRoot: (theme: any) => ({
    borderBottom: 1,
    borderColor: theme.palette.primary.lighter,
  }),

  tabIndicator: (theme: any) => ({
    sx: { background: theme.palette.primary.main },
  }),
  tabsStyle: (theme: any) => ({
    paddingX: 2,
    borderRadius: '.5rem',
    '&.Mui-selected ': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.lighter,
    },
  }),
};
