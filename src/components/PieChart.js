import React from "react";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";

class PieChart extends React.Component {
  state = {};

  pieChartData() {
    let logs = this.props.logs.map(log => {
      return log;
    });
    let activitiesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log("var", logs);
    logs.forEach(log => {
      log.activities.forEach(activity => {
        activitiesArray[activity.id - 1] += 1;
      });
    });
    return {
      labels: [
        "work",
        "school",
        "homework",
        "gym",
        "date",
        "cook",
        "chores",
        "vacation-time",
        "family-time",
        "friend-time"
      ],
      datasets: [
        {
          label: "Weekly Activity Tracker",
          data: activitiesArray, // each number is one occurence
          backgroundColor: [
            "rgba(225,99,132,0.6)",
            "rgba(225,206,86,0.6)",
            "rgba(75,192,192,0.6)",
            "rgba(153,102,255,0.6)",
            "rgba(225,99,132,0.6)",
            "rgb(255,0,255,0.6)",
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
    console.log(this.props.logs);
    return (
      <div className="PieChart">
        <Doughnut
          data={this.pieChartData()}
          width={100}
          height={200}
          options={{
            title: {
              display: true,
              text: "Weekly Activity Tracker",
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

export default connect(null)(PieChart);
