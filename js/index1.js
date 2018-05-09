var chart = Highcharts.chart('container', {

  chart: {
    type: 'column',
      },

  title: {
    text: 'Cumulative Sowing Trend',
    fontSize : 18,
      fontColor : "#00004d",
      fontFamily: 'Alegreya'
  },

  subtitle: {
    text: 'Measuring Risk Values'
  },

  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical'
  },

  xAxis: {
    categories: ['Aligarh', 'Badaun', 'Bara Banki', 'Bulandsheher', 'Faizabad', 'Gonda' ],
    labels: {
      x: -3
    },
   title: {text : 'Sub-Districts'},
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: 'Risk Values'
    }
  },

  series: [{
    name: 'Low Risk Level',
    data: [1, 0, 0, 0,1,0]
  }, {
    name: 'Medium Risk Level',
    data: [0, 2, 2, 0, 0,2]
  }, {
    name: 'High Risk Level',
    data: [0, 0,  0,3,0,0]
  }],

  responsive: {
    rules: [{
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

$('#small').click(function () {
  chart.setSize(400, 300);
});

$('#large').click(function () {
  chart.setSize(600, 300);
});
