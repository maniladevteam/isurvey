$(document)
		.ready(

				function() {
					if (!($.browser.chrome)) {
						alert("Kindly use Google Chrome");
						var message = '<p>When using other browsers,kindly copy and paste the URL address from your current browser to google chrome</p><p>Thank You!!</p>Dev Manila';
						$('body').html(
								"<p>Please use Google Chorme</p>" + message);
						return;
					}
					if (clientAseObj.IsAnswered(clientAseObj
							.GetAseParameterByName("s"), clientAseObj
							.GetAseParameterByName("u")) == undefined) {
						alert("You Already answered the survey!!!");
						window.location.href = "../client/welcome.jsp";
					} else {
						$("#search_ase_values")
								.click(
										function() {

											if ($("#ase_list_here").val() != undefined) {
												$("#saveasesurveyanswersv2")
														.css("visibility",
																"visible");
												clientAseObj
														.CreateAseDomElements(
																$(
																		"#ase_list_here")
																		.val(),
																$(
																		"#ase_list_here option:selected")
																		.attr(
																				"employee-name"),
																clientAseObj
																		.ReturnQuestionIds(),
																clientAseObj
																		.ReturnQuestionNames());

											} else {
												$("#testappendV2").html("");
												$("#saveasesurveyanswersv2")
														.css("visibility",
																"hidden");
												alert("Please choose ASE first!!");

												return false;
											}
											$("#protoype_two_table")
													.dataTable().fnDestroy();
										});

						$("#saveasesurveyanswersv2").click(function() {
							clientAseObj.GetAllTinyMCEValues();

						});

						/*
						 * CreateAseDomElements : function(employeeIds,
						 * employeeNames, questionId, questionNames) {
						 */
						clientAseObj.GetAseEmployees("4", "ase_list_here");
						/* clientAseObj.GetAseSurveyQuestions(""); */
						// clientAseObj.SetSurveyUUID(clientAseObj.GetAseParameterByName("s"));
						$("#saveasesurveyanswers").click(function() {
							clientAseObj.InserAllQuestionAndAnswerUUID();
						});
					}
				});
