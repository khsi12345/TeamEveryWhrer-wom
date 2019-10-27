import React, { PureComponent } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options1 = {
  chart: {
    type: 'spline',
    width: 800,
    height: 250,
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },

  xAxis: {
    categories: [],
  },
  yAxis: {
    title: { text: '' },
    labels: {
      formatter() {
        return `${this.value}k`;
      },
    },
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
      lineWidth: 3,
    },
  },

  series: [
    {
      name: '',
      data: [
        [5],
        [15],
        [20],
        [18],
        [23],
        [27],
        [25],
        [27],
        [30],
        [28],
        [23],
        [15],
        [17],
      ],
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0.1, '#ff6b00'], // start
          [0.5, '#ff6348'], // middle
          [0.8, '#fc4237'], // end
        ],
      },
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          plotOptions: {
            series: {
              marker: { enabled: false },
            },
          },
        },
      },
    ],
  },
};

const options2 = {
  chart: {
    type: 'spline',
    width: 800,
    height: 250,
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },

  xAxis: {
    categories: [],
  },
  yAxis: {
    title: { text: '' },
    labels: {
      formatter() {
        return `${this.value}k`;
      },
    },
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
      lineWidth: 3,
    },
  },

  series: [
    {
      name: '',
      data: [
        [5],
        [15],
        [20],
        [18],
        [23],
        [27],
        [25],
        [27],
        [30],
        [28],
        [23],
        [15],
        [17],
      ],
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0.1, '#fc4237'], // start
          [0.5, '#ad0132'], // middle
          [0.8, '#ff4757'], // end
        ],
      },
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          plotOptions: {
            series: {
              marker: { enabled: false },
            },
          },
        },
      },
    ],
  },
};

const options3 = {
  chart: {
    type: 'spline',
    width: 800,
    height: 250,
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },

  xAxis: {
    categories: [],
  },
  yAxis: {
    title: { text: '' },
    labels: {
      formatter() {
        return `${this.value}k`;
      },
    },
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
      lineWidth: 3,
    },
  },

  series: [
    {
      name: '',
      data: [
        [5],
        [15],
        [20],
        [18],
        [23],
        [27],
        [25],
        [27],
        [30],
        [28],
        [23],
        [15],
        [17],
      ],
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0.1, '#8502a7'], // start
          [0.5, '#4e9cff'], // middle
          [0.8, '#3333ff'], // end
        ],
      },
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          plotOptions: {
            series: {
              marker: { enabled: false },
            },
          },
        },
      },
    ],
  },
};

const options4 = {
  chart: {
    type: 'spline',
    width: 800,
    height: 250,
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },

  xAxis: {
    categories: [],
  },
  yAxis: {
    title: { text: '' },
    labels: {
      formatter() {
        return `${this.value}k`;
      },
    },
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
      lineWidth: 3,
    },
  },

  series: [
    {
      name: '',
      data: [
        [5],
        [15],
        [20],
        [18],
        [23],
        [27],
        [25],
        [27],
        [30],
        [28],
        [23],
        [15],
        [17],
      ],
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0.1, '#00b3e3'], // start
          [0.5, '#2ed573'], // middle
          [0.8, '#94d60a'], // end
        ],
      },
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          plotOptions: {
            series: {
              marker: { enabled: false },
            },
          },
        },
      },
    ],
  },
};

const options5 = {
  chart: {
    type: 'spline',
    width: 800,
    height: 250,
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },

  xAxis: {
    categories: [],
  },
  yAxis: {
    title: { text: '' },
    labels: {
      formatter() {
        return `${this.value}k`;
      },
    },
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
      lineWidth: 3,
    },
  },

  series: [
    {
      name: '',
      data: [
        [5],
        [15],
        [20],
        [18],
        [23],
        [27],
        [25],
        [27],
        [30],
        [28],
        [23],
        [15],
        [17],
      ],
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0.1, '#ff6b00'], // start
          [0.5, '#ffa502'], // middle
          [0.8, '#fdd700'], // end
        ],
      },
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          plotOptions: {
            series: {
              marker: { enabled: false },
            },
          },
        },
      },
    ],
  },
};

class DiscoverGraphCollection extends PureComponent {
  render() {
    return (
      <>
        <div className="empty_space" />
        <HighchartsReact highcharts={Highcharts} options={options1} />
        <HighchartsReact highcharts={Highcharts} options={options2} />
        <HighchartsReact highcharts={Highcharts} options={options3} />
        <HighchartsReact highcharts={Highcharts} options={options4} />
        <HighchartsReact highcharts={Highcharts} options={options5} />
      </>
    );
  }
}

export default DiscoverGraphCollection;
