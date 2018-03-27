import React from "react";
import { connect } from "react-redux";
import { HorizontalBar } from "react-chartjs-2";

class BarGraph extends React.Component {
  state = {};

  getBarGraphData() {
    let moodsArray = [0, 0, 0, 0, 0];
    this.props.logs.forEach(log => {
      moodsArray[log.mood_id - 1] += 1;
    });
    return {
      labels: [
        "on the verge of tears",
        "I've had better days",
        "neutral",
        "happy camper",
        "on cloud nine"
      ],
      datasets: [
        {
          label: "Weekly Mood Tracker",
          data: moodsArray,
          backgroundColor: [
            "rgba(255, 102, 102)",
            "rgba(230, 230, 0)",
            "rgba(0, 179, 0)",
            "rgba(51, 255, 51)",
            "rgba(204, 102, 255)"
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div className="BarGraph">
        <HorizontalBar
          data={this.getBarGraphData()}
          width={100}
          height={200}
          options={{
            title: {
              display: true,
              text: "Weekly Mood Tracker",
              fontSize: 20
            },
            legend: {
              display: true,
              position: "right"
            },
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default connect(null)(BarGraph);
