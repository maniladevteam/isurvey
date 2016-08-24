'USE strict'
var client = client || {};

client.ClientObj = function() {
	var clientId;
	var clientUUId;
	var clientName;
	var clientSurveyId;
};

client.ClientObj.prototype = {
	
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

	GetClientName : function() {
		return this.clientName;
	},

	SetClientName : function(clientName) {
		this.clientName = clientName;
	},

	RenderClientSurveyFields : function(answerType, value, questionUUID,
			surveyId, index, questionId, isRequired) {
		var element = "";

		element = element + '<div class="form-group">';
		element = element + '<label for="' + questionUUID + "_" + surveyId
				+ '">' + index + " " + value
				+ (isRequired == "1" ? '<span class="required">*</span>' : "")
				+ "</label>";

		if (answerType == "1") {
			element = element + '<select '
					+ (isRequired == "1" ? "required" : "") + ' question-id="'
					+ questionId + '" element-type="sample" question-type="'
					+ answerType
					+ '" style="width:50%" class="form-control" id="'
					+ questionUUID + "_" + surveyId + '">';
			element = element + '<option value="">--</option>';
			/*element = element + '<option value="N/A">N/A</option>';*/
			element = element + '<option value="1">1 (Lowest)</option>';
			element = element + '<option value="2">2</option>';
			element = element + '<option value="3">3</option>';
			element = element + '<option value="4">4</option>';
			element = element + '<option value="5">5</option>';
			element = element + '<option value="6">6</option>';
			element = element + '<option value="7">7</option>';
			element = element + '<option value="8">8</option>';
			element = element + '<option value="9">9</option>';
			element = element
					+ '<option value="10">10 (Highest)</option></select></div>';
		} else if (answerType == "2") {
			element = element + '<select '
					+ (isRequired == "1" ? "required" : "") + 'question-id="'
					+ questionId + '" element-type="sample" question-type="'
					+ answerType
					+ '" style="width:50%" class="form-control" id="'
					+ questionUUID + "_" + surveyId + '">';
			element = element + '<option value="">--</option>';
			element = element + '<option value="N/A">N/A</option>';
			element = element
					+ '<option value="1">Did Not Meet (Lowest)</option>';
			element = element + '<option value="3">Partially Achieved</option>';
			element = element + '<option value="5">Acheived</option>';
			element = element + '<option value="7">Exceeded(Highest)</option>';
			element = element
					+ '<option value="10">Far Exceeded</option></select></div>';
		} else {
			element = element
					+ '<textarea id="'
					+ questionUUID
					+ "_"
					+ surveyId
					+ '"'
					+ ' class="form-control" '
					+ (isRequired == "1" ? "required" : "")
					+ ' question-id="'
					+ questionId
					+ '" element-type="sample" question-type="'
					+ answerType
					+ '" style="width:50%; resize:none;" class="form-control" rows="5" id="comment"></textarea></div>';
		}

		return element;
	},
	//GetSurveytobeAnsweredByRespondents
	GetSurveyForClient : function(surveyUUID) {
		var elementDOM = "  ";
		var surveyId = "";
		/* clientObj.ShowPreLoader(); */
		$
				.ajax({

					type : "POST",
					url : "../../../test-client/actions/getsurveydetails",
					data : "{\"surveyId\":\"" + surveyUUID + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;
						// answerType, value, questionUUID
						$("#survey_client_instructions").html( 
								resultsArray[0].instructions);
						for (var i = 0; i < resultsArray.length; i++) {

							elementDOM = elementDOM
									+ clientObj.RenderClientSurveyFields(
											resultsArray[i].answer_type_id,
											resultsArray[i].question_name,
											resultsArray[i].question_uuid,
											resultsArray[i].survey_id, parseInt(i) + 1 + ".",
											resultsArray[i].question_id,
											resultsArray[i].is_required);
							$("#survey_title")
									.text(resultsArray[i].survey_name);
							$("#survey_description")
									.text(
											clientObj
													.replaceHTMTags(resultsArray[i].survey_description));
							surveyId = resultsArray[i].survey_id;
						}
					},
					complete : function(e) {
						/* clientObj.HidePreLoader(); */
						if (clientObj.validateSurveyAndUser(surveyId)) {
							$("#appendClientSurvey").append(elementDOM);
						}

					},
					error : function(xhr) {
						var jsonResponse = JSON.parse(xhr.responseText);
						alert(jsonResponse.error);
					}
				});
	},
	getParameterByName : function(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
				.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(
				/\+/g, " "));
	},
	GetSurveyAnswers : function(surveyUUId, questionId, questionType,
			answerValue, userId, AnswerArray) {

		if (!(clientObj.ValidateAnswers(AnswerArray))) {
			alert("Please answer all the required fields");

		} else {
			$.ajax({
				async : false,
				type : "POST",
				url : "../../../test-client/actions/adduseranswer",
				data : "{\"surveyId\":\"" + surveyUUId + "\",\"questionId\":\""
						+ questionId + "\",\"questionType\":\"" + questionType
						+ "\",\"answerValue\":\"" + answerValue
						+ "\",\"userId\":\"" + userId + "\",\"uuid\":\"" + clientObj.getParameterByName("u") +"\"}",
				contentType : "application/x-www-form-urlencoded",
				dataType : "json",
				success : function(response) {
					
				},
				complete : function(e) {
					/*clientObj.AddSurveyUsermapping(surveyUUId, clientObj
							.getParameterByName("u"));*/
					window.location.href = "welcome.jsp";
				}
			});
		}
	},
	GetQuestionIdArray : function() {
		var QuestionIdArray = new Array();
		$(".form-control").each(function() {
			QuestionIdArray.push($(this).attr("question-id"));
		});

		return QuestionIdArray;
	},
	GetQuestionTypeArray : function() {
		var questionTypeArray = new Array();
		$(".form-control").each(function() {
			questionTypeArray.push($(this).attr("question-type"));
		});

		return questionTypeArray;
	},
	GetAnswerArray : function() {
		var AnswerValues = new Array();
		$(".form-control").each(function() {
			AnswerValues.push(this.value);
		});

		return AnswerValues;
	},
	SendSurveyAnswers : function() {
		var questionTypeArray = this.GetQuestionTypeArray();
		var AnswerArray = this.GetAnswerArray();
		var GetQuestionIdArray = this.GetQuestionIdArray();
		clientObj.ShowPreLoader();

		var textAnswers = "";

		for (var i = 0; i < questionTypeArray.length; i++) {

			if (i == (questionTypeArray.length - 1)) {
				textAnswers = textAnswers + clientObj.getParameterByName("s")
						+ "," + GetQuestionIdArray[i] + ","
						+ questionTypeArray[i] + "," + AnswerArray[i] + ","
						+ clientObj.GetClientId()
				clientObj.HidePreLoader();

			} else {

				textAnswers = textAnswers + clientObj.getParameterByName("s")
						+ "," + GetQuestionIdArray[i] + ","
						+ questionTypeArray[i] + "," + AnswerArray[i] + ","
						+ clientObj.GetClientId() + "~";
			}
		}

		// if (i == (questionTypeArray.length - 1)) {

		// }

		// surveyUUId, questionId, questionType, answerValue, userId

		clientObj.GetSurveyAnswers(clientObj.getParameterByName("s"), "", "",
				textAnswers, clientObj.GetClientId(), AnswerArray);
		console.log(textAnswers);

		return textAnswers;
	},
	validateSurveyAndUser : function(userId) {
		if (userId == undefined || userId == "" || userId == 0) {
			alert("Either you are not authorized to view this survey or this survey is no longer available!");
			window.location.href = "welcome.jsp";
			return false;

		}
		return true;
	},
	GetUserDetails : function(userUUID) {
		$.ajax({
			type : "POST",
			url : "../../../test-client/actions/getuserdetails",
			data : "{\"userId\":\"" + userUUID + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i++) {
					console.log(resultsArray[0].user_employee_id);
					clientObj.SetClientId(resultsArray[0].user_employee_id);
				}

			},
			complete : function(e) {
				if (clientObj.validateSurveyAndUser(clientObj.GetClientId())) {
					clientObj.GetSurveyForClient(clientObj
							.getParameterByName("s"));
				}
			}
		});
	},
	IsAnswered : function(surveyId, userId) {
		var is_valid = "";
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
							clientObj.GetUserDetails(clientObj
									.getParameterByName("u"));
						} else {
							alert("You Already answered the survey!!!");
							window.location.href = "welcome.jsp";
						}
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

				window.location.href = "welcome.jsp";
			}
		});
	},
	ShowPreLoader : function() {
		/* $.LoadingOverlay("show"); */
	},
	HidePreLoader : function() {
		/* $.LoadingOverlay("hide"); */
	},
	ValidateAnswers : function(answerArray) {
		console.log(answerArray);
		var isValid = false;
		if (jQuery.inArray("", answerArray) < 0) {
			isValid = true;
		}
		console.log(isValid);
		return isValid;
	},
	replaceHTMTags : function(stringtoReplace) {
		var stringReplaced = stringtoReplace.replace(/<p>/g, "");
		stringReplaced = stringReplaced.replace(/<\/p>/g, "");

		return "About Survey : " + stringReplaced;
	}

};