import React from "react";
import { connect } from "react-redux";
import { HorizontalBar } from "react-chartjs-2";

class Chart extends React.Component {
  state = {
    chartData: {
      labels: [
        "on cloud nine",
        " happy camper",
        "neutral",
        "I've had better",
        "on the verge of tears"
      ],
      datasets: [
        {
          label: "Weekly Mood Tracker",
          data: [3, 4, 2, 2, 1], // each number is one occurence
          backgroundColor: [
            "rgba(225,99,132,0.6)",
            "rgba(225,206,86,0.6)",
            "rgba(75,192,192,0.6)",
            "rgba(153,102,255,0.6)",
            "rgba(225,99,132,0.6)"
          ]
        }
      ]
    }
  };
  render() {
    let filterMoods = this.props.logs.filter(log => {
      console.log(log.mood_id);
      return log.mood_id;
    });
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default connect(null)(Chart);
