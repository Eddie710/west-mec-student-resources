# Using _Google Charts_

- Embed the Google Charts API CDN route in your html file

```console
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
```

- Utilize the `setOnLoadCallback(drawChart)` method to call your `drawChart()` function when the API tools have loaded

```console
    <script type="text/javascript">
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        // what you want to do
    }
```

- create a new instance of the google visualization Data Table constructor function and add
