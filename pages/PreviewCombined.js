import React, { PureComponent } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "style/scss/previewcombined.scss";

const options = {
  chart: {
    type: "spline"
  },
  title: {
    text: ""
  },
  subtitle: {
    text: ""
  },

  xAxis: {
    categories: ["01", "05", "09", "13", "17", "21", "26", "31"]
  },
  yAxis: {
    title: { text: "" },
    labels: {
      formatter() {
        return `${this.value}k`;
      }
    }
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false
      },
      lineWidth: 3
    }
  },

  series: [
    {
      name: "Last 7 days",
      data: [[47], [47.7], [45.5], [47.5], [45.5], [48], [46.5], [48.5]],
      // Linear gradient used as a color option
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0.1, "#8502a7"], // start
          [0.5, "#4e9cff"], // middle
          [0.8, "#3333ff"] // end
        ]
      }
    },
    {
      name: "Previous 7 days",
      data: [[45.5], [46.5], [45], [46.5], [44.5], [46.5], [45.4], [46]],
      dashStyle: "shortDash",
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0.1, "#8502a7"], // start
          [0.5, "#4e9cff"], // middle
          [0.8, "#3333ff"] // end
        ]
      }
    }
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          plotOptions: {
            series: {
              marker: { enabled: false }
            }
          }
        }
      }
    ]
  }
};

class PreviewCombined extends PureComponent {
  render() {
    return (
      <div className="preview_combined_container">
        <div className="empty_space" />
        <div className="chart_container" />
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div className="empty_space" />
      </div>
    );
  }
}

export default PreviewCombined;
