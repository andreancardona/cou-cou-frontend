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
          data: moodsArray, // each number is one occurence
          backgroundColor: [
            "rgba(225,99,132,0.6)",
            "rgba(225,206,86,0.6)",
            "rgba(75,192,192,0.6)",
            "rgba(153,102,255,0.6)",
            "rgba(225,99,132,0.6)"
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
