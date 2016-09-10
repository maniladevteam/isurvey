var adminObj = adminObj || {};

adminObj.adminObj = function() {
	var userId;
	var surveyUUID;
	
};

adminObj.adminObj.prototype = {

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

	CreateNewSurvey : function(surveyName, surveyDescription, surveyCreator,
			isAnonymous, surveyType, startDate, endDate) {
		$("#page_header").hide();
		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/addnewsurvey",
			data : "{\"surveyName\":\""
					+ surveyName
					+ "\""
					+ ",\"surveyDesc\":\""
					+ adminObj.ReplaceStrings(tinymce.util.JSON
							.serialize(surveyDescription)) + "\","
					+ "\"surveyCreator\":\"" + surveyCreator + "\","
					+ "\"isAnonymous\":\"" + ((isAnonymous) ? "0" : "1")
					+ "\"," + "\"surveyType\":\"" + surveyType + "\","
					+ "\"startDate\":\"" + startDate + "\"," + "\"endDate\":\""
					+ endDate + "\"" + "}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;

				globalObj.SetSurveyUUID(response.surveyId);
				adminObj.SaveSurveyRecepientType(response.surveyId, globalObj
						.GetSurveyType());
				adminObj.AddRecepienTypeListEmails(response.surveyId);
				alert("sucess");
				globalObj.ShowCreateSurveyPage();
				// globalObj.ReadActiveSurvey();
			},
			complete : function(e) {
				$('#myModal').modal('toggle');

				globalObj.HidePreLoader();
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});

	},
	ArchiveSurvey : function(surveyUuId) {

	},
	SaveSurvey : function(surveyUUID) {
		$("#active_reports_display").hide();
		var questions = this.GetAllQuestionForSurveySave();
		var answers = this.GetAnswerType();
		var questionUUID = this.GetAllQuestionUUIDforSave();
		var isRequired = this.GetAllRequiredQuestion();
		var sequence = this.GetAllQuestionForSurveySaveSequence();

		for (var i = 0; i < questions.length; i++) {

			globalObj.ShowPreLoader();

			this.SendSaveSurveyAllDetails(globalObj.GetSurveyUUID(),
					questions[i], answers[i], questionUUID[i], isRequired[i],
					sequence[i]);
		}
		globalObj.HidePreLoader();
		alert("success");
		globalObj.ReadActiveSurvey();
		questions = [];

	},

	UpdateSurvey : function(surveyUUID) {
		$("#active_reports_display").hide();
		var questions = this.GetAllQuestionForSurveySaveUpdate();
		var answers = this.GetAnswerTypeUpdate();
		var questionUUID = this.GetAllQuestionUUIDforSaveUpdate();
		var isRequired = this.GetAllRequiredQuestionUpdate();
		var sequence = this.GetAllQuestionForSurveySaveSequenceUpdate();

		for (var i = 0; i < questions.length; i++) {

			globalObj.ShowPreLoader();

			this.SendSaveSurveyAllDetails(globalObj.GetSurveyUUID(),
					questions[i], answers[i], questionUUID[i], isRequired[i],
					sequence[i]);
		}
		globalObj.HidePreLoader();
		alert("success");
		globalObj.ReadActiveSurvey();
		questions = [];

	},
	GetAnswerType : function() {
		var answerType = [];
		$("." + globalObj.GetSurveyUUID()).each(function() {
			answerType.push(this.value);
		});

		return answerType;
	},
	GetAllQuestionForSurveySave : function() {

		var question = [];
		$("input[question-survey-id='" + globalObj.GetSurveyUUID() + "'").each(
				function() {

					if (this.value != "")
						question.push(adminObj.ReplaceCaharacters(this.value));
				});

		return question;

	},
	GetAllQuestionForSurveySaveSequence : function() {
		var sequence = [];
		$("input[question-survey-id='" + globalObj.GetSurveyUUID() + "'").each(
				function() {
					sequence.push($(this).attr("question-sequence"));
				});

		return sequence;
	},
	GetAllRequiredQuestion : function() {
		var is_required = [];
		$("input[option-type='is-required'").each(function() {
			is_required.push(($(this).is(":checked") == true ? "1" : "0"));
		});

		return is_required;
	},
	GetAllQuestionUUIDforSave : function() {
		var questionUUID = [];
		$("input[question-survey-id='" + globalObj.GetSurveyUUID() + "'").each(
				function() {
					questionUUID.push($(this).attr("question-id"));
				});

		return questionUUID;
	},

	GetAnswerTypeUpdate : function() {
		var answerType = [];
		$("." + globalObj.GetSurveyUUID() + "-update").each(function() {
			answerType.push(this.value);
		});

		return answerType;
	},
	GetAllQuestionForSurveySaveUpdate : function() {

		var question = [];
		$("input[question-survey-id-update='" + globalObj.GetSurveyUUID() + "'")
				.each(function() {

					if (this.value != "")
						question.push(adminObj.ReplaceCaharacters(this.value));
				});

		return question;

	},
	GetAllQuestionForSurveySaveSequenceUpdate : function() {
		var sequence = [];
		$("input[question-survey-id-update='" + globalObj.GetSurveyUUID() + "'")
				.each(function() {
					sequence.push($(this).attr("question-sequence-update"));
				});

		return sequence;
	},
	GetAllRequiredQuestionUpdate : function() {
		var is_required = [];
		$("input[option-type='is-required-update'").each(function() {
			is_required.push(($(this).is(":checked") == true ? "1" : "0"));
		});

		return is_required;
	},
	GetAllQuestionUUIDforSaveUpdate : function() {
		var questionUUID = [];
		$("input[question-survey-id-update='" + globalObj.GetSurveyUUID() + "'")
				.each(function() {
					questionUUID.push($(this).attr("question-id-update"));
				});

		return questionUUID;
	},

	SendSaveSurveyAllDetails : function(surveyId, quesetionName, answerTypeId,
			questionUUid, isRequired, sequence) {

		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/addnewquesetion",
			data : "{\"surveyId\":\"" + surveyId + "\""
					+ ",\"quesetionName\":\"" + quesetionName + "\","
					+ "\"answerTypeId\":\"" + answerTypeId
					+ "\",\"questionUUid\":\"" + questionUUid
					+ "\",\"isRequired\":\""
					+ (isRequired == "" ? "0" : isRequired)
					+ "\",\"sequence\":\"" + sequence + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {
				globalObj.HidePreLoader();

			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});

	},

	DeleteSurveyQuestion : function(surveyId) {
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/deleteforupdatequestion",
			data : "{\"surveyId\":\"" + surveyId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				adminObj.UpdateSurvey(surveyId);
			},
			complete : function(e) {

			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},

	EmailSurveyToRespondents : function(surveyId, message) {
		var objects = "";
		globalObj.ShowPreLoader();
		if (globalObj.GetType() == "1") {
			$.ajax({
				type : "POST",
				url : "../../../test-admin/action/sendemail",
				data : "{\"origin\":\"" + window.location.origin + "\",\"surveyId\":\""
						+ globalObj.GetSurveyId()
						+ "\",\"message\":\""
						+ adminObj.ReplaceStrings(tinymce.util.JSON
								.serialize(tinyMCE.get("email_message")
										.getContent())) + "\"" + ",\"type\":\""
						+ globalObj.GetType() + "\"}",
				contentType : "application/x-www-form-urlencoded",
				dataType : "json",
				success : function(response) {
					var resultsArray = (typeof response) == 'string' ? eval('('
							+ response + ')') : response;
				},
				complete : function(e) {
					console.log(adminObj.ReplaceStrings(tinymce.util.JSON
							.serialize(tinyMCE.get("email_message")
									.getContent())));
					$('#emailModal').modal('toggle');
					globalObj.HidePreLoader();
					globalObj.ReadActiveSurvey();
					alert("email sent!!");

				},
				error : function(xhr) {
					var jsonResponse = JSON.parse(xhr.responseText);
					alert(jsonResponse.error);
				}
			});
		} else {
			$.ajax({
				type : "POST",
				url : "../../../test-admin/action/senasedemail",
				data : "{\"surveyId\":\""
						+ globalObj.GetSurveyId()
						+ "\",\"message\":\""
						+ adminObj.ReplaceStrings(tinymce.util.JSON
								.serialize(tinyMCE.get("email_message")
										.getContent())) + "\"" + ",\"type\":\""
						+ globalObj.GetType() + "\"}",
				contentType : "application/x-www-form-urlencoded",
				dataType : "json",
				success : function(response) {
					var resultsArray = (typeof response) == 'string' ? eval('('
							+ response + ')') : response;
				},
				complete : function(e) {
					console.log(adminObj.ReplaceStrings(tinymce.util.JSON
							.serialize(tinyMCE.get("email_message")
									.getContent())));
					$('#emailModal').modal('toggle');
					globalObj.HidePreLoader();
					globalObj.ReadActiveSurvey();
					alert("email sent!!");

				},
				error : function(xhr) {
					var jsonResponse = JSON.parse(xhr.responseText);
					alert(jsonResponse.error);
				}
			});

		}
	},

	ReplaceCaharacters : function(stringText) {
		var NewstringText = "";
		NewstringText = stringText.replace(/(?:\r\n|\r|\n)/g, '<br />');
		NewstringText = stringText.replace(/[^\w\s]/gi, ' ');

		return NewstringText;
	},
	SaveSurveyRecepientType : function(surveyId, surveyType) {
		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/savesurveyrecepienttype",
			data : "{\"surveyId\":\"" + surveyId + "\"," + "\"surveyType\":\""
					+ surveyType + "\"" + "}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {
				globalObj.HidePreLoader();
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},
	GetMultipleValues : function(elementId) {

		return $("#" + elementId).val();
	},
	AddRecepienTypeListEmails : function(surveyId) {
		var recepients = [];
		switch (globalObj.GetSurveyType()) {
		case "1":
			recepients = adminObj.GetMultipleValues("wg_reciepient_list");
			break;
		case "2":
			recepients = adminObj.GetMultipleValues("tm_reciepient_list");
			break;
		case "3":
			recepients = adminObj
					.GetMultipleValues("individual_reciepient_list");
			break;
		}

		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/addrecepienttypeemails",
			data : "{\"recepients\":\"" + recepients + "\","
					+ "\"surveyType\":\"" + globalObj.GetSurveyType() + "\""
					+ ",\"surveyId\":\"" + surveyId + "\"" + "}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {
				globalObj.HidePreLoader();
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},
	DownloadExcel : function() {
		window.open('../../../Reports?sn='
				+ $("#survey_list option:selected").text() + "&surveyId="
				+ $("#survey_list option:selected").attr("survey-uu-id")
				+ "&ano=" + globalObj.GetSurveyIsAnonymous(), '_blank', '');
	},
	AddToFollowUpCount : function(surveyId, message) {
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/addtofollowupemail",
			data : "{\"surveyId\":\"" + surveyId + "\"," + "\"message\":\""
					+ message + "\"" + "}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {
				globalObj.HidePreLoader();
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},
	UpdateSurveyDates : function(surveyId, startDate, endDate) {
		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/updatesurveydates",
			data : "{\"surveyUUID\":\"" + surveyId + "\"," + "\"startDate\":\""
					+ startDate + "\",\"endDate\":\"" + endDate + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				alert("Update Successful");
			},
			complete : function(e) {
				$('#otherSurveyDetails').modal('toggle');
				globalObj.HidePreLoader();
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},
	GetAllSurveyRecepientsForUpdate : function(surveyId) {
		// globalObj.ShowPreLoader();

		$('#recepients_for_email_survey').empty();
		var data = "";
		$
				.ajax({
					type : "POST",
					url : "../../../test-admin/action/getsurveyrecepientsforupdate",
					data : "{\"surveyId\":\"" + surveyId + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						data = data
								+ "<thead><tr><th>email</th><th>Delete</th></tr></thead><tbody>";

						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;

						for (var i = 0; i < resultsArray.length; i++) {
							data = data + "<tr>";
							data = data + "<td>"
									+ resultsArray[i].email_address + "</td>";
							data = data
									+ "<td>"
									+ "<a href='javascript:void(0)' onclick='adminObj.DeleteRecepientEmailUpdate(globalObj.GetSurveyUUID(),\""
									+ resultsArray[i].email_address
									+ "\")'>Delete</a>" + "</td></tr>";
						}
						// data = data + "<tr><td align='right' colspan='3'><a
						// href='javscript:void(0)'
						// onclick=''>Add</a></td></tr>";

					},
					complete : function(e) {

						$("#recepients_for_email_survey").append(
								data + "</tbody>");

						$("#recepients_for_email_survey").DataTable({
							"scrollX" : false,
							"destroy" : true
						});

						/* globalObj.HidePreLoader(); */
					},
					error : function(xhr) {
						var jsonResponse = JSON.parse(xhr.responseText);
						alert(jsonResponse.error);
					}
				});
	},

	DeleteRecepientEmailUpdate : function(surveyId, emailAdd) {
		var confirmDelete = confirm("Are you sure you want this recepient to be deleted?");
		if (confirmDelete == true) {
			var data = "";
			$.ajax({
				type : "POST",
				url : "../../../test-admin/action/deletefromcepients",
				data : "{\"surveyId\":\"" + surveyId + "\",\"emailAdd\":\""
						+ emailAdd + "\"}",
				contentType : "application/x-www-form-urlencoded",
				dataType : "json",
				success : function(response) {
					adminObj.GetAllSurveyRecepientsForUpdate(globalObj
							.GetSurveyUUID());
					alert("Delete Successful");
				},
				complete : function(e) {

				}
			});
		} else {
			return false;
		}
	},
	AppendASERoster : function() {

	},
	AddRecepientUpdate : function() {

		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/addrecepienttypeemails",
			data : "{\"recepients\":\"" + $("#email_update_recepient").val()
					+ "\"," + "\"surveyType\":\"" + '4' + "\""
					+ ",\"surveyId\":\"" + globalObj.GetSurveyUUID() + "\""
					+ "}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {
				alert("Adding successful!!");
				globalObj.HidePreLoader();
				adminObj.GetAllSurveyRecepientsForUpdate(globalObj
						.GetSurveyUUID());
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},
	CreateNewAseSurvey : function() {

	},
	GetAmersShiftForSurvey : function() {
		var regionChecked = [];
		$(".amers_shift_class").each(function() {
			if ($(this).is(":checked")) {
				regionChecked.push($(this).attr("chk-val"));
			}
		});

		return regionChecked;

	},
	GetApacShiftForSurvey : function() {
		var regionChecked = [];
		$(".apac_shift_class").each(function() {
			if ($(this).is(":checked")) {
				regionChecked.push($(this).attr("chk-val"));
			}
		});

		return regionChecked;

	},
	GetEmeaShiftForSurvey : function() {
		var regionChecked = [];
		$(".emea_shift_class").each(function() {
			if ($(this).is(":checked")) {
				regionChecked.push($(this).attr("chk-val"));
			}
		});

		return regionChecked;

	},
	SaveNewAseSurvey : function(quarter, year) {

		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-ase/action-ase/savenewasesurvey",
			data : "{\"surveyName\":\"" + "ASE survey for quarter " + quarter
					+ " of year " + year + "\"" + ",\"surveyDesc\":\""
					+ "ASE survey for year : " + year + " quarter :" + "\","
					+ "\"surveyCreator\":\"" + "Admin-ASE" + "\","
					+ "\"isAnonymous\":\"" + "0" + "\"," + "\"surveyType\":\""
					+ "2" + "\"," + "\"quarter\":\"" + quarter + "\","
					+ "\"year\":\"" + year + "\"" + "}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;

				globalObj.SetSurveyUUID(response.surveyId);

			},
			complete : function(e) {
				$('#aseModal').modal('toggle');
				globalObj.HidePreLoader();
				globalObj.ReadActiveSurvey();
				alert("Saving Successful!!");
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},

	SaveSurveyAseRecepients : function(employeesShfit, aseShift, surveyId,
			asetype) {
		// globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-ase/action-ase/saveaserecepient",
			data : "{\"shiftIdFor\":\"" + employeesShfit + "\","
					+ "\"shiftIdTo\":\"" + aseShift + "\",\"surveyId\":\""
					+ surveyId + "\",\"surveytype\":\"" + asetype + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {

			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},
	
	SendEmailQualitySurveyPSM : function(surveyUUID) {
		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/sendemailpsm",
			data : "{\"origin\":\"" + window.location.origin + "\",\"surveyId\":\"" +  surveyUUID +"\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {
				globalObj.HidePreLoader();
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},
	SendEmailQualitySurveyTmOne : function(surveyUUID,SurveyUUIDTm) {
		
		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/sendemailtm",
			data : "{\"origin\":\"" + window.location.origin + "\",\"surveyId\":\"" +  surveyUUID + "\",\"surveyIdTm\":\"" +  SurveyUUIDTm +"\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {
				globalObj.HidePreLoader();
				
				
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	},
	SendEmailQualitySurveyAgent : function(surveyUUID) {
		
		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/sendemailagent",
			data : "{\"origin\":\"" + window.location.origin + "\",\"surveyId\":\"" +  surveyUUID +"\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
			},
			complete : function(e) {
				globalObj.HidePreLoader();
				
				$("#psmModal").modal("toggle");
			},
			error : function(xhr) {
				var jsonResponse = JSON.parse(xhr.responseText);
				alert(jsonResponse.error);
			}
		});
	}
	
	
};