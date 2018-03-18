		
		//Barchart links

			var data = {
		    labels: ["January", "February", "March"],
		    datasets: [{
		        label: "My First dataset",
		        backgroundColor: ["#641acf","#4bee95","#f7ac69"],
		        borderColor: "rgba(75,192,192,1)",
		        data: [65, 59, 75],
		    }]
		};

		var ctx = document.getElementById("myChartY");
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: data,
		    options: {
		    	legend: {
       				display: false
    			},
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }],
		            xAxes: [{
		                // Change here
		            	barPercentage: 0.3,
		            	categorySpacing:0
		            }]
		        }
		    }
		});


			//Barchart rechts

			var data = {
		    labels: ["January", "February", "March"],
		    datasets: [{
		        label: "My First dataset",
		        backgroundColor: ["#641acf","#4bee95","#f7ac69"],
		        borderColor: "rgba(75,192,192,1)",
		        data: [65, 59, 75],
		    }]
		};

		var ctx = document.getElementById("myChartT");
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: data,
		    options: {
		    	legend: {
       				display: false
    			},
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true
		                }
		            }],
		            xAxes: [{
		                // Change here
		            	barPercentage: 0.3,
		            	categorySpacing:0
		            }]
		        }
		    }
		});


		//Temperature
			var data = {
		    labels: ["", ""],
		    datasets: [{
		        label: "My First dataset",
		        backgroundColor: ["#171721","#3165f6"],
		        borderColor: "rgba(75,192,192,0)",
		        data: [0,100],
		    }]
		};



		var ctx = document.getElementById("myChartTemp");
		ctx.height = 75
		var myChart = new Chart(ctx, {
		    type: 'doughnut',
		    data: data,
		    options: {
		    	cutoutPercentage: 80,
		    	legend: {
		    		display:false,
		    	},
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true,
		                    display:false
		                }
		            }],
		        xAxes: [{
		                // Change here
		            	barPercentage: 0.3,
		            	categorySpacing:0
		            }]
		        }
		    }
		});

		//Fuel
			var data = {
		    datasets: [{
		        label: "My First dataset",
		        backgroundColor: ["#171721","#23e1d5"],
		        borderColor: "rgba(75,192,192,0)",
		        data: [50, 50],
		    }]
		};
		var ctx = document.getElementById("myChartFuel");
		ctx.height = 75
		var myChart = new Chart(ctx, {
		    type: 'doughnut',
		    data: data,
		    options: {
		    	legend: {
		    		display:false,
		    	},
		    	cutoutPercentage: 80,
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true,
		                    display:false
		                }
		            }],
		            xAxes: [{
		                // Change here
		            }]
		        }
		    }
		});

		//Dynamic Pressure
			var data = {
		    labels: ["", ""],
		    datasets: [{
		        backgroundColor: ["#171721","#eea56e"],
		        borderColor: "rgba(75,192,192,0)",
		        data: [60, 40],
		    }]
		};

		var ctx = document.getElementById("myChartDynamicPressure");
		ctx.height = 75
		var myChart = new Chart(ctx, {
		    type: 'doughnut',
		    data: data,
		    options: {
		    	legend: {
		    		display:false,
		    	},
		    	cutoutPercentage: 80,
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true,
		                    display:false
		                }
		            }],
		            xAxes: [{
		                // Change here
		            }]
		        }
		    }
		});

		//Stacked Bar Midden
				var ctx = document.getElementById("myChartHorizontalA");
				ctx.height = 5;
				var myChart = new Chart(ctx, {
				  type: 'horizontalBar',
				  data: {
				    labels: ["Red"],
				    datasets: [{
				        label: '# of Votes 1',
				        data: [10],
				        backgroundColor: [
				          '#fe578b'
				        ],
				        borderColor: [
				          ''
				        ],
				        borderWidth: 0
				      },
				      {
				        label: '# of Votes 2',
				        data: [80],
				        backgroundColor: [
				          '#62647b',
				        ],
				        borderColor: [
				          '',
				        ],
				        borderWidth: 0
				      },
				      {
				        label: '# of Votes 3',
				        data: [10],
				        backgroundColor: [
				          '#62647b',
				        ],
				        borderColor: [
				          '',
				        ],
				        borderWidth: 0
				      }
				    ]
				  },
				  options: {
				  	legend: {
				  		display:false
				  	},
				  	tooltips: {
				  		enabled:false
				  	},
				    scales: {
				      yAxes: [{
				      	barPercentage: 0.5,
				        stacked: true,
				        ticks: {
				        	display:false,
				          beginAtZero: true
				        }
				      }],
				      xAxes: [{
				        stacked: true,
				        categorySpacing: 0,
				        ticks: {
				        	display:false,
				          beginAtZero: true
				        }
				      }]

				    }
				  }
				});
			</script>