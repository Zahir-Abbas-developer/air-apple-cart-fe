export const sxStyles = {
  cardStyle: (spacing: any, disableBoxShadow: any) => {
    return {
      px: spacing ?? 2,
      boxShadow: disableBoxShadow ? 'none' : undefined,
    };
  },
  circleIconStyle: { ml: 'auto', mt: 0.5, cursor: 'pointer' },
};

export const styles = {
  tabRoot: (theme: any) => ({
    borderBottom: 1,
    borderColor: theme.palette.primary.lighter,
  }),

  tabIndicator: (theme: any) => ({
    sx: { background: theme.palette.primary.main },
  }),
};
