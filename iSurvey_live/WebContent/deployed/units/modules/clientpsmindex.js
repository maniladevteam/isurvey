$(document)
		.ready(
				function() {

					if ($.browser.chrome) {
						
						clientPsmObj.SetClientUUId(clientPsmObj
								.GetPsmParameterByName("u"));
						clientPsmObj.SetSurveyUUID(clientPsmObj
								.GetPsmParameterByName("s"));
						
						clientPsmObj.IsAnswered(clientPsmObj
								.GetPsmParameterByName("s"), clientPsmObj
								.GetPsmParameterByName("u"));
						
						
						
						$("#savepsmsurveyanswers").click(
								function() {
									clientPsmObj.sendSurveyAnswersPsm(clientPsmObj.GetClientUUId(),
											clientPsmObj.CollatePSMAnswers() , clientPsmObj.GetSurveyUUID() );
								});
					} else {
						alert("Kindly use Google Chrome");
						var message = '<p>When using other browsers,kindly copy and paste the URL address from your current browser to google chrome</p><p>Thank You!!</p>Dev Manila';
						$('body').html(
								"<p>Please use Google Chorme</p>" + message);

					}

				});