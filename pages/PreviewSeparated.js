import React, { PureComponent } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "style/scss/previewseparated.scss";

const options = {
  chart: {
    type: "area"
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
    title: {
      text: ""
    },
    labels: {
      formatter() {
        return `${this.value}k`;
      }
    }
  },
  tooltip: {
    pointFormat:
      "{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}"
  },
  plotOptions: {
    area: {
      // stacking normal은 graph area color가 겹치지 않게 쌓이도록 하는 역할
      stacking: "normal",
      pointStart: 1940,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  series: [
    {
      name: "New Shoes",
      data: [14, 24, 11, 26, 25, 30, 24, 20],
      color: "#ffbe76"
    },
    {
      name: "Brand Only",
      data: [7, 18, 19, 24, 22, 28, 23, 18],
      color: "#ff7979"
    },

    {
      name: "Test Campaign",
      data: [3.5, 13, 16, 12, 8.5, 16, 8, 5],
      color: "#70a1ff"
    },
    {
      name: "Zalando Push",
      data: [2, 6.5, 7, 12, 8, 16.5, 8, 6],
      color: "#7bed9f"
    },
    {
      name: "YEAY General",
      data: [1, 4, 3, 7, 3.5, 12, 6, 4.5],
      color: "#ffeaa7"
    }
  ]
};

class PreviewSeparated extends PureComponent {
  render() {
    return (
      <>
        {/* <div className="seven_btn_wrapper">
          <div className="seven_left">
            <span>7 Days</span>
          </div>
          <div className="seven_arrow">
            <i className="fas fa-chevron-down" />
          </div>
        </div> */}
        <div className="empty_space" />
        <div className="preview_separated_container">
          <div className="chart_container" />
          <HighchartsReact highcharts={Highcharts} options={options} />
          <div className="empty_space" />
        </div>
      </>
    );
  }
}

export default PreviewSeparated;
