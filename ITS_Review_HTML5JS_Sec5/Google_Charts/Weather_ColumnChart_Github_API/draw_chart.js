// Load the Visualization API and the corechart package.
google.charts.load('current', { packages: ['corechart'] });
// define a variable with the url of the data api location
const url = 'https://westmecryan.github.io/Practice_APIs/weather_data.json';

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  drawChart(data);
}

function drawChart(data) {
  console.log(data);
  const chartData = new google.visualization.DataTable();
  chartData.addColumn('string', 'City');
  chartData.addColumn('number', 'Temperature');
  chartData.addColumn('number', 'Humidity');
  chartData.addColumn('number', 'Wind Speed');

  data.forEach((item) => {
    chartData.addRow([item.city, item.temperature, item.humidity, item.wind_speed]);
  });
  const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  // Set chart options
  const options = { title: 'Weather in Global Cities', width: 800, height: 300, isStacked: false };

  // Instantiate and draw our chart, passing in some options.

  chart.draw(chartData, options);
}

google.charts.setOnLoadCallback(fetchData);
