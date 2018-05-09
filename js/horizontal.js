
		var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var color = Chart.helpers.color;
		var horizontalBarChartData = {
			labels: ['Progressive(2018)', 'Last Year', 'Normal Area'],
			datasets: [{
				label: 'Normal Area',
				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: window.chartColors.red,
				borderWidth: 1,
				data: [0,
				0,
				30
					
				]
			}, {
				label: 'Last Year Area(2017)',
				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
				borderColor: window.chartColors.blue,
				data: [
					0,
					20,
					0
				]
			},
			{
				label: 'Progressive Year Area(2018)',
				fontColor: '#a2a2a2',
				backgroundColor: color(window.chartColors.yellow).alpha(0.5).rgbString(),
				borderColor: window.chartColors.yellow,
				data: [
					19,
					0,
					0 ]
			}]

		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myHorizontalBar = new Chart(ctx, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
					// In this case, we are setting the border of each horizontal bar to be 2px wide
					elements: {
						rectangle: {
							borderWidth: 2,
							borderRadius: 5,
						}
					},
					scales : {
			yAxes : [{
				
				display: true,
				scaleLabel: {
					display: true,
					labelString: '',
					fontColor: '#a2a2a2',
					fontSize: 12,
					fontweight: 1,

				},
				
			}],
			xAxes: [{
					gridLines: {
						display:false
					},
					barThickness: 9.5,
                 	display: true,
                        scaleLabel: {
                              		display: true,
                                	labelString: 'AREA',
									fontColor: '#a2a2a2',
									fontSize: 12,
									fontweight: 600,
									lineHeight: 1,
                            		},
                     }],	
		},
					responsive: true,
					legend: {
						position: 'bottom',
						borderRadius: 5,
						labels : {
			boxWidth : 25,
			borderRadius: 50,
			fontFamily: 'sans-serif',
			fontSize: 10,
			

		}
					},
					title: {
						display: true,
						text: 'Cumulative Sowing Trend',
						fontSize : 18,
			fontColor : "#00004d",
			fontFamily : 'Alegreya'
					}
				}
			});

		};

