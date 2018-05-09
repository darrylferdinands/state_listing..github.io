		function createConfig(pointStyle) {
			return {
				type: 'line',
				data: {
					labels: ['AB', 'BR', 'KA', 'MP', 'MH', 'OR', 'RJ','TG','UP','WB'],
					datasets: [{
						label: 'High Risk',
						backgroundColor: window.chartColors.red,
						borderColor: window.chartColors.red,
						data: [5, 3, 5, 8, 2, 8, 7, 4, 12],
						fill: false,
						pointRadius: 10,
						pointHoverRadius: 15,
						showLine: false // no line shown
					},
					{
						label: 'Moderate Risk',
						backgroundColor: window.chartColors.blue,
						borderColor: window.chartColors.blue,
						data: [1, 8, 4, 3, 1, 1, 2, 5, 8, 4] ,
						fill: false,
						pointRadius: 10,
						pointHoverRadius: 15,
						showLine: false // no line shown
					},
					{
						label: 'Low Risk',
						backgroundColor: window.chartColors.yellow,
						borderColor: window.chartColors.yellow,
						data: [1, 10, 4, 3, 1, 12, 2, 5, 8, 4],
						fill: false,
						pointRadius: 10,
						pointHoverRadius: 15,
						showLine: false // no line shown
					},
					{
						label: 'No Risk',
						backgroundColor: window.chartColors.green,
						borderColor: window.chartColors.green,
						data: [1, 10, 4, 3, 5, 8, 2, 5, 8, 1],
						fill: false,
						pointRadius: 10,
						pointHoverRadius: 15,
						showLine: false // no line shown
					},
					]
				},
				
				options: {
					responsive: true,
					title: {
						display: true,
						text: 'Cumulative Rainfall Status',
						fontSize : 18,
			fontColor : "#00004d",
			fontFamily : 'Alegreya'
					},
						legend: {
						position: 'bottom',
						borderRadius: 5,
						labels : {display: true,
			boxWidth : 25,
			borderRadius: 50,
			fontFamily: 'sans-serif',
			fontSize: 10,
		}
					},
					scales : {
			yAxes : [{
				
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'No. of Districts',
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
                                	labelString: 'States',
									fontColor: '#a2a2a2',
									fontSize: 12,
									fontweight: 600,
									lineHeight: 1,
                            		},
                     }],	
		},
					elements: {
						point: {
							pointStyle: pointStyle
						}
					}
				}
			};
		}

		window.onload = function() {
			var container = document.querySelector('.container10');
			[
				
				'rectRot',
				
				
			].forEach(function(pointStyle) {
				var div = document.createElement('div');
				div.classList.add('chart-container1');

				var canvas = document.createElement('canvas');
				div.appendChild(canvas);
				container.appendChild(div);

				var ctx = canvas.getContext('2d');
				var config = createConfig(pointStyle);
				new Chart(ctx, config);
			});
		};
	