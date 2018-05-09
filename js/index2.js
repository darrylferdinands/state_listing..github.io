
var chart = Highcharts.chart('container1', {

  title: {
    text: 'Cumulative Sowing Trend'
  },

  subtitle: {
    text: 'Measuring Risk Values'
  },

  xAxis: {title: {text : 'Sub-Districts'},
    categories: ['Aligarh','Badaun','Bara Banki','Bulandsheher','Faizabad','Gonda']
  },
  yAxis: {
    allowDecimals: false,
    title: {
      text: 'Risk Values'
    }
  },

  series: [{
    type: 'column',
    colorByPoint: true,
    data: [1, 2, 2, 3, 1, 2],
    showInLegend: false
  }]

});


$('#plain').click(function () {
  chart.update({
    chart: {
      inverted: false,
      polar: false
    },
    subtitle: {
      text: 'Measuring Risk Values'
    }
  });
});

$('#inverted').click(function () {
  chart.update({
    chart: {
      inverted: true,
      polar: false
    },
    subtitle: {
      text: 'Measuring Risk Values'
    }
  });
});

$('#polar').click(function () {
  chart.update({
    chart: {
      inverted: false,
      polar: true
    },
    subtitle: {
      text: 'Measuring Risk Values'
    }
  });
});









