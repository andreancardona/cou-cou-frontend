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
            "rgba(255, 102, 102)",
            "rgba(230, 230, 0)",
            "rgba(0, 170, 255)",
            "rgba(51, 255, 51)",
            "rgba(204, 102, 255)",
            "rgb(255, 153, 51)",
            "rgba(255, 179, 217)",
            "rgba(51, 153, 51)",
            "rgba(51, 102, 255)",
            "rgba(255, 26, 140)"
          ]
        }
      ]
    };
  }

  render() {
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
