var myresult = myresult || {};

myresult.myresultObj = function() {
	var clientId;
	var clientUUId;
	var clientName;
	var clientSurveyId;
	var employeeId;
	var employeeUUID;
	var testArray = [];

	var questionUUIDArray = [];
	var surveyAseIdArray = [];
	var surveyAseNameArray = [];
	var conts_questionId = "";
	var conts_questionNames = "";
	var got_questionIdforSend = "";
	var got_answerforSend = "";
	var got_surveyforIdforSend = "";
	var got_surveyCommentForSend = "";
};

myresult.myresultObj.prototype = {

	questionId : function() {

		var questionId = [ '1862', '1863', '1864', '1865', '1866', '1867',
				'1868', '1869', '1870', '1871' ];
		return questionId;
	},
	internalQuestionName : function() {
		var questionName = [ 'Feeling worn out', 'Impatient', 'Rigid',
				'Over responsible', 'Talking too much',
				'Immediate advice giving', 'Need to be in control',
				'Confuse Coaching', 'Pride and ego', 'Self-conscious',
				'Fear of conflict', 'Fear of Asking Questions',
				'Quick to pass judgement', 'Timid', 'Limited resources',
				'Prejudiced', 'Easily distracted', 'Insecurity',
				'Coachee accountability', 'Unwillingness to delegate',
				'Self-questioning', 'Difficulty Collaborating',
				'Fear of making mistakes', 'Unable to care',
				'Negative Emotions' ];
		return questionName;
	},

	questionName : function() {
		var questionName = [ 'Relationship Building', 'Communication',
				'Inspirational', 'Supportiveness', 'Listening', 'Questioning',
				'Articulation', 'Perceptiveness', 'Flexibility',
				'Follow Through' ];
		return questionName;
	},

	AppendDataChart : function() {
		var divCounter = 0;
		var counter = 1;
		while (divCounter < myresultObj.questionId().length) {

			myresultObj.GetMyResultsBucketed(
					myresultObj.questionId()[divCounter], myresultObj
							.questionName()[divCounter], "container" + counter);
			divCounter += 1;
			counter += 1;
		}

	},

	DrawChart : function(chartId, chartName, data1, data2, data3, data4) {
		$('#' + chartId)
				.highcharts(
						{
							exporting : {
								enabled : false
							},
							chart : {
								type : 'column'
							},
							title : {
								text : chartName
							},
							xAxis : {
								categories : [ chartName ],
								lineWidth : 0,
								minorGridLineWidth : 0,
								lineColor : 'transparent',
								labels : {
									enabled : false
								},
								minorTickLength : 0,
								tickLength : 0,
								lineWidth : 0,
								minorGridLineWidth : 0,
								lineColor : 'transparent'
							},
							yAxis : {
								labels : {
									enabled : false
								},
								gridLineWidth : 0,
								minorGridLineWidth : 0,
								min : 0,
								title : {
									text : 'team perception score distrubution'
								},
								stackLabels : {
									enabled : true,
									style : {
										fontWeight : 'bold',
										color : (Highcharts.theme && Highcharts.theme.textColor)
												|| 'gray'
									}
								}
							},
							legend : {
								x : 35,
								verticalAlign : 'top',
								y : 50,
								floating : false,
								backgroundColor : (Highcharts.theme && Highcharts.theme.background2)
										|| 'white',
								borderColor : '#CCC',
								borderWidth : 1,
								shadow : false,
								enabled : false
							},
							tooltip : {
								headerFormat : '<b>{point.x}</b><br/>',
								pointFormat : '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
							},
							plotOptions : {
								column : {
									stacking : 'normal',
									dataLabels : {
										enabled : true,
										color : (Highcharts.theme && Highcharts.theme.dataLabelsColor)
												|| 'white',
										style : {
											textShadow : '0 0 3px black'
										}
									}
								}
							},
							series : [
									{
										name : '9-10',
										data : [ {
											y : (parseInt(data1) > 0 ? parseInt(data1)
													: null),
											color : '#006600'
										} ]
									},
									{
										name : '7-8',
										data : [ {
											y : (parseInt(data2) > 0 ? parseInt(data2)
													: null),
											color : '#FABE00'
										} ]
									},
									{
										name : '4-6',
										data : [ {
											y : (parseInt(data3) > 0 ? parseInt(data3)
													: null),
											color : '#595959'
										} ]
									},
									{
										name : '1-3',
										data : [ {
											y : (parseInt(data4) > 0 ? parseInt(data4)
													: null),
											color : '#C00000'
										} ]
									} ]
						});
	},
	GetMyResultsBucketed : function(questionId, questionName, containerName) {
		$.ajax({

			type : "POST",
			url : "../../../test-client/actions/getltsummary",
			data : "{\"tmId\":\"" + myresultObj.GetltParameterByName("u") // "3923dc1f-1447-11e6-a2ca-80000ba99a60"
					// //
					+ "\"," + "\"questionId\":" + "\"" + questionId + "\","
					+ "\"surveyId\":" + myresultObj.GetltParameterByName("s") // 4f1fbc41-186e-11e6-b870-80000ba99a60
					+ "}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				var result1;
				var result2;
				var result3;
				var result4;

				var one = parseInt(resultsArray[0].one) * 1;
				var two = parseInt(resultsArray[0].two) * 2;
				var three = parseInt(resultsArray[0].three) * 3;
				var four = parseInt(resultsArray[0].four) * 4;
				var five = parseInt(resultsArray[0].five) * 5;
				var six = parseInt(resultsArray[0].six) * 6;
				var seven = parseInt(resultsArray[0].seven) * 7;
				var eight = parseInt(resultsArray[0].eight) * 8;
				var nine = parseInt(resultsArray[0].nine) * 9;
				var ten = parseInt(resultsArray[0].ten) * 10;

				var average = parseInt(one) + parseInt(two) + parseInt(three)
						+ parseInt(four) + parseInt(five) + parseInt(six)
						+ parseInt(seven) + parseInt(eight) + parseInt(nine)
						+ parseInt(ten);
				average = average / resultsArray[0].total;
				$("#" + containerName + "_team_perception").html(
						Math.round(average));

				for (var i = 0; i < resultsArray.length; i++) {
					result1 = parseInt(resultsArray[0].one)
							+ parseInt(resultsArray[0].two)
							+ parseInt(resultsArray[0].three);
					result2 = parseInt(resultsArray[0].five)
							+ parseInt(resultsArray[0].four)
							+ parseInt(resultsArray[0].six);
					result3 = parseInt(resultsArray[0].seven)
							+ parseInt(resultsArray[0].eight);
					result4 = parseInt(resultsArray[0].nine)
							+ parseInt(resultsArray[0].ten);
				}

				myresultObj.DrawChart(containerName, questionName, result4,
						result3, result2, result1);
			},
			complete : function(e) {

			}
		});
	},
	GetltParameterByName : function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
				.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(
				/\+/g, " "));
	},
	GetMyOwnPerceptiontwentyfive : function() {
		var answer_values = "";

		$
				.ajax({
					async : false,
					type : "POST",
					url : "../../../test-client/actions/myperception",
					data : "{\"tmId\":\""
							+ myresultObj.GetltParameterByName("u") + "\","
							+ "\"surveyId\":\""
							+ "f42dc5b3-186e-11e6-b870-80000ba99a60" + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;
						for (var i = 0; i < myresultObj.internalQuestionName().length; i++) {

							if (i < myresultObj.internalQuestionName().length - 1) {
								answer_values += (parseInt(resultsArray[i].answer_value))
										+ ",";
							} else {
								answer_values += (parseInt(resultsArray[i].answer_value));
							}
							$("#openning").text("Results For " + resultsArray[0].name);
							// answer_values.push(parseInt(resultsArray[i].answer_value));
						}
					},
					complete : function(e) {
						console.log("test" + answer_values)

					}

				});
		return JSON.parse("[" + answer_values + "]");
	},
	GetMyOwnPerceptionTen : function() {
		var answer_values = "";
		$.ajax({

			type : "POST",
			url : "../../../test-client/actions/myperception",
			data : "{\"tmId\":\"" + myresultObj.GetltParameterByName("u")
					+ "\",\"surveyId\":\""
					+ "b60e23cb-186c-11e6-b870-80000ba99a60" + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;

				for (var i = 1; i <= myresultObj.questionName().length; i++) {
					$("#container" + i + "_my_perception").text(
							resultsArray[i - 1].answer_value);
				}
			}

		});
	}
}