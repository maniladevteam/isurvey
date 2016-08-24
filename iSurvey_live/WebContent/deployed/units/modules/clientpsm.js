var clientPsm = clientPsm || {};

clientPsm.clientPsmObj = function() {
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
};

clientPsm.clientPsmObj.prototype = {

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

	GetPSMSurveyDetailsToSurvey : function(surveyId, userId) {
		clientPsmObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			async : false,
			url : "../../../deployed-psm/actions/getsurveydetails",
			data : "{\"surveyId\":\"" + surveyId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				$("#survey_instructions").html(resultsArray[0].instructions)
				clientPsmObj.GetPSMTeamManagers(userId, response, surveyId,
						userId);
				
			},
			complete : function(e) {
				clientPsmObj.HidePreLoader();
			},
			error : function(x, y, z) {

			}
			
		});
	},

	GetPSMTeamManagers : function(psmId, resultsArrayParam, surveyId, userId) {
		var data = "";

		$
				.ajax({
					type : "POST",
					async : false,
					url : "../../../deployed-psm/actions/getpsmteammanagers",
					data : "{\"userId\":\"" + psmId + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;
						data = data
								+ " <thead><tr><th id='question_part' style='overflow: hidden; width: 40%;'>Question Name</td>";
						for (var n = 0; n < resultsArray.length; n++) {
							data = data + "<th>"
									+ resultsArray[n].user_first_name + " "
									+ resultsArray[n].user_last_name + "</th>";
						}
						data = data + "</tr></thead><tbody>";

						for (var j = 0; j < resultsArrayParam.length; j++) {

							data = data + "<tr><td><span>" + [parseInt(j + 1)] + ". " 
									+ clientPsmObj.replaceSemiColon(resultsArrayParam[j].question_name)
									+ "<span></td>";
							for (var i = 0; i < resultsArray.length; i++) {
								data = data
										+ "<td style='width:100px'>"
										+ clientPsmObj
												.BuildTeamquestionforpsm(
														surveyId,
														resultsArrayParam[j].question_id,
														resultsArray[i].employee_id)
										+ "</td>";
							}
							data = data + "</tr>";
						}

					},
					complete : function(e) {
						$("#append_psm_tm_question_table").append(
								data + "</tbody>");

						$("#append_psm_tm_question_table").DataTable({
							scrollY : 400,
							scrollX : "100%",
							scrollCollapse : true,
							paging : false,
							"bInfo" : false,
							fixedColumns : true,
							"ordering" : false,
							"columnDefs" : [ {
								"width" : "100%",
								"targets" : 0
							} ],
							"bScrollAutoCss" : false

						});

					},
					error : function(x, y, z) {

					}

				});
	},

	BuildQuestionsForPSM : function(surveyId, questionId, tmId, psmId,
			questionName) {
		var data = "";
		data = data + "<tr>" + "<td>";

		return data;
	},
	BuildTeamquestionforpsm : function(surveyId, questionId, tmId, psmId) {
		var tmData = "";

		tmData = tmData + "<select question-id='" + questionId
				+ "' survey_for='" + tmId + "' class='psm_answer' id='"
				+ surveyId + "_" + questionId + "_" + tmId + "'>";
		tmData = tmData + "<option value='1'>(Lowest) 1</option>";
		tmData = tmData + "<option value='2'>2</option>";
		tmData = tmData + "<option value='3'>3</option>";
		tmData = tmData + "<option value='4'>4</option>";
		tmData = tmData + "<option value='5'>5</option>";
		tmData = tmData + "<option value='6'>6</option>";
		tmData = tmData + "<option value='7'>7</option>";
		tmData = tmData + "<option value='8'>8</option>";
		tmData = tmData + "<option value='9'>9</option>";
		tmData = tmData + "<option value='10'>(Highest)10</option>";
		tmData = tmData + "</select>";

		return tmData;

	},

	BuildTeamManagerList : function(numbersOfTm, tmName) {
		var tmList = "";

		tmList = tmList + "<tr><td>Question</td>";
		for (var i = 0; i < numbersOfTm; i++) {
			tmList = tmList + "<td>" + tmName + "</td>";
		}

		tmList = tmList + "</tr>";

		return tmList;

	},

	GetPsmParameterByName : function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
				.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(
				/\+/g, " "));
	},
	is_valid_user : function() {
		$
				.ajax({
					async : false,
					type : "POST",
					url : "../../../deployed-psm/actions/validateifrealuser",
					data : "{\"userId\":\""
							+ clientPsmObj.GetPsmParameterByName("u") + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;
						if (response[0].isvalid != "1") {
							alert("Either you are not authorized to view this survey or this survey is no longer available!");
							window.location.href = "../client/welcome.jsp";

							return false;
						}

					},
					complete : function(e) {

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
		var is_valid = "0";
		$
				.ajax({
					type : "POST",
					async : false,
					url : "../../../test-client/actions/validateusersurvey",
					data : "{\"userId\":\"" + userId + "\""
							+ ",\"surveyId\":\"" + surveyId + "\"" + "}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;
						for (var i = 0; i < resultsArray.length; i++) {
							is_valid = resultsArray[0].is_valid;
						}

					},
					complete : function(e) {
						if (is_valid == 1) {
							clientPsmObj.GetPSMSurveyDetailsToSurvey(
									clientPsmObj.GetPsmParameterByName("s"),
									clientPsmObj.GetPsmParameterByName("u"));
							$("#savepsmsurveyanswers").css("visibility",
									"visible");
						} else {
							alert("You Already answered the survey!!!");
							window.location.href = "../client/welcome.jsp";
						}
					},
					error : function(a, x, z) {
						alert("this survey has reported a problem. Kindly contact marangelo.delatorre@thomsonreuters.com");
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

	CollatePSMAnswers : function() {
		var data = "";
		$(".psm_answer").each(function() {
			data = data + $(this).attr("question-id") + ",";
			data = data + "1,";
			data = data + $(this).attr("survey_for") + ",";
			data = data + $(this).val() + "~";
		});

		console.log(data);

		return data;

	},
	sendSurveyAnswersPsm : function(userId, values, surveyId) {
		$.ajax({
			async : false,
			type : "POST",
			url : "../../../deployed-psm/actions/adduseranswerpsm",
			data : "{\"surveyId\":\"" + surveyId + "\",\"values\":\"" + values
					+ "\",\"userId\":\"" + userId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {

				clientPsmObj.AddSurveyUsermapping(surveyId, userId);
			},
			complete : function(e) {

			}
		});
	},
	AddSurveyUsermapping : function(surveyId, userId) {
		$.ajax({
			type : "POST",
			async : false,
			url : "../../../test-client/actions/addusersurvey",
			data : "{\"userId\":\"" + userId + "\"" + ",\"surveyId\":\""
					+ surveyId + "\"" + "}",
			contentType : "application/x-www-form-urlencoded", 
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {
				window.location.href = "../client/welcome.jsp";
			}
		});  
		
	},replaceSemiColon : function(textToReplace){
		var newText = textToReplace;
		newText = newText.replace(/;/g, '; ');
			
		return newText;  
	}

}