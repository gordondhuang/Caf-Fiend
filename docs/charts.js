// Get the canvas element where the chart will be rendered
const ctx = document.getElementById('myChart').getContext('2d');
const date = new Date();
// Define your chart data and options
const chartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [{
        label: 'Caffeine',
        data: [400, 400, 400, 400, 400], // Example data
        backgroundColor: 'rgba(108,88,76,1)', // Example background color
        borderColor: 'rgba(75, 192, 192, 1)', // Example border color
        borderWidth: 1, // Example border width
    }]
};

const chartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Create a new chart instance
const myChart = new Chart(ctx, {
    type: 'bar', // Specify the chart type (e.g., 'bar', 'line', 'pie', etc.)
    data: chartData,
    options: chartOptions
});
