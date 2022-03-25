var options = {
    series: [{
        name: "Tickets",
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: "Customer",
        data: [20, 30, 90, 40, 56, 20, 70, 21, 10]
    }],
    colors: ['#ff6855', '#009344'],
    chart: {
        height: 350,
        type: 'line',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Tickets and Customer by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    legend: {
        position: 'top'
    },

    title: {
        text: 'Charts',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
            fontSize: '18px',
            fontWeight: '700',
            fontFamily: 'SFProVietsub',
            color: '#333333'
        },
    }
};

var chart = new ApexCharts(document.querySelector(".performance-chart"), options);
chart.render();