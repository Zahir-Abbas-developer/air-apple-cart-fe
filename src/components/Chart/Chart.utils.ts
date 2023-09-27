import { ApexOptions } from 'apexcharts';
const XYLABELSTYLE = {
  style: {
    fontSize: '14px',
    fontFamily: 'Outfit, Arial, sans-serif',
    fontWeight: 400,
    colors: '#A0A3BD',
  },
};

export const baroptions = (type: any, options: ApexOptions): ApexOptions => ({
  chart: {
    type: type,
    toolbar: { show: false },
    zoom: {
      enabled: false,
    },
    ...options?.chart,
  },
  grid: {
    show: true,
    borderColor: '#D9DBE9',
    strokeDashArray: 7,
    ...options?.grid,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
    ...options?.plotOptions,
  },
  xaxis: {
    labels: {
      ...XYLABELSTYLE,
      ...options?.xaxis?.labels,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    ...options?.xaxis,
  },
  yaxis: {
    labels: {
      ...XYLABELSTYLE,
    },
    ...options?.yaxis,
  },
  fill: {
    opacity: 1,
    ...options?.fill,
  },
  dataLabels: {
    enabled: false,
    ...options?.dataLabels,
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff'],
    ...options?.stroke,
  },
  legend: {
    show: true,
    position: 'bottom',
    markers: {
      width: 12,
      height: 12,
      radius: 12,
      ...options?.legend?.markers,
    },
    ...options?.legend,
  },
  ...options,
});
