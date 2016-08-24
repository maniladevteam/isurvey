var clientAse = clientAse || {};

clientAse.clienAsetObj = function() {
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

clientAse.clienAsetObj.prototype = {

	GetClientSurveyId : function() {
		return this.clientSurveyId;
	},

	SetClientSurveyId : function(clientSurveyId) {
		this.clientSurveyId = clientSurveyId;
	},

	GetClientId : function() {
		return this.clientId;
	},

	SetClientId : function(clientId) {
		this.clientId = clientId;
	},

	GetClientUUId : function() {
		return this.clientUUId;
	},

	SetClientUUId : function(clientUUId) {
		this.clientUUId = clientUUId;
	},

	GetEmployeeId : function() {
		return this.employeeId;
	},

	SetEmployeeId : function(employeeId) {
		this.employeeId = employeeId;
	},

	GetSurveyUUID : function() {
		return this.surveyUUID;
	},

	SetSurveyUUID : function(surveyUUID) {
		this.surveyUUID = surveyUUID;
	},

	GetClientName : function() {
		return this.clientName;
	},

	SetClientName : function(clientName) {
		this.clientName = clientName;
	},

	GetAseSurveyDetailsToSurvey : function(surveyId, employeeId) {
		clientAseObj.ShowPreLoader();
		$("#saveasesurveyanswers").css("visibility", "visible");
		var localAseIds = [];
		var localAseNames = [];
		$.ajax({
			type : "POST",
			async : false,
			url : "../../../test-ase/action-ase/getasestobesurveyed",
			data : "{\"surveyId\":\"" + surveyId + "\"," + "\"employeeId\":\""
					+ employeeId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i++) {
					localAseIds.push(resultsArray[i].employee_id);
					localAseNames.push(resultsArray[i].emp_name);
				}
				localStorage.setItem("survey_ase_names", JSON
						.stringify(localAseNames));
				localStorage.setItem("survey_ase_id", JSON
						.stringify(localAseIds));
				clientAseObj.surveyAseNameArray = localAseNames;//
				clientAseObj.surveyAseIdArray = localAseIds;

			},
			complete : function(e) {

				clientAseObj.ConstructAseClientSurvey();
			},
			error : function(a, b, c) {
				/* var jsonResponse = JSON.parse(a.responseText); */
				alert("You are not authorized to answer the survey");
				localStorage.removeItem("question_uu_id");
				localStorage.removeItem("survey_ase_id");
				localStorage.removeItem("survey_ase_names");
				localStorage.removeItem("survey_questions");
				localStorage.removeItem("survey_questions_id");
				localStorage.removeItem("survey_questions_name");
				$("html").html("PLEASE CLOSE THE WINDOW");
				// alert(jsonResponse.error);
			}
		});
	},
	GetAseSurveyQuestions : function(surveyId, employeeId) {
		var localQuestionName = [];
		var localQuestionUUID = [];
		var localQuestionNonUUID = [];
		$.ajax({
			type : "POST",
			async : false,
			url : "../../../test-ase/action-ase/getasequestionsforsurvey",
			data : "{\"surveyId\":\"" + surveyId + "\"," + "\"employeeId\":\""
					+ employeeId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i++) {
					// clientAseObj.testArray.push(resultsArray[i].question_name);
					// localStorage.setItem("survey_quesetions",resultsArray[i].question_name);
					localQuestionName.push(resultsArray[i].question_name);
					localQuestionUUID.push(resultsArray[i].question_uuid);
					localQuestionNonUUID.push(resultsArray[i].question_id);
					// $("#survey_description").text(resultsArray[i].survey_description);
					$("#survey_title").text(resultsArray[0].survey_name);

				}
			},
			complete : function(e) {
				localStorage.setItem("survey_questions_id", JSON
						.stringify(localQuestionUUID));
				localStorage.setItem("survey_questions_non_uu_id", JSON
						.stringify(localQuestionNonUUID));

				localStorage.setItem("survey_questions_name", JSON
						.stringify(localQuestionName));
				clientAseObj.questionNameArray = (localQuestionName);
				clientAseObj.questionUUIDArray = localQuestionUUID;

			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});

	},

	GetQuestionNameArray : function(questionArray) {
		return questionArray;
	},

	GetSurveyDetails : function(surveyUUID, employeeUUID) {
		$.ajax({
			type : "POST",
			async : false,
			url : "../../../test-ase/action-ase/getaseclientdetailsforsurvey",
			data : "{\"surveyUUID\":\"" + surveyUUID + "\",\"employeeUUID\":\""
					+ employeeUUID + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;

				for (var i = 0; i < resultsArray.length; i++) {
					$("#survey_title").text(resultsArray[0].survey_name);
					clientAseObj.SetClientSurveyId(resultsArray[0].survey_id);
					clientAseObj
							.SetEmployeeId(resultsArray[0].user_employee_id);
				}

			},
			complete : function(e) {
				// console.log(clientAseObj.GetClientSurveyId());

				clientAseObj.GetAseSurveyQuestions(clientAseObj
						.GetClientSurveyId(), clientAseObj.GetEmployeeId());

				clientAseObj.GetAseSurveyDetailsToSurvey(clientAseObj
						.GetClientSurveyId(), clientAseObj.GetEmployeeId());
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});

	},

	GetAseParameterByName : function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
				.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(
				/\+/g, " "));
	},

	// TO DO: needs recoding
	ConstructAseClientSurvey : function() {
		var questionIdArray = JSON.parse(localStorage
				.getItem("survey_questions_id"));

		var questionNonUUIdArray = JSON.parse(localStorage
				.getItem("survey_questions_non_uu_id"));

		var questionNameArray = JSON.parse(localStorage
				.getItem("survey_questions_name"));
		var aseNameArray = JSON.parse(localStorage.getItem("survey_ase_names"));
		var aseIdArray = JSON.parse(localStorage.getItem("survey_ase_id"));

		var data = "<table height='100%' id='agent_question_table' width='100%' role='grid' style='font-size:small; "
				+ "class='table stripe row-border order-column'>";

		for (var i = 0; i < questionIdArray.length - 1; i++) {
			if (i == 0) {
				data = data + "<thead><tr>";
				data = data + "<th width='50%'>Questions</th>";
				for (var c = 0; c < aseNameArray.length; c++) {
					data = data + "<th>" + aseNameArray[c] + "</th>";
				}
				data = data + "</tr></thead><tbody>";

			}

			data = data + "<tr>";

			if (i < 5) {

				data = data
						+ "<th style='word-wrap: break-word' class='question-row' question-row-id='"
						+ questionIdArray[i]
						+ "'>"
						+ "<textarea  style='overflow:hidden;resize:none;' rows='6' cols='30' disabled>"
						+ questionNameArray[i] + "</textarea></th>";

				for (var j = 0; j < aseNameArray.length; j++) {
					data = data + "<td>" + "  <select id='"
							+ questionIdArray[i] + "_" + i + "_"
							+ aseIdArray[j] + "' sequence='" + parseInt(i + 1)
							+ "' class='answers-type-" + parseInt(i + 1)
							+ "' question-type='3' agent-id='" + aseIdArray[j]
							+ "'  question-question-uuid='"
							+ questionIdArray[i] + "'>"
							+ "<option value='N/A'>--</option>"
							+ "<option value='1'>1(lowest)</option>"
							+ "<option value='2'>2</option>"
							+ "<option value='3'>3</option>"
							+ "<option value='4'>4</option>"
							+ "<option value='5'>5</option>"
							+ "<option value='6'>6</option>"
							+ "<option value='7'>7</option>"
							+ "<option value='8'>8</option>"
							+ "<option value='9'>9</option>"
							+ "<option value='10'>10(Highest)</option>"
							+ "</select>" + "</td>";
				}
			}

			data = data + "</tr>";
		}

		data = data + "</tbody></table>";

		var datas = "<div class='form-group'>"
				+ "<label class='labael' for='ase_survey_comments_answer'> Comments <label><br /> "
				+ "<textarea id='ase_survey_comments_answer' rows=10; class='form-control' "
				+ "style='resize:none; min-width: 600px; min-heigth:200px'></textarea><div>";

		$("#testappend").append(data);

		$(datas).insertAfter("#testappend");
		/* $(datas).after("#testappend"); */
		$("#agent_question_table").DataTable({
			scrollY : 400,
			scrollX : "100%",
			scrollCollapse : true,
			paging : false,
			"bInfo" : false,
			fixedColumns : true,
			"ordering" : false,
			"columnDefs" : [ {
				"width" : "50%",
				"targets" : 0
			} ]

		});
		clientAseObj.HidePreLoader();
		tinymce.init({
			mode : "specific_textareas",
			selector : '#ase_survey_comments_answer',
			theme_advanced_disable : "sup,sub",
			editor_selector : "mceEditor",
			browser_spellcheck : true,
			statusbar : false
		});

	},

	InserAllQuestionAndAnswerUUID : function() {

		clientAseObj.InsertUpdateForvalidationAse(clientAseObj
				.GetAseParameterByName("u"), clientAseObj
				.GetAseParameterByName("s"));

	},
	GetFirstanswerArrayOfAnswers : function() {
		var answerone = [];
		$(".answers-type-1").each(function() {
			answerone.push($(this).val());
		});

		return answerone;
	},
	GetSecondanswerArrayOfAnswers : function() {
		var answertwo = [];
		$(".answers-type-2").each(function() {
			answertwo.push(this.value);
		});

		return answertwo;
	},
	GetThirdanswerArrayOfAnswers : function() {
		var answerthree = [];
		$(".answers-type-3").each(function() {
			answerthree.push(this.value);
		});

		return answerthree;
	},
	GetFourthanswerArrayOfAnswers : function() {
		var answerfour = [];
		$(".answers-type-4").each(function() {
			answerfour.push(this.value);
		});

		return answerfour;
	},

	GetFifthanswerArrayOfAnswers : function() {
		var answerfive = [];
		$(".answers-type-5").each(function() {
			answerfive.push(this.value);
		});

		return answerfive;
	},

	//
	GetFirstAseCollection : function() {
		var userIds1 = [];
		$(".answers-type-1").each(function() {
			userIds1.push($(this).attr("agent-id"));
		});

		return userIds1;
	},
	GetSecondAseCollection : function() {
		var userIds2 = [];
		$(".answers-type-2").each(function() {
			userIds2.push($(this).attr("agent-id"));
		});
		return userIds2;
	},
	GetThirdAseCollection : function() {
		var userIds3 = [];
		$(".answers-type-3").each(function() {
			userIds3.push($(this).attr("agent-id"));
		});
		return userIds3;
	},
	GetFourthAseCollection : function() {
		var userIds4 = [];
		$(".answers-type-4").each(function() {
			userIds4.push($(this).attr("agent-id"));
		});
		return userIds4;
	},

	GetCommentQuestionArrayOfAnswers : function() {

	},
	SaveAseAnswers : function() {
		this.InserAllQuestionAndAnswerUUID();
	},
	ConstructCodeParametersForInsertQuestion : function() {
		// noneuse
	},
	DecisionMakerAnswersCollection : function(intDecision) {
		switch (intDecision) {
		case 1:

			return clientAseObj.GetFirstanswerArrayOfAnswers();

			break;
		case 2:
			return clientAseObj.GetSecondanswerArrayOfAnswers();
			break;
		case 3:
			return clientAseObj.GetThirdanswerArrayOfAnswers();
			break;
		case 4:
			return clientAseObj.GetFourthanswerArrayOfAnswers();
			break;
		case 5:

			return clientAseObj.GetFifthanswerArrayOfAnswers();
			break;
		default:

			break;
		}
	},
	DecisionMakerAseCollection : function(intDecision) {
		switch (intDecision) {
		case 1:
			clientAseObj.GetFourthAseCollection();
			break;
		default:
			clientAseObj.GetFourthAseCollection();
		}
	},
	InsertUpdateForvalidationAse : function(employeeUUID, surveyUUID) {
		clientAseObj.ShowPreLoader();
		$
				.ajax({
					type : "POST",
					async : false,
					url : "../../../test-client/actions/addusersurvey",
					data : "{\"userId\":\"" + employeeUUID + "\""
							+ ",\"surveyId\":\"" + surveyUUID + "\"" + "}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;
						var questionIdArray = JSON.parse(localStorage
								.getItem("survey_questions_non_uu_id"));
						var counter = 1;
						for (var i = 0; i < 5; i++) {
							// 1,0,2,1,3,2,4,3,5,4
							$
									.ajax({
										type : "POST",
										async : false,
										url : "../../../test-ase/action-ase/saveclientasesurveyanswers",
										data : "{\"questionUUID\":\""
												+ questionIdArray[i]
												+ "\""
												+ ",\"answerValues\":\""
												+ clientAseObj
														.DecisionMakerAnswersCollection(counter)
												+ "\""
												+ ",\"surveyId\":\""
												+ clientAseObj.GetSurveyUUID()
												+ "\""
												+ ",\"answerType\":\""
												+ "1"
												+ "\""
												+ ",\"employeeId\":\""
												+ clientAseObj.GetEmployeeId()
												+ "\",\"aseIds\":\""
												+ clientAseObj
														.GetFirstAseCollection()
												+ "\"" + "}",
										contentType : "application/x-www-form-urlencoded",
										dataType : "json",
										success : function(response) {
											var resultsArray = (typeof response) == 'string' ? eval('('
													+ response + ')')
													: response;
										},
										complete : function(e) {

										},
										error : function(a, b, c) {

										}
									});
							counter = counter + 1;
						}

						clientAseObj.AddCommentToAseSurvey(clientAseObj
								.GetSurveyUUID(), "0", "3", clientAseObj
								.ReplaceStrings(tinymce.util.JSON
										.serialize(tinyMCE.get(
												"ase_survey_comments_answer")
												.getContent())), clientAseObj
								.GetEmployeeId());
					},
					complete : function(e) {
						alert("Thank you for Answering!!");
						window.location.href = "../client/welcome.jsp";
					},
					error : function(a, b, c) {

					}
				});
	},
	validateSurveyAndUser : function(userId) {
		if (userId == undefined || userId == "" || userId == 0) {
			alert("Either you are not authorized to view this survey or this survey is no longer available!");
			window.location.href = "../client/welcome.jsp";
			return false;

		}
		return true;
	},
	IsAnswered : function(surveyId, userId) {
		var is_valid = "";
		var survey_id = "";
		$.ajax({
			type : "POST",
			async : false,
			url : "../../../test-client/actions/validateusersurvey",
			data : "{\"userId\":\"" + userId + "\"" + ",\"surveyId\":\""
					+ surveyId + "\"" + "}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i++) {
					is_valid = resultsArray[0].is_valid;
					survey_id = resultsArray[0].survey_id
				}

			},
			complete : function(e) {
				if (is_valid == 1) {
					clientAseObj.GetSurveyDetailASE(survey_id);
				} else {
					alert("You Already answered the survey!!!");
					window.location.href = "../client/welcome.jsp";
				}
			}
		});
		return is_valid;

	},

	GetSurveyDetailASE : function(surveyId) {
		var questionIds = new Array();
		var questionNames = new Array();
		$.ajax({
			async : false,
			type : "POST",
			url : "../../../test-admin/action/getsurveydetail",
			data : "{\"surveyId\":\"" + surveyId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i += 1) {
					questionIds.push(resultsArray[i].question_id);
					questionNames.push(resultsArray[i].question_name);

				}

			},
			complete : function(e) {

			}
		});
		clientAseObj.conts_questionNames = questionNames;
		clientAseObj.conts_questionId = questionIds;
		return questionIds;
	},

	AddCommentToAseSurvey : function(surveyUUId, questionId, questionType,
			answerValue, userId) {
		$.ajax({
			async : false,
			type : "POST",
			url : "../../../test-client/actions/adduseranswer",
			data : "{\"surveyId\":\"" + surveyUUId + "\",\"questionId\":\""
					+ questionId + "\",\"questionType\":\"" + questionType
					+ "\",\"answerValue\":\"" + answerValue
					+ "\",\"userId\":\"" + userId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {

			},
			complete : function(e) {

			}
		});
	},
	ReplaceStrings : function(stringToReplace) {

		var text = stringToReplace;
		text = text.replace(/&#32;/g, ':&nbsp;');
		text = text.replace(/\n/g, '<br />');
		text = text.replace(/=/g, "$");
		text = text.replace(/\\"/g, "\\\\");
		// text = text.replace(/^style:/g, 'style=');
		text = text.substring(1, text.length - 1);

		return text;
	},
	ShowPreLoader : function() {

		$.LoadingOverlay("show");
	},

	HidePreLoader : function() {
		$.LoadingOverlay("hide");
	},
	GetAseEmployees : function(roleId, domName) {
		var data = "";
		$.ajax({
			async : false,
			type : "POST",
			url : "../../../test-ase/action-ase/getemployeesbyrole",
			data : "{\"roleId\":\"" + roleId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i += 1) {
					data = data + "<option value='"
							+ resultsArray[i].user_employee_id + "'"
							+ "employee-name='"
							+ resultsArray[i].user_first_name + " "
							+ resultsArray[i].user_last_name + "'" + ">"
							+ resultsArray[i].user_first_name + " "
							+ resultsArray[i].user_last_name + "</option>";
				}
				$("#" + domName).append(data);

			},
			complete : function(e) {
				$("#" + domName).multiselect({
					enableCaseInsensitiveFiltering : true,
					maxHeight : 200,
					enableFiltering : true,
					includeSelectAllOption : false,
					buttonWidth : '150px',
				/*onChange : function(option, checked) {
					// Get selected options.
					
				 * var selectedOptions =
				 * $('#example-limit
				 * option:selected');
					 
					var selectedOptions = $('#'
							+ domName
							+ ' option:selected');

					if (selectedOptions.length >= 3) {
						// Disable all other
						// checkboxes.
						if (selectedOptions.length > 3) {
							alert("You are only allowed to survey 3 ASE");
						}
						var nonSelectedOptions = $(
								'#' + domName
										+ ' option')
								.filter(
										function() {
											return !$(
													this)
													.is(
															':selected');
										});

						var dropdown = $(
								'#' + domName)
								.siblings(
										'.multiselect-container');
						nonSelectedOptions
								.each(function() {
									var input = $('input[value="'
											+ $(
													this)
													.val()
											+ '"]');
									input
											.prop(
													'disabled',
													true);
									input
											.parent(
													'li')
											.addClass(
													'disabled');
								});

					} else {
						// Enable all checkboxes.
						var dropdown = $(
								'#' + domName)
								.siblings(
										'.multiselect-container');
						$('#' + domName + ' option')
								.each(
										function() {
											var input = $('input[value="'
													+ $(
															this)
															.val()
													+ '"]');
											input
													.prop(
															'disabled',
															false);
											input
													.parent(
															'li')
													.addClass(
															'disabled');
										});
					}

				}*/
				});
			}
		});
	},
	GetAseToSurveyAndQuestion : function(aseIds, surveyId) {
		var data = "";

		$.ajax({
			type : "POST",
			url : "../../../test-ase/action-ase/getemployeesbyrole",
			data : "{\"surveyId\":\"" + surveyId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i += 1) {
					data = data + "<option value='"
							+ resultsArray[i].user_employee_id + "'>"
							+ resultsArray[i].user_first_name + " "
							+ resultsArray[i].user_last_name + "></option>";
				}
				$("#" + domName).append(data);

			},
			complete : function(e) {

			}
		});
	},
	ReturnQuestionTest : function() {

	},
	CreateAseDomElements : function(employeeIds, employeeNames, questionId,
			questionNames) {
		$("#protoype_two_table").html("");

		var newEmps = [];
		var aseEmpIds = [];
		for (var x = 0; x < employeeIds.length; x += 1) {
			aseEmpIds.push("00" + employeeIds[x]);
		}
		$("#ase_list_here option:selected").each(function() {
			var $this = $(this);
			if ($this.length) {
				var selText = $this.text();
				newEmps.push(selText);
			}
		});

		var data = "";
		data = data
				+ "<thead><tr><th style='word-wrap: break-word;word-wrap: break-word !important; white-space: nowrap;'>Question Name</th>";
		$
				.each(
						employeeIds,
						function(i, val) {

							data = data
									+ "<th style='word-wrap: break-word;word-wrap: break-word !important; white-space: nowrap;'>";
							data = data + "<span>"
									+ clientAseObj.ReturnBR(newEmps[i])
									+ "</span>";
							data = data + "</th>";

						});
		data = data + "</tr></thead><tbody>";

		$
				.each(
						questionNames,
						function(h, val) {

							data = data + "<tr>";
							data = data
									+ "<td style='word-wrap: break-word;word-wrap: break-word !important; white-space: nowrap;'>";
							data = data + questionNames[h];
							data = data + "</td>";

							$
									.each(
											employeeIds,
											function(k, test) {
												data = data
														+ "<td style='word-wrap: break-word;word-wrap: break-word !important; white-space: nowrap;'>";
												data = data
														+ "<select "
														+ "question-id='"
														+ questionId[h]
														+ "'"
														+ " survey_for='"
														+ employeeIds[k]
														+ "' class='"
														+ "survey_answers"
														+ "'>"
														+ clientAseObj
																.AppenedAnswer()
														+ "</select>";
												data = data + "</td>";
											});

							data = data + "</tr>";

						});
		$("#protoype_two_table").append(data + "</tbody>");
		clientAseObj.CreateCommentBox(aseEmpIds, newEmps);
		$("#protoype_two_table").DataTable({

			"bDestroy" : true,
			"destroy" : true,
			scrollY : 1000,
			scrollX : "100%",
			scrollCollapse : true,
			paging : false,
			"bInfo" : false,

			"ordering" : false,
			"columnDefs" : [ {
				"width" : "50%",
				"targets" : 0
			} ]
		});

	},
	AppenedAnswer : function() {
		var data = "<option value='1'>1(lowest)</option>"
				+ "<option value='2'>2</option>"
				+ "<option value='3'>3</option>"
				+ "<option value='4'>4</option>"
				+ "<option value='5'>5</option>"
				+ "<option value='6'>6</option>"
				+ "<option value='7'>7</option>"
				+ "<option value='8'>8</option>"
				+ "<option value='9'>9</option>"
				+ "<option value='10'>10(Highest)</option>";

		return data;

	},
	ReturnQuestionNames : function() {
		var questionNames = clientAseObj.conts_questionNames;

		return questionNames;
	},
	ReturnQuestionIds : function() {
		var ReturnQuestionIds = clientAseObj.conts_questionId;

		return ReturnQuestionIds;
	},
	CreateCommentBox : function(employeeIds, names) {
		$("#testappendV2Comment").html("");
		var data = "<div class='container-fluid'>";

		$.each(employeeIds, function(i, val) {
			/* data = data + "<div>"; */
			/*
			 * data = data + "<span>" + employeeIds[i] + "</span><br />";
			 */data = data + "<textarea placeholder='Comment for "
					+ clientAseObj.RemoveWilFromTheString(names[i])
					+ " (mimimum of 10 words)'" + " cols='100' rows='5' id='"
					+ employeeIds[i] + "' class='tinymce'></textarea><br />";

		});
		data = data + "</div>";

		$("#testappendV2Comment").append(data);
		$("#tinymce").css("placeholder", "test");
		tinymce.remove();
		$.each(employeeIds, function(j, val) {
			tinymce.init({
				plugins : "placeholder",
				theme_advanced_disable : "sup,sub",
				browser_spellcheck : true,
				statusbar : false,
				menubar : false,
				toolbar : "false",
				destroy : true
			});
			tinymce.EditorManager.execCommand('mceRemoveEditor', true, val);
			tinymce.EditorManager.execCommand('mceAddEditor', true, val);

		});

	},
	ReturnOnlyEmployeeName : function(employeeInfo) {
		var employeeName = employeeInfo.substring(7, employeeInfo.length);

		return employeeName;
	},
	ValidateIfLessThanTen : function(textHere) {

		var regex = /\s+/gi;
		var words = textHere.trim().replace(regex, ' ').split(' ').length;

		if (words < 10) {
			return false;
		}

		return true;
	},
	GetAllTinyMCEValues : function() {
		var comments = new Array();
		var word = "";
		for (i = 0; i < tinyMCE.editors.length; i++) {
			if (!clientAseObj.ValidateIfLessThanTen(tinyMCE.editors[i]
					.getContent())) {
				alert("You did not met the criteria for adding a comment!! on comment number : "
						+ (parseInt(i) + 1));
				return;
			}

			comments.push(tinyMCE.editors[i].getContent());
		}

		clientAseObj.GetASeSurveyAnswers(clientAseObj
				.GetAseParameterByName("s"), "", "", clientAseObj
				.CollateDataForSendOut(), clientAseObj
				.GetAseParameterByName("u"), "", comments);

	},
	ValidateAnswerValues : function(textWord) {
		var text = textWord.substring(0, textWord.indexOf(" "));

		if (toLower(text) == "not applicable" || toLower(text) == "na"
				|| toLower(text) == "na" || toLower(text) == "okay"
				|| toLower(text) == "ok" || toLower(text) == "o kay"
				|| toLower(text) == "o k") {
			return false;
		}
		return true;
	},
	ReturnBR : function(empName) {
		var returnedText = "";

		returnedText = empName.replace(" ", "<br />");

		return returnedText;
	},

	GetAnswersArray : function() {
		var answers = new Array();
		$(".survey_answers").each(function() {
			answers.push(this.value);
		});

		return answers;
	},
	GetQuestionArray : function() {
		var question = new Array();
		$(".survey_answers").each(function() {
			question.push($(this).attr("question-id"));
		});

		return question;
	},
	GetSurveyArray : function() {
		var surveyfor = new Array();
		$(".survey_answers").each(function() {
			surveyfor.push($(this).attr("survey_for"));
		});

		return surveyfor;
	},

	CollateDataForSendOut : function() {
		var GetQuestionIdArray = this.GetQuestionArray();
		var AnswerArray = this.GetAnswersArray();
		var GetSurveyArray = this.GetSurveyArray();
		/* clientAseObj.ShowPreLoader(); */

		var textAnswers = "";

		for (var i = 0; i < GetQuestionIdArray.length; i++) {

			if (i == (GetQuestionIdArray.length - 1)) {
				textAnswers = textAnswers
						+ clientAseObj.getParameterByName("s") + ","
						+ GetQuestionIdArray[i] + "," + GetSurveyArray[i] + ","
						+ AnswerArray[i];
			} else {

				textAnswers = textAnswers
						+ clientAseObj.getParameterByName("s") + ","
						+ GetQuestionIdArray[i] + "," + GetSurveyArray[i] + ","
						+ AnswerArray[i] + "~";
			}
		}
		return textAnswers;
	},
	getParameterByName : function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
				.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(
				/\+/g, " "));
	},
	GetASeSurveyAnswers : function(surveyUUId, questionId, questionType,
			answerValue, userId, AnswerArray, comments) {

		$.ajax({
			async : false,
			type : "POST",
			url : "../../../test-client/actions/adduseranswerase",
			data : "{\"surveyId\":\"" + surveyUUId + "\",\"questionId\":\""
					+ questionId + "\",\"questionType\":\"" + questionType
					+ "\",\"answerValue\":\"" + answerValue
					+ "\",\"userId\":\"" + userId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				clientAseObj.CollateCommentForSendOut(surveyUUId, questionId,
						questionType, answerValue, userId, AnswerArray,
						comments);

			},
			complete : function(e) {
				alert("Thank you for answering");
				window.location.href = "../client/welcome.jsp";
			}
		});
	},
	ReturnThisValue : function(thisValue) {
		return thisValue;
	},
	GetAllCommentsForSave : function(surveyUUId, questionId, questionType,
			answerValue, userId, AnswerArray) {
		$.ajax({
			async : false,
			type : "POST",
			url : "../../../test-client/actions/addusercommentase",
			data : "{\"surveyId\":\"" + surveyUUId + "\",\"questionId\":\""
					+ questionId + "\",\"questionType\":\"" + questionType
					+ "\",\"answerValue\":"
					+ tinymce.util.JSON.serialize(answerValue)
					+ ",\"userId\":\"" + userId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {

			},
			complete : function(e) {
				
			}
		});
	},
	CollateCommentForSendOut : function(surveyUUId, questionId, questionType,
			answerValue, userId, AnswerArray, comments) {

		console.log(typeof (comments));

		var AnswerArray = comments;
		var GetQuestionIdArray = this.GetQuestionArray();
		var GetSurveyArray = this.GetSurveyArray();
		/* clientAseObj.ShowPreLoader(); */

		var textAnswers = "";

		for (var i = 0; i < AnswerArray.length; i++) {

			if (i == (AnswerArray.length - 1)) {
				textAnswers = textAnswers
						+ clientAseObj.getParameterByName("s") + "|"
						+ "0000000" + "|" + GetSurveyArray[i] + "|"
						+ AnswerArray[i];
			} else {
				textAnswers = textAnswers
						+ clientAseObj.getParameterByName("s") + "|"
						+ "0000000" + "|" + GetSurveyArray[i] + "|"
						+ AnswerArray[i] + "|~";
			}
		}
		console.log(tinymce.util.JSON.serialize(textAnswers));
		clientAseObj.GetAllCommentsForSave(surveyUUId, questionId,
				questionType, textAnswers, userId, "");
	},  
	RemoveWilFromTheString : function(strname) {

		var test = strname;
		test = test.replace("Wil", '');
		test = test.replace("William", '');

		return test;
	}
}
