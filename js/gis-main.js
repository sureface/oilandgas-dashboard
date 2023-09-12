// Chart js starts

// Sample line chart

// Get the canvas elements
const lineChart = document.getElementById("line-chart");
const lineChartModal = document.getElementById("line-chart-modal");

// Create the chart contexts
const lineChartContext = lineChart.getContext("2d");
const lineChartModalContext = lineChartModal.getContext("2d");

var lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [120, 150, 180, 200, 220, 250],
      borderColor: "blue",
      fill: false,
    },
    {
      label: "Sales",
      data: [100, 120, 140, 190, 180, 200],
      borderColor: "blue",
      fill: false,
    },
  ],
};
var lineChartModalData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [120, 150, 180, 200, 220, 250],
      borderColor: "blue",
      fill: false,
    },
    {
      label: "Sales",
      data: [100, 120, 140, 190, 180, 200],
      borderColor: "blue",
      fill: false,
    },
  ],
};

new Chart(lineChartContext, {
  type: "line",
  data: lineChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

new Chart(lineChartModalContext, {
  type: "line",
  data: lineChartModalData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// multipe line chart

// Get the canvas elements
const multipleLineChart = document.getElementById("multiple-line-chart");
const multipleLineChartModal = document.getElementById(
  "multiple-line-chart-modal"
);

// Create the chart contexts
const multipleLineChartContext = multipleLineChart.getContext("2d");
const multipleLineChartModalContext = multipleLineChartModal.getContext("2d");

var multipleLineChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Expenses",
      data: [5, 10, 2, 8, 1, 6],
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
  ],
};
var multipleLineChartModalData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Expenses",
      data: [5, 10, 2, 8, 1, 6],
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
  ],
};

var chart = new Chart(multipleLineChartContext, {
  type: "line",
  data: multipleLineChartData,
  options: {
    maintainAspectRatio: false,
    responsive: true,
  },
});
var chart = new Chart(multipleLineChartModalContext, {
  type: "line",
  data: multipleLineChartModalData,
  options: {
    maintainAspectRatio: false,
    responsive: true,
  },
});

// Stepped  line chart

// Get the canvas elements
const steppedLineChart = document.getElementById("stepped-line-chart");
const steppedLineChartModal = document.getElementById(
  "stepped-line-chart-modal"
);

// Create the chart contexts
const steppedLineChartContext = steppedLineChart.getContext("2d");
const steppedLineChartModalContext = steppedLineChartModal.getContext("2d");

var steppedLineChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgb(75, 192, 192)",
      tension: 0,
    },
  ],
};
var steppedLineChartModalData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgb(75, 192, 192)",
      tension: 0,
    },
  ],
};

new Chart(steppedLineChartContext, {
  type: "line",
  data: steppedLineChartData,
  options: {
    maintainAspectRatio: false,
    responsive: true,
    stepped: true,
  },
});
new Chart(steppedLineChartModalContext, {
  type: "line",
  data: steppedLineChartModalData,
  options: {
    maintainAspectRatio: false,
    responsive: true,
    stepped: true,
  },
});
// amChart finished
