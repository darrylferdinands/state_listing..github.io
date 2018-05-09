

var chart = Highcharts.chart('container6', {

    chart: {
        type: 'column'
            },

    title: {
        text: 'Crop Risk Map'
    },

    subtitle: {
        text: ''
    },

   

    xAxis: {
        categories: [],
        labels: {
            x: -10
        }
    },

    yAxis: {
        allowDecimals: false,
        title: {
            text: ''
        }
    },

   

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
});

$('#NDMI').click(function () {
    chart.setSize(400, 300);
});

$('#SM').click(function () {
    chart.setSize(600, 300);
})












