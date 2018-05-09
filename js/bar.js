$(document).ready(function () {

	var ctx = document.getElementById("bar-chartcanvas");
    ctx.height = 137;
	var data = {
		labels : [],
		datasets : [
			{
				label : "",
				data : [],
				backgroundColor : [	],
				borderColor : [],	
				borderWidth : 1
			},
			{
				label : "",
				data : [],
				backgroundColor : [	],
				borderColor : [
					
				],
				borderWidth : 1
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Crop Risk Map",
			fontSize : 18,
			fontColor : '#00004d',
			fontFamily : 'Alegreya'
		},
		legend : {
			display : false,
			position : "bottom"
		},
		elements : {
			center : {
				text: 'Test',
				color: 'black',
				fontStyle: 'Helvetica',
			}
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}]
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});






$(document).ready(function () {

	var ctx = $("#bar-chartcanvas2");

	var data = { xAxis: {
		title:
	{
		text: 'test'
	}
	},
		labels : ["Aligarh", "Badaun", "Bara Banki", "Bulandshahar", "Faizabad","Gonda"],
		datasets : [
			{
				label : "High Risk",
				data : [0,0,0,0,4,0],
				backgroundColor : [
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0

			},
			{
				label : "Moderate Risk",
				data : [0, 3, 0, 0, 0, 3],
				backgroundColor : [
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0,
				borderRadius: 5
			},

			{
				label : "Low Risk",
				data : [0, 0, 0, 2, 0, 0],
				backgroundColor : [
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
				],
				borderColor : [
					"black, "
				],
				borderWidth : 0
			},
			{
				label : "No Risk",
				data : [1, 0, 1, 0, 0],
				backgroundColor : [
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen"
				],
				borderColor : [
					"darkgreen"
				],
				borderWidth : 0
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Cumulative Sowing Trend",
			fontSize : 18,
			fontColor : "#00004d",
			fontFamily : 'Alegreya'
		},

		legend : {
			display : true,
			position : "bottom",
			labels : {
			boxWidth : 15,
			borderRadius: 5,
			fontFamily: 'sans-serif',
			fontSize: 10
		}
	},

	scales : {
			yAxes : [{
				ticks : {
					min : 0,
					max : 5,
				},
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Risk Level',
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
                                	labelString: 'Sub-Districts',
									fontColor: '#a2a2a2',
									fontSize: 12,
									fontweight: 600,
									lineHeight: 1,
                            		},
                     }],	
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});







$(document).ready(function () {

	var ctx = $("#bar-chartcanvas3");

	var data = { xAxis: {
		title:
	{
		text: 'test'
	}
	},
		labels : ["Aligarh", "Badaun", "Bara Banki", "Bulandshahar", "Faizabad","Gonda"],
		datasets : [
			{
				label : "High Risk",
				data : [0,0,0,0,4,0],
				backgroundColor : [
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0

			},
			{
				label : "Moderate Risk",
				data : [0, 3, 0, 0, 0, 3],
				backgroundColor : [
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0,
				borderRadius: 5
			},

			{
				label : "Low Risk",
				data : [0, 0, 0, 2, 0, 0],
				backgroundColor : [
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
				],
				borderColor : [
					"black, "
				],
				borderWidth : 0
			},
			{
				label : "No Risk",
				data : [1, 0, 1, 0, 0],
				backgroundColor : [
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen"
				],
				borderColor : [
					"darkgreen"
				],
				borderWidth : 0
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Rainfall Status",
			fontSize : 18,
			fontColor : "#00004d",
			fontFamily : 'Alegreya'
		},

		legend : {
			display : true,
			position : "bottom",
			labels : {
			boxWidth : 15,
			borderRadius: 5,
			fontFamily: 'sans-serif',
			fontSize: 10
		}
	},

		scales : {
			yAxes : [{
				ticks : {
					min : 0,
					max : 5
				},
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
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});




$(document).ready(function () {

	var ctx = $("#bar-chartcanvas4");

	var data = { xAxis: {
		title:
	{
		text: 'test'
	}
	},
		labels : ["Aligarh", "Badaun", "Bara Banki", "Bulandshahar", "Faizabad","Gonda"],
		datasets : [
			{
				label : "High Risk",
				data : [0,0,0,0,4,0],
				backgroundColor : [
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0

			},
			{
				label : "Moderate Risk",
				data : [0, 3, 0, 0, 0, 3],
				backgroundColor : [
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0,
				borderRadius: 5
			},

			{
				label : "Low Risk",
				data : [0, 0, 0, 2, 0, 0],
				backgroundColor : [
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
				],
				borderColor : [
					"black, "
				],
				borderWidth : 0
			},
			{
				label : "No Risk",
				data : [1, 0, 1, 0, 0],
				backgroundColor : [
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen"
				],
				borderColor : [
					"darkgreen"
				],
				borderWidth : 0
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : ["Dry Spell"],
			fontSize : 18,
			fontColor : "#00004d",
			fontFamily: 'Alegreya'
		},

		legend : {
			display : true,
			position : "bottom",
			labels : {
			boxWidth : 15,
			borderRadius: 5,
			fontFamily: 'sans-serif',
			fontSize: 10
		}
	},

		scales : {
			yAxes : [{
				ticks : {
					min : 0,
					max : 4
				},
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
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});









$(document).ready(function () {

	var ctx = $("#bar-chartcanvas5");

	var data = { xAxis: {
		title:
	{
		text: 'test'
	}
	},
		labels : ["Aligarh", "Badaun", "Bara Banki", "Bulandshahar", "Faizabad","Gonda"],
		datasets : [
			{
				label : "High Risk",
				data : [0,0,4,0,0,0],
				backgroundColor : [
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",
					"#ff8080",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0

			},
			{
				label : "Moderate Risk",
				data : [0, 0, 0, 0, 0, 3],
				backgroundColor : [
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",
					"skyblue",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0,
				borderRadius: 5
			},

			{
				label : "Low Risk",
				data : [0, 2, 0, 2, 0, 0],
				backgroundColor : [
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
					"rgb(230, 184, 0)",
				],
				borderColor : [
					"black, "
				],
				borderWidth : 0
			},
			{
				label : "No Risk",
				data : [1, 0, 0, 0, 1, 0],
				backgroundColor : [
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen",
					"lightgreen"
				],
				borderColor : [
					"darkgreen"
				],
				borderWidth : 0
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : ["Wet Spell"],
			fontSize : 18,
			fontColor : "#00004d",
			fontFamily: 'Alegreya'
		},

		legend : {
			display : true,
			position : "bottom",
			labels : {
			boxWidth : 15,
			borderRadius: 5,
			fontFamily: 'sans-serif',
			fontSize: 10
		}
	},

		scales : {
			yAxes : [{
				ticks : {
					min : 0,
					max : 4
				},
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
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});





$(document).ready(function () {

	var ctx = $("#bar-chartcanvas6");

	var data = { xAxis: {
		title:
	{
		text: 'test'
	}
	},
		labels : ["Aligarh", "Badaun", "Bara Banki", "Bulandshahar", "Faizabad","Gonda"],
		datasets : [
			{
				label : "Normal area",
				data : [28000,28000,28000,28000,28000,28000],
				backgroundColor : [
					"#8cd9b3",
					"#8cd9b3",
					"#8cd9b3",
					"#8cd9b3",
					"#8cd9b3",
					"#8cd9b3",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0

			},
			{
				label : "Last year area",
				data : [40000, 40000, 40000, 40000, 40000, 40000],
				backgroundColor : [
					"rgb(133, 163, 224)",
					"rgb(133, 163, 224)",
					"rgb(133, 163, 224)",
					"rgb(133, 163, 224)",
					"rgb(133, 163, 224)",
					"rgb(133, 163, 224)",

				],
				borderColor : [
					"black, "
				],
				borderWidth : 0,
				borderRadius: 5
			},

			{
				label : "Progress area in 2019",
				data : [32000, 32000, 32000, 32000, 32000, 32000],
				backgroundColor : [
					"#ffd699",
					"#ffd699",
					"#ffd699",
					"#ffd699",
					"#ffd699",
					"#ffd699",
				],
				borderColor : [
					"black, "
				],
				borderWidth : 0
			},
			
		]
	};

	var options = { responsive: true,
		
		title : {
			display : true,
			position : "top",
			text : "District Wise Acreages",
			fontSize : 18,
			fontColor : "#00004d",
			fontFamily : 'Alegreya'
		},

		legend : {
			display : true,
			position : "bottom",
			labels : {
			boxWidth : 15,
			borderRadius: 5,
			fontFamily: 'sans-serif',
			fontSize: 10
		}
	},

			scales : {
			yAxes : [{
				ticks : {
					min : 0,
					
				},
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Area (Ha) ',
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
                                	labelString: 'Sub-Districts',
									fontColor: '#a2a2a2',
									fontSize: 12,
									fontweight: 600,
									lineHeight: 1,
                            		},
                     }],	
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});



var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var color = Chart.helpers.color;
		var horizontalBarChartData = {
			labels: ['Progressive(2018)', 'Last Year', 'Normal Area'],
			datasets: [{
				label: 'Normal',
				fontSize: 2,
				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: 'transparent',
				borderWidth: 1,
				data: [0,
				0,
				30
					
				]
			}, {
				label: 'Last Year (2017)',
				backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
				borderColor: 'transparent',
				data: [
					0,
					20,
					0
				]
			},
			{
				label: 'Progressive Year (2018)',
				fontColor: '#a2a2a2',
				backgroundColor: '#ffcc00',
				borderColor: 'transparent',
				data: [
					19,
					0,
					0 ]
			}]

		};

		window.onload = function() {
			var ctx = document.getElementById('horizontal_canvas').getContext('2d');
			window.myHorizontalBar = new Chart(ctx, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
					// In this case, we are setting the border of each horizontal bar to be 2px wide
					elements: {
						rectangle: {
							borderWidth: 1,
							borderRadius: 5,
						}
					},
					scales : {
			yAxes : [{
				gridLines: {
						display:false
					},
				display: true,
				scaleLabel: {
					display: false,
					labelString: '',
					fontColor: '#a2a2a2',
					fontSize: 12,
					fontweight: 1,

				},
				
			}],
			xAxes: [{
					gridLines: {
						display:true
					},
					barThickness: 12.5,
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
			boxWidth : 15,
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




var ctx = document.getElementById('myChart').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['AB', 'BR', 'KA', 'MP', 'MH', 'OR', 'RJ','TG','UP','WB'],
        datasets: [{
            label: "High Risk",
            backgroundColor: 'red',
            borderColor: 'transparent',
            pointBorderColor: 'red',
            pointBackgroundColor: 'red',
           pointHoverBackgroundColor: 'red',
            pointHoverBorderColor: 'red',
            pointRadius: 5,
           
            fill: false,
            data: [5, 3, 9, 8, 1, 8, 7, 4, 13, 1]
        },
            {
            label: "Moderate Risk",
            backgroundColor: 'darkblue',
            borderColor: 'transparent',
            pointBorderColor: 'darkblue',
            pointBackgroundColor: 'darkblue',
           pointHoverBackgroundColor: 'darkblue',
            pointHoverBorderColor: 'darkblue',
            pointRadius: 5,
            fill: false,
            data: [1, 8, 3, 3, 1, 1, 2, 4, 8, 7]
        },
        {
            label: "Low Risk",
            backgroundColor: '#ffcc00',
            borderColor: 'transparent',
            pointBorderColor: '#ffcc00',
            pointBackgroundColor: '#ffcc00',
           pointHoverBackgroundColor: '#ffcc00',
            pointHoverBorderColor: '#ffcc00',
            pointRadius: 5,
            fill: false,
            data: [1, 12, 3, 3, 1, 13, 2, 4, 8, 7]
        },
        {
            label: "No Risk",
            backgroundColor: 'darkgreen',
            borderColor: 'transparent',
            pointBorderColor: 'darkgreen',
            pointBackgroundColor: 'darkgreen',
           pointHoverBackgroundColor: 'darkgreen',
            pointHoverBorderColor: 'darkgreen',
            pointRadius: 5,
            fill: false,
            data: [1, 12, 3, 3, 7, 8, 2, 4, 8, 1]
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
            position: "bottom",
            borderRadius: 5,
                        labels : {display: true,
            boxWidth : 10,
            boxRadius: 5,
            fontFamily: 'sans-serif',
            fontSize: 10,
        }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                },
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
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    fontSize: 10
                },
                scaleLabel: {
                                    display: true,
                                    labelString: 'States',
                                    fontColor: '#a2a2a2',
                                    fontSize: 12,
                                    fontweight: 600,
                                    lineHeight: 1,
                                    },
            }]
        }
    }
});




var ctx = document.getElementById('myChart1').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['AB', 'BR', 'KA', 'MP', 'MH', 'OR', 'RJ','TG','UP','WB'],
        datasets: [{
            label: "High Risk",
            backgroundColor: 'red',
            borderColor: 'transparent',
            pointBorderColor: 'red',
            pointBackgroundColor: 'red',
           pointHoverBackgroundColor: 'red',
            pointHoverBorderColor: 'red',
            pointRadius: 5,
           
            fill: false,
            data: [5, 3, 9, 8, 1, 8, 7, 4, 13, 1]
        },
            {
            label: "Moderate Risk",
            backgroundColor: 'darkblue',
            borderColor: 'transparent',
            pointBorderColor: 'darkblue',
            pointBackgroundColor: 'darkblue',
           pointHoverBackgroundColor: 'darkblue',
            pointHoverBorderColor: 'darkblue',
            pointRadius: 5,
            fill: false,
            data: [1, 8, 3, 3, 1, 1, 2, 4, 8, 7]
        },
        {
            label: "Low Risk",
            backgroundColor: '#ffcc00',
            borderColor: 'transparent',
            pointBorderColor: '#ffcc00',
            pointBackgroundColor: '#ffcc00',
           pointHoverBackgroundColor: '#ffcc00',
            pointHoverBorderColor: '#ffcc00',
            pointRadius: 5,
            fill: false,
            data: [1, 12, 3, 3, 1, 13, 2, 4, 8, 7]
        },
        {
            label: "No Risk",
            backgroundColor: 'darkgreen',
            borderColor: 'transparent',
            pointBorderColor: 'darkgreen',
            pointBackgroundColor: 'darkgreen',
           pointHoverBackgroundColor: 'darkgreen',
            pointHoverBorderColor: 'darkgreen',
            pointRadius: 5,
            fill: false,
            data: [1, 12, 3, 3, 7, 8, 2, 4, 8, 1]
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
            position: "bottom",
            borderRadius: 5,
                        labels : {display: true,
            boxWidth : 10,
            boxRadius: 5,
            fontFamily: 'sans-serif',
            fontSize: 10,
        }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                },
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
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    fontSize: 10
                },
                scaleLabel: {
                                    display: true,
                                    labelString: 'States',
                                    fontColor: '#a2a2a2',
                                    fontSize: 12,
                                    fontweight: 600,
                                    lineHeight: 1,
                                    },
            }]
        }
    }
});



var ctx = document.getElementById('myChart2').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['AB', 'BR', 'KA', 'MP', 'MH', 'OR', 'RJ','TG','UP','WB'],
        datasets: [{
            label: "High Risk",
            backgroundColor: 'red',
            borderColor: 'transparent',
            pointBorderColor: 'red',
            pointBackgroundColor: 'red',
           pointHoverBackgroundColor: 'red',
            pointHoverBorderColor: 'red',
            pointRadius: 5,
           
            fill: false,
            data: [5, 3, 9, 8, 1, 8, 7, 4, 13, 1]
        },
            {
            label: "Moderate Risk",
            backgroundColor: 'darkblue',
            borderColor: 'transparent',
            pointBorderColor: 'darkblue',
            pointBackgroundColor: 'darkblue',
           pointHoverBackgroundColor: 'darkblue',
            pointHoverBorderColor: 'darkblue',
            pointRadius: 5,
            fill: false,
            data: [1, 8, 3, 3, 1, 1, 2, 4, 8, 7]
        },
        {
            label: "Low Risk",
            backgroundColor: '#ffcc00',
            borderColor: 'transparent',
            pointBorderColor: '#ffcc00',
            pointBackgroundColor: '#ffcc00',
           pointHoverBackgroundColor: '#ffcc00',
            pointHoverBorderColor: '#ffcc00',
            pointRadius: 5,
            fill: false,
            data: [1, 12, 3, 3, 1, 13, 2, 4, 8, 7]
        },
        {
            label: "No Risk",
            backgroundColor: 'darkgreen',
            borderColor: 'transparent',
            pointBorderColor: 'darkgreen',
            pointBackgroundColor: 'darkgreen',
           pointHoverBackgroundColor: 'darkgreen',
            pointHoverBorderColor: 'darkgreen',
            pointRadius: 5,
            fill: false,
            data: [1, 12, 3, 3, 7, 8, 2, 4, 8, 1]
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
            position: "bottom",
            borderRadius: 5,
                        labels : {display: true,
            boxWidth : 10,
            boxRadius: 5,
            fontFamily: 'sans-serif',
            fontSize: 10,
        }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                },
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
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    fontSize: 10
                },
                scaleLabel: {
                                    display: true,
                                    labelString: 'States',
                                    fontColor: '#a2a2a2',
                                    fontSize: 12,
                                    fontweight: 600,
                                    lineHeight: 1,
                                    },
            }]
        }
    }
});



var ctx = document.getElementById('myChart3').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['AB', 'BR', 'KA', 'MP', 'MH', 'OR', 'RJ','TG','UP','WB'],
        datasets: [{
            label: "High Risk",
            backgroundColor: 'red',
            borderColor: 'transparent',
            pointBorderColor: 'red',
            pointBackgroundColor: 'red',
           pointHoverBackgroundColor: 'red',
            pointHoverBorderColor: 'red',
            pointRadius: 5,
           
            fill: false,
            data: [5, 3, 9, 8, 1, 8, 7, 4, 13, 1]
        },
            {
            label: "Moderate Risk",
            backgroundColor: 'darkblue',
            borderColor: 'transparent',
            pointBorderColor: 'darkblue',
            pointBackgroundColor: 'darkblue',
           pointHoverBackgroundColor: 'darkblue',
            pointHoverBorderColor: 'darkblue',
            pointRadius: 5,
            fill: false,
            data: [1, 8, 3, 3, 1, 1, 2, 4, 8, 7]
        },
        {
            label: "Low Risk",
            backgroundColor: '#ffcc00',
            borderColor: 'transparent',
            pointBorderColor: '#ffcc00',
            pointBackgroundColor: '#ffcc00',
           pointHoverBackgroundColor: '#ffcc00',
            pointHoverBorderColor: '#ffcc00',
            pointRadius: 5,
            fill: false,
            data: [1, 12, 3, 3, 1, 13, 2, 4, 8, 7]
        },
        {
            label: "No Risk",
            backgroundColor: 'darkgreen',
            borderColor: 'transparent',
            pointBorderColor: 'darkgreen',
            pointBackgroundColor: 'darkgreen',
           pointHoverBackgroundColor: 'darkgreen',
            pointHoverBorderColor: 'darkgreen',
            pointRadius: 5,
            fill: false,
            data: [1, 12, 3, 3, 7, 8, 2, 4, 8, 1]
        }, 
        ]
    },
    options: { 
    responsive: true,
    title: {
                        display: true,
                        text: 'Soil Moisture Stress',
                        fontSize : 18,
            fontColor : "#00004d",
            fontFamily : 'Alegreya'
                    },         
        legend: {
            position: "bottom",
            borderRadius: 5,
                        labels : {display: true,
            boxWidth : 10,
            boxRadius: 5,
            fontFamily: 'sans-serif',
            fontSize: 10,
        }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                },
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
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    fontSize: 10
                },
                scaleLabel: {
                                    display: true,
                                    labelString: 'States',
                                    fontColor: '#a2a2a2',
                                    fontSize: 12,
                                    fontweight: 600,
                                    lineHeight: 1,
                                    },
            }]
        }
    }
});




