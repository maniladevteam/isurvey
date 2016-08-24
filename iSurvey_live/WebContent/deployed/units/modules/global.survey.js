var global = global || {};

global.globalObj = function() {
	var userId;
	var surveyUUID;
	var surveyId;
	var surveyName;
	var currentPage;
	var topBoxtwoCatgories = "";
	var surveyType = "";
	var recepientType = "";
	var surveyIsAnonymous = "0";
	var elementCounters = "0";
	var questionSequence = "0";
	var type = "";
};

global.globalObj.prototype = {

	SetSurveyRecepientType : function(recepientType) {
		this.recepientType = recepientType;
	},
	GetSurveyRecepientType : function() {
		return this.recepientType;
	},
	

	SetType : function(type) {
		this.type = type;
	},
	GetType : function() {
		return this.type;
	},

	SetSurveyId : function(surveyId) {
		this.surveyId = surveyId;
	},
	GetSurveyId : function() {
		return this.surveyId;
	},

	SetSurveyName : function(surveyName) {
		this.surveyName = surveyName;
	},
	GetSurveyName : function() {
		return this.surveyName;
	},

	SetSurveyIsAnonymous : function(surveyIsAnonymous) {
		this.surveyIsAnonymous = surveyIsAnonymous;
	},
	GetSurveyIsAnonymous : function() {
		return this.surveyIsAnonymous;
	},

	SetSurveyType : function(surveyTpe) {
		this.surveyType = surveyTpe;
	},
	GetSurveyType : function() {
		return this.surveyType;
	},
	SetSurveyUUID : function(uuid) {
		this.surveyUUID = uuid;
	},
	GetSurveyUUID : function() {
		return this.surveyUUID;
	},
	SetCurrentpage : function(currentPage) {
		this.currentPage = currentPage;

	},
	GetCurrentpage : function() {
		return this.currentPage;
	},
	LoadCurrentPage : function() {

	},
	GetElementCounter : function() {
		return this.elementCounters;
	},
	SetElementCounter : function(elementCounter) {
		this.elementCounters = elementCounter;
	},
	AddOneToCurrentElementCounter : function() {
		globalObj
				.SetElementCounter((this.GetElementCounter() == undefined ? parseInt("0")
						: parseInt(this.GetElementCounter())) + 1);
	},

	AppendNewQuestionType : function(tableId, surveyId) {
		var uuid = this.generateUUID();
		var element = "";
		this.AddOneToCurrentElementCounter();

		globalObj.questionSequence = 0;
		element = element + "<tr id='" + this.GetElementCounter()
				+ "' question-counter='" + "" + "'><td>Question</td>";
		/* console.log(this.GetElementCounter()); */
		element = element + "<td><label counteLableCount='"
				+ this.GetElementCounter() + "'></td>";
		element = element
				+ "<td><input type='checkbox' option-type='is-required'> Required? </label></td>";
		element = element
				+ "<td><label counteLableCount='"
				+ this.GetElementCounter()
				+ "'><input name='check_me_out_"
				+ this.GetElementCounter()
				+ "' onclick='globalObj.LinkQuestionToVerbatim(this,\""
				+ tableId
				+ "\",globalObj.GetSurveyUUID(),globalObj.GetThisQuestionText(\""
				+ this.GetElementCounter() + "\"),\"" + uuid
				+ "\")' type='checkbox' " + "/> With Verbatim? </label></td>";

		element = element + "<td><input question-sequence='"
				+ this.GetElementCounter() + "' name='sample_this"
				+ this.GetElementCounter() + "' countaTable-count-text='"
				+ this.GetElementCounter()
				+ "'  class='form-control' question-survey-id='"
				+ ((surveyId == undefined) ? "Empty" : surveyId)
				+ "' type='text' value='' question-id='" + uuid + "'";
		element = element + " class='" + surveyId + "' /></td>";
		element = element + " <td><select  class='" + surveyId
				+ "' answer-survey-id='"
				+ ((surveyId == "undefined") ? "Empty" : surveyId) + "' id='"
				+ ((surveyId == "undefined") ? "Empty" : surveyId) + "_" + uuid
				+ "'>";

		element = element + "<option value='0'>--</option>";
		element = element + "<option value='1'>Score</option>";
		element = element + "<option value='2'>Rating</option>";
		element = element + "<option value='3'>Verbatim</option>";
		element = element
				+ "</td>"
				+ "<td><a href='javascript:void(0)' onclick='globalObj.DeleteThisRow(\""
				+ this.GetElementCounter() + "\")' class='button'>Delete</a>"
				+ "</tr>";
		$("#" + tableId).append(element);

	},
	AppendNewQuestionTypeUpdate : function(tableId, surveyId) {
		var uuid = this.generateUUID();
		var element = "";
		this.AddOneToCurrentElementCounter();

		element = element + "<tr id='" + this.GetElementCounter()
				+ "' question-counter='" + "" + "'><td>Question</td>";

		element = element + "<td><label counteLableCount='"
				+ this.GetElementCounter() + "'></td>";
		element = element
				+ "<td><input type='checkbox' option-type='is-required-update'> Required? </label></td>";
		element = element
				+ "<td><label counteLableCount='"
				+ this.GetElementCounter()
				+ "'><input name='check_me_out_"
				+ this.GetElementCounter()
				+ "' onclick='globalObj.LinkQuestionToVerbatimUpdate(this,\""     
				+ tableId
				+ "\",globalObj.GetSurveyUUID(),globalObj.GetThisQuestionText(\""
				+ this.GetElementCounter() + "\"),\"" + uuid
				+ "\")' type='checkbox' " + "/> With Verbatim? </label></td>";

		element = element + "<td><input question-sequence-update='"
				+ this.GetElementCounter() + "' name='sample_this"
				+ this.GetElementCounter() + "' countaTable-count-text='"
				+ this.GetElementCounter()
				+ "'  class='form-control' question-survey-id-update='"
				+ ((surveyId == undefined) ? "Empty" : surveyId)
				+ "' type='text' value='' question-id-update='" + uuid + "'";
		element = element + " class='" + surveyId + "' /></td>";
		element = element + " <td><select class='" + surveyId
				+ "-update' answer-survey-id='"
				+ ((surveyId == "undefined") ? "Empty" : surveyId) + "' id='"
				+ ((surveyId == "undefined") ? "Empty" : surveyId) + "_" + uuid
				+ "'>";

		element = element + "<option value='0'>--</option>";
		element = element + "<option value='1'>Score</option>";
		element = element + "<option value='2'>Rating</option>";
		element = element + "<option value='3'>Verbatim</option>";

		element = element
				+ "</td>"
				+ "<td><a href='javascript:void(0)' onclick='globalObj.DeleteThisRow(\""
				+ this.GetElementCounter() + "\")' class='button'>Delete</a>"
				+ "</tr>";
		$("#" + tableId).append(element);

	},

	GetThisQuestionText : function(counter) {
		var currentValue = $("input[name=sample_this" + counter + "]").val();
		if (currentValue == "") {
			$("#check_me_out_" + counter).prop("checked", false);
			alert("Please fill up the textfield!!");

			return false;
		}
		return $("input[name=sample_this" + counter + "]").val();
	},

	generateUUID : function() {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
				function(c) {
					var r = (d + Math.random() * 16) % 16 | 0;
					d = Math.floor(d / 16);
					return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
				});
		return uuid;
	},
	ShowPreLoader : function() {

		$.LoadingOverlay("show");
	},
	HidePreLoader : function() {
		$.LoadingOverlay("hide");
	},
	ReadActiveSurvey : function() {
		
		this.HideUtility("sample_wat_test", "div_edit_page",
				"div_analytics_page","archive_table");
		$("#page_header").show();
		this.ShowPreLoader();
		$("#active_reports_display").show();
		$("#sample_active_table").html("");
		var data = "";
		$
				.ajax({
					type : "POST",
					url : "../../../test-admin/action/getallactivesurvey",
					data : "{}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;

						data = data
								+ "<thead><tr>"
								+ "<th>&nbsp;</th><th>Survey Name</th><th>Archive</th><th>Update</th><th>Email</th><th>Sent</th>"
								+ "</tr></thead><tbody>";

						for (var i = 0; i < resultsArray.length; i++) {
							data = data
									+ "<tr><td><i style='color:#337ab7' class='glyphicon glyphicon-th-list'></i></td>";
							data = data
									+ "<td><span><a style='text-decoration: none;' href='javascript:void(0)' onclick='globalObj.GetSurveyDetails(\""
									+ resultsArray[i].survey_uu_id + "\")'>"
									+ resultsArray[i].survey_name
									+ "</a></span></td>";
							data = data
									+ "<td><a style='text-decoration: none;' href='javascript:void(0)' onclick='globalObj.Archivesurvey(\""
									+ resultsArray[i].survey_uu_id + "\"" + ","
									+ true + ")'>Archive</a></td>";
							data = data
									+ "<td><a style='text-decoration: none;' href='javascript:void(0)' onclick='globalObj.LoadUpdateSurvey(\""
									+ resultsArray[i].survey_uu_id + "\",\""
									+ resultsArray[i].survey_id
									+ "\")'>Update</a></td>";
							data = data
									+ "<td><a style='text-decoration: none;' data-toggle='modal' data-target='#emailModal' href='javascript:void(0)' onclick='globalObj.SetParameterForEmailSending(\""
									+ resultsArray[i].survey_id + "\",\""
									+ resultsArray[i].survey_name + "\""
									+ ",\"" + resultsArray[i].type  +"\")'>Email</a></td>";
							data = data
									+ "<td><a style='text-decoration: none;' href='javascript:void(0)'" // onclick='adminObj.EmailSurveyToRespondents(\""
									+ resultsArray[i].survey_count
									+ "'>"
									+ (resultsArray[i].survey_count == undefined ? "0"
											: resultsArray[i].survey_count)
									+ "</a></td>";
						}
						data = data + "</tr></tbody>";

						$("#sample_active_table").append(data);
					},
					complete : function(e) {

						globalObj.HidePreLoader();
						$("#sample_active_table").DataTable({  
							"scrollX" : false,
							"destroy": true
						});

					},
					error : function(a, b, c) {
						alert(c
								+ " Please send an email to marangelo.delatorre@thomsonreuters.com ");
					}
				});
	},
	SetParameterForEmailSending : function(surveyId, surveyName,surveyType) {
		globalObj.SetSurveyId(surveyId);
		globalObj.SetSurveyName(surveyName);  
		globalObj.SetType(surveyType);

	},

	ReadArchiveSurvey : function() {
		this.HideUtility("sample_wat_test", "div_edit_page",
				"div_analytics_page","active_reports_display");
		$("#page_header").show();
		this.ShowPreLoader();
		
		$("#archive_table").show();
		$("#archive_table").html("");
		  
		var data = "<h2>Archive Surveys</h2>";
		$
				.ajax({
					type : "POST",
					url : "../../../test-admin/action/readarchivedsurvey",
					data : "{}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;
						data = data
								+ "<table class='table-hover table' align='left' style='border: none; spacing: 20px;' class='form-control'>";
						data = data + "<tbody>"
						data = data
								+ "<tr><td>&nbsp;</td><td>Survey Name</td><td></td><td></td>";
						for (var i = 0; i < resultsArray.length; i++) {
							data = data
									+ "<tr><td><i style='color:#337ab7' class='glyphicon glyphicon-th-list'></i></td>";
							data = data + "<td><span>"
									+ resultsArray[i].survey_name
									+ "</span></td>";
							data = data
									+ "<td>"
									+ globalObj
											.MakeSpaceUndeifined(resultsArray[i].start_date)
									+ "</td>";
							data = data
									+ "<td>"
									+ globalObj
											.MakeSpaceUndeifined(resultsArray[i].end_date)
									+ "</td>";

						}
						data = data + "</tr></tbody></table>";

					},
					complete : function(e) {
						$("#archive_table").append(data);
						globalObj.HidePreLoader();

					},
					error : function(a, b, c) {
						alert(c
								+ " Please send an email to marangelo.delatorre@thomsonreuters.com ");
					}
				});
	},
	MakeSpaceUndeifined : function(stringUndefined) {
		var newUndefined = "";
		if (stringUndefined == undefined) {
			newUndefined = "";
		}

		return newUndefined;
	},
	test : function() {
		alert(arguments[0] + " : this from " + arguments[1]);
	},
	ShowCreateSurveyPage : function() {
		this.HideUtility("active_reports_display", "div_analytics_page",
				"div_edit_page");
		$("#sample_wat_test").show();
		$("#sample_wat_test").load("activesurvey.jsp");
	},
	GetSurveyDetails : function(surveyId, tableId) {
		/* globalObj.SetSurveyUUID(surveyId) */
		$("#update_active_surveys").html("");
		var data = "";
		$
				.ajax({
					type : "POST",
					url : "../../../test-admin/action/getsurveydetail",
					data : "{\"surveyId\":\"" + surveyId + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;
						for (var i = 0; i < resultsArray.length; i++) {
							globalObj.SetElementCounter((resultsArray.length));
							$("#start_date").val(resultsArray[0].start_date);
							$("#end_date").val(resultsArray[0].end_date);
							data += globalObj.BuidlQuestionType(
									resultsArray[i].answer_type_id,
									resultsArray[i].question_name,
									resultsArray[i].question_uuid,
									resultsArray[i].is_required,
									resultsArray[i].question_id,
									resultsArray[i].has_verbatim,
									resultsArray[i].sequence);
						}

						globalObj.HideUtility("sample_wat_test",
								"active_reports_display");

					},
					complete : function() {
						$("#" + tableId).append(data);
					},
					error : function(a, b, c) {
						alert(c
								+ " Please send an email to marangelo.delatorre@thomsonreuters.com ");
					}
				});
	},
	LoadUpdateSurvey : function(surveyUUID, surveyId) {
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getsurveyvalidforupdate",
			data : "{\"surveyUUID\":\"" + surveyUUID + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				if (resultsArray[0].isValid == "1") {
					globalObj.HideUtility("active_reports_display",
							"div_analytics_page", "sample_wat_test");
					$("#div_edit_page").show();
					$("#div_edit_page").load("adminupdatepaage.jsp");
					globalObj.SetSurveyUUID(surveyId);
				} else {
					alert("This survey has already  can no longer be updated");
					return false;
				}
			}
		});

	},
	BuidlQuestionType : function(answerType, value, questionUUID, isRequired,
			counter, hasVerbatim, sequence) {

		var element = "";

		element = element + "<tr id='" + sequence + "' question-counter='"
				+ counter + "'><td>Question</td>";
		element = element + "<td><label counteLableCount='"
				+ ((sequence) == undefined ? "0" : sequence) + "'></td>";
		element = element
				+ "<td><input type='checkbox' option-type='is-required-update'"
				+ (isRequired == "1" ? "checked" : "")
				+ "> Required? </label></td>";
		element = element
				+ "<td><label counteLableCount='"
				+ ((sequence) == undefined ? "0" : sequence)
				+ "'><input name='check_me_out_"
				+ counter
				+ "' onclick='globalObj.LinkQuestionToVerbatimUpdate(this,\"update_active_surveys\",globalObj.GetSurveyUUID(),globalObj.GetThisQuestionText(\""
				+ counter + "\"))' type='checkbox' "
				+ (hasVerbatim == "1" ? "checked" : "")
				+ "/> With Verbatim? </label></td>";
		element = element
				+ "<td><input question-sequence-update='"
				+ ((sequence) == undefined ? "0" : sequence)
				+ "' input name='sample_this"
				+ counter
				+ "' type='text' class='form-control' question-survey-id-update='"
				+ ((globalObj.GetSurveyUUID() == undefined) ? "Empty"
						: globalObj.GetSurveyUUID()) + "' value='" + value
				+ "' question-id-update='" + questionUUID + "'";
		element = element + " class='" + globalObj.GetSurveyUUID()
				+ "' /></td>";

		element = element
				+ " <td><select class='"
				+ globalObj.GetSurveyUUID()
				+ "-update"
				+ "' answer-survey-id='"
				+ ((globalObj.GetSurveyUUID() == "undefined") ? "Empty"
						: globalObj.GetSurveyUUID())
				+ "' id='"
				+ ((globalObj.GetSurveyUUID() == "undefined") ? "Empty"
						: globalObj.GetSurveyUUID()) + "_" + questionUUID
				+ "'>";
		if (answerType == "1") {
			element = element
					+ "<option selected='selected' value='1'>Score</option>";
			element = element + "<option value='2'>Rating</option>";
			element = element + "<option value='3'>Verbatim</option>";
			element = element + "</select>";
		} else if (answerType == "2") {
			element = element + "<option value='1'>Score</option>";
			element = element
					+ "<option selected='selected'  value='2'>Rating</option>";
			element = element + "<option value='3'>Verbatim</option>";
			element = element + "</select>";
		} else {
			element = element + "<option value='1'>Score</option>";
			element = element + "<option value='2'>Rating</option>";
			element = element
					+ "<option selected='selected' value='3'>Verbatim</option>";
			element = element + "</select>";
		}
		element = element
				+ "</td>"
				+ "<td><a href='javascript:void(0)' onclick='globalObj.DeleteThisRow(\""
				+ sequence + "\")' class='button'>Delete</a>" + "</tr>";

		return element;

	},
	HideUtility : function() {
		for (var i = 0; i < arguments.length; ++i) {
			$("#" + arguments[i]).hide();
		}
	},
	ShowUtility : function() {
		for (var i = 0; i < arguments.length; ++i) {
			$("#" + arguments[i]).show();
		}
	},
	LoadPageAnalytics : function() {
		this.ShowUtility();
		$(".navbar-collapse").collapse('hide');
		
		$("#div_analytics_page").show();
		$("#div_analytics_page").load("analytics.jsp");
		this.HideUtility("active_reports_display", "div_edit_page",
		"sample_wat_test");
	},
	
	LoadPageAnalyticsAse : function() {
		$(".navbar-collapse").collapse('hide');
		this.HideUtility("active_reports_display", "div_edit_page",
				"sample_wat_test");
		$("#div_analytics_page").show();
		$("#div_analytics_page").load("aseanalytics.jsp");
	},
	
	LoadPageAse : function() {
		/*$(".navbar-collapse").collapse('hide');
		this.HideUtility("active_reports_display", "div_edit_page",
				"sample_wat_test");
		$("#div_analytics_page").show();
		$("#div_analytics_page").load("../adminase/aseindex.jsp");*/
	},
	
	MakeDatePicker : function() {

		for (var i = 0; i < arguments.length; i++) {
			$("#" + arguments[i]).datepicker({
				todayHighlight : true,
				format : "yyyy-mm-dd",
				showClose : true,
				tooltips: {
				    today: 'Go to today'
				}
			});
		}  
	},
	GetTopBoxTwoData : function(surveyId, appendToDiv, prefixID) {
		var data = "";
		this.ShowPreLoader();
		$
				.ajax({
					type : "POST",
					url : "../../../test-admin/action/getsurveysummarypersurveyTopBoxTwo",
					data : "{\"surveyId\":\"" + surveyId
							+ "\",\"workGroup\":\"" + workgroup + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;

						data = data + "{\"value\":\"" + resultsArray[0].NA
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].one
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].two
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].three
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].four
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].five
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].six
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].seven
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].eight
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].nine
								+ "\"},";
						data = data + "{\"value\":\"" + resultsArray[0].ten
								+ "\"}";

						globalObj.HideUtility("sample_wat_test",
								"active_reports_display");
					},
					complete : function() {
						var objectified = JSON.parse("" + data + "]}]}}");
						globalObj.appendTopBoxTwo(objectified);
						globalObj.HidePreLoader();
					},
					error : function(a, b, c) {
						alert(c
								+ " Please send an email to marangelo.delatorre@thomsonreuters.com ");
					}
				});

	},
	CreateGraphForScore : function(NA, one, two, three, four, five, six, seven,
			eight, nine, ten, appendToDiv, questionName) {
		var data = "";
		data = data + "{\"type\" : \"MSColumn2D\",";
		data = data + "\"renderAt\" : \"" + appendToDiv + "\",";
		data = data + "\"width\" : \"550\",";
		data = data + "\"height\" : \"300\",";
		data = data + "\"dataFormat\" : \"json\",";
		data = data + "\"dataSource\" : {";
		data = data + "\"chart\" : {";
		data = data + "\"sYAxisMaxValue\":\"100.000001\",";
		data = data + "\"caption\" : \"" + questionName + "\",";
		data = data + "\"showXAxisLine\": \"1\",";

		data = data + "\"yAxisMaxValue\" : \"" + "10" + ".000001\","
		data = data + "\"showplotborder\": \"0\",";
		data = data + "\"xAxisname\" : \"Question\",";
		data = data + "\"pYAxisName\" : \"Volume\",";
		data = data + "\"sYAxisName\" : \"Percentage\",";
		data = data + "\"numberPrefix\" : \"\",";
		data = data + "\"sNumberSuffix\" : \"%\",";
		data = data + "\"showValues\" : \"0\",";
		data = data + "\"syncAxisLimits\": \"0\",";
		data = data + "\"theme\" : \"fint\"},";
		data = data + "\"categories\":[{\"category\":[";

		data = data + "{\"label\":\"" + "N/A" + "\"},";
		data = data + "{\"label\":\"" + "1" + "\"},";
		data = data + "{\"label\":\"" + "2" + "\"},";
		data = data + "{\"label\":\"" + "3" + "\"},";
		data = data + "{\"label\":\"" + "4" + "\"},";
		data = data + "{\"label\":\"" + "5" + "\"},";
		data = data + "{\"label\":\"" + "6" + "\"},";
		data = data + "{\"label\":\"" + "7" + "\"},";
		data = data + "{\"label\":\"" + "8" + "\"},";
		data = data + "{\"label\":\"" + "9" + "\"},";
		data = data + "{\"label\":\"" + "10" + "\"}";

		data = data + "]}],";
		data = data + "\"dataset\":[{";
		data = data + "\"seriesname\":\"Volume\",";
		data = data + "\"allowDrag\":\"0\",";
		data = data + "\"data\":[";

		data = data + "{\"value\":\"" + NA + "\"},";
		data = data + "{\"value\":\"" + one + "\"},";
		data = data + "{\"value\":\"" + two + "\"},";
		data = data + "{\"value\":\"" + three + "\"},";
		data = data + "{\"value\":\"" + four + "\"},";
		data = data + "{\"value\":\"" + five + "\"},";
		data = data + "{\"value\":\"" + six + "\"},";
		data = data + "{\"value\":\"" + seven + "\"},";
		data = data + "{\"value\":\"" + eight + "\"},";
		data = data + "{\"value\":\"" + nine + "\"},";
		data = data + "{\"value\":\"" + ten + "\"}";

		globalObj.HideUtility("sample_wat_test", "active_reports_display");

		return data;
	},
	CreateGraphForRating : function(NA, notMet, pAchieved, achieved, exceeded,
			fExceeded, appendToDiv, questionName) {
		var data = "";
		data = data + "{\"type\" : \"MSColumn2D\",";
		data = data + "\"renderAt\" : \"" + appendToDiv + "\",";
		data = data + "\"width\" : \"550\",";
		data = data + "\"height\" : \"300\",";
		data = data + "\"dataFormat\" : \"json\",";
		data = data + "\"dataSource\" : {";
		data = data + "\"chart\" : {";
		data = data + "\"sYAxisMaxValue\":\"100.000001\",";
		data = data + "\"caption\" : \"" + questionName + "\",";
		data = data + "\"showXAxisLine\": \"1\",";

		data = data + "\"yAxisMaxValue\" : \"" + "10" + ".000001\","
		data = data + "\"showplotborder\": \"0\",";
		data = data + "\"xAxisname\" : \"Question\",";
		data = data + "\"pYAxisName\" : \"Volume\",";
		data = data + "\"sYAxisName\" : \"Percentage\",";
		data = data + "\"numberPrefix\" : \"\",";
		data = data + "\"sNumberSuffix\" : \"%\",";
		data = data + "\"showValues\" : \"0\",";
		data = data + "\"syncAxisLimits\": \"0\",";
		data = data + "\"theme\" : \"fint\"},";
		data = data + "\"categories\":[{\"category\":[";

		data = data + "{\"label\":\"" + "N/A" + "\"},";
		data = data + "{\"label\":\"" + "Did Not Met" + "\"},";
		data = data + "{\"label\":\"" + "Partially Achieved" + "\"},";
		data = data + "{\"label\":\"" + "Achieved" + "\"},";
		data = data + "{\"label\":\"" + "Exceeded" + "\"},";
		data = data + "{\"label\":\"" + "Far Exceeded" + "\"}";

		data = data + "]}],";
		data = data + "\"dataset\":[{";
		data = data + "\"seriesname\":\"Volume\",";
		data = data + "\"allowDrag\":\"0\",";
		data = data + "\"data\":[";

		data = data + "{\"value\":\"" + NA + "\"},";
		data = data + "{\"value\":\"" + notMet + "\"},";
		data = data + "{\"value\":\"" + pAchieved + "\"},";
		data = data + "{\"value\":\"" + achieved + "\"},";
		data = data + "{\"value\":\"" + exceeded + "\"},";
		data = data + "{\"value\":\"" + fExceeded + "\"}";

		globalObj.HideUtility("sample_wat_test", "active_reports_display");

		return data;
	},
	testers : function() {
		var data = "";
		data = data + "{\"chart\" : {";
		data = data + "\"type\":\"doughnut2D\",";
		data = data
				+ "\"caption\": \"Split of Revenue by Product Categories\",";
		data = data + "\"renderAt\":\"hey\",";
		// data = data + "\"subCaption\": \"Last year\",";
		// data = data + "\"numberPrefix\": \"$\",";
		// data = data + "\"showBorder\": \"0\",";
		// data = data + "\"use3DLighting\": \"0\",";
		// data = data + "\"enableSmartLabels\": \"0\",";
		// data = data + "\"startingAngle\": \"310\",";
		data = data + "\"showLabels\": \"0\",";
		data = data + "\"showPercentValues\": \"1\",";
		data = data + "\"showLegend\": \"1\",";
		data = data + "\"defaultCenterLabel\": \"Total revenue: $64.08K\",";
		data = data + "\"centerLabel\": \"Revenue from $label: $value\",";
		data = data + "\"centerLabelBold\": \"1\",";
		data = data + "\"showTooltip\": \"0\",";
		data = data + "\"decimals\": \"0\",";
		data = data + "\"useDataPlotColorForLabels\": \"1\",";
		data = data + "\"theme\": \"fint\"},";
		data = data + "\"data\": [{";
		data = data + "\"label\": \"Food\",";
		data = data + "\"value\": \"28504\"},";
		data = data + "{\"label\": \"Apparels\",";
		data = data + "\"value\": \"14633\"},";
		data = data + "{\"label\": \"Electronics\",";
		data = data + "\"value\": \"10507\"},";
		data = data + "{\"label\": \"Household\",";
		data = data + "\"value\": \"4910\"}]}";
		/* console.log(data) */
		globalObj.HideUtility("sample_wat_test", "active_reports_display");

		return data;
	},

	GetResponseRatio : function(surveyUUID, surveyId) {
		$("#pending").show();
		$("#answered").show();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getresponsesurvey",
			data : "{\"surveyId\":\"" + surveyId + "\",\"surveyUUID\":\""
					+ surveyUUID + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i++) {
					var answered = parseFloat(resultsArray[0].answered
							/ resultsArray[0].total_respondents);
					$("#percent_answered").text(
							parseFloat(answered * 100).toFixed(0) + "%");
					$("#total_respondents").text(
							resultsArray[0].total_respondents);
				}
			}
		});
	},
	GetTopBoxThreeData : function(surveyId, workgroup) {
		var data = "";

		$
				.ajax({
					type : "POST",
					url : "../../../test-admin/action/getsurveysummarypersurveyTopBoxThree",
					data : "{\"surveyId\":\"" + surveyId
							+ "\",\"workGroup\":\"" + workgroup + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;

						data = data + "{\"type\" : \"mscombidy2d\",";
						data = data + "\"renderAt\" : \"survey_top3\",";
						data = data + "\"width\" : \"550\",";
						data = data + "\"height\" : \"300\",";
						data = data + "\"dataFormat\" : \"json\",";
						data = data + "\"dataSource\" : {";
						data = data + "\"chart\" : {";
						data = data + "\"caption\" : \"Top Box Three \",";
						data = data + "\"sYAxisMaxValue\":\"100.000001\",";
						data = data + "\"xAxisname\" : \"Question\",";
						data = data + "\"pYAxisName\" : \"Volume\",";
						data = data + "\"sYAxisName\" : \"Percentage\",";
						data = data + "\"numberPrefix\" : \"\",";
						data = data + "\"sNumberSuffix\" : \"%\",";
						data = data + "\"showValues\" : \"0\",";
						data = data + "\"theme\" : \"fint\"},";

						data = data + "\"categories\" : [ {\"category\":[";
						for (var i = 0; i < resultsArray.length; i++) {
							if (i != (resultsArray.length - 1)) {
								data = data + "{\"label\":\""
										+ resultsArray[i].question_name
										+ "\"},";
							} else {
								data = data + "{\"label\":\""
										+ resultsArray[i].question_name + "\"}";
							}
						}
						data = data + "]}],";

						data = data
								+ "\"dataset\":[{\"seriesName\":\"Survey Volume\",";
						data = data + "\"showValues\":\"0\",";
						data = data + "\"data\":[";

						for (var i = 0; i < resultsArray.length; i++) {
							if (i != (resultsArray.length - 1)) {
								data = data + "{\"value\":\""
										+ resultsArray[i].total_survey_count
										+ "\"},";
							} else {
								data = data + "{\"value\":\""
										+ resultsArray[i].total_survey_count
										+ "\"}";
							}

						}
						data = data + "]},";

						data = data + "{\"seriesName\": \"Survey Score\",";
						data = data + "\"parentYAxis\":\"S\",";
						data = data + "\"renderAs\":\"line\",";
						data = data + "\"data\":[";

						for (var i = 0; i < resultsArray.length; i++) {
							if (i != (resultsArray.length - 1)) {
								data = data
										+ "{\"value\":\""
										+ parseFloat(resultsArray[i].assurvey_addends)
										/ parseFloat(resultsArray[i].total_survey_count)
										* 100 + "\"},";
							} else {
								data = data
										+ "{\"value\":\""
										+ parseFloat(resultsArray[i].assurvey_addends)
										/ parseFloat(resultsArray[i].total_survey_count)
										* 100 + "\"}";
							}

						}
						data = data + "]}";

						globalObj.HideUtility("sample_wat_test",
								"active_reports_display");

					},
					complete : function() {
						var objectified = JSON.parse("" + data + "]}}");
						globalObj.appendTopBoxThree(objectified);
						globalObj.HidePreLoader();
					},
					error : function(a, b, c) {
						alert(c
								+ " Please send an email to marangelo.delatorre@thomsonreuters.com ");
					}
				});

	},
	GetTopBoxFourData : function(surveyId, workgroup) {
		var data = "";

		$
				.ajax({
					type : "POST",
					url : "../../../test-admin/action/getsurveysummarypersurveyTopBoxFour",
					data : "{\"surveyId\":\"" + surveyId
							+ "\",\"workGroup\":\"" + workgroup + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;

						data = data + "{\"type\" : \"mscombidy2d\",";
						data = data + "\"renderAt\" : \"survey_top4\",";
						data = data + "\"width\" : \"550\",";
						data = data + "\"height\" : \"300\",";
						data = data + "\"dataFormat\" : \"json\",";
						data = data + "\"dataSource\" : {";
						data = data + "\"chart\" : {";
						data = data + "\"caption\" : \"Top Box Four \",";
						data = data + "\"sYAxisMaxValue\":\"100.000001\",";
						data = data + "\"xAxisname\" : \"Question\",";
						data = data + "\"pYAxisName\" : \"Volume\",";
						data = data + "\"sYAxisName\" : \"Percentage\",";
						data = data + "\"numberPrefix\" : \"\",";
						data = data + "\"sNumberSuffix\" : \"%\",";
						data = data + "\"showValues\" : \"0\",";
						data = data + "\"theme\" : \"fint\"},";

						data = data + "\"categories\" : [ {\"category\":[";
						for (var i = 0; i < resultsArray.length; i++) {
							if (i != (resultsArray.length - 1)) {
								data = data + "{\"label\":\""
										+ resultsArray[i].question_name
										+ "\"},";
							} else {
								data = data + "{\"label\":\""
										+ resultsArray[i].question_name + "\"}";
							}
						}
						data = data + "]}],";

						data = data
								+ "\"dataset\":[{\"seriesName\":\"Survey Volume\",";
						data = data + "\"showValues\":\"0\",";
						data = data + "\"data\":[";

						for (var i = 0; i < resultsArray.length; i++) {
							if (i != (resultsArray.length - 1)) {
								data = data + "{\"value\":\""
										+ resultsArray[i].total_survey_count
										+ "\"},";
							} else {
								data = data + "{\"value\":\""
										+ resultsArray[i].total_survey_count
										+ "\"}";
							}

						}
						data = data + "]},";

						data = data + "{\"seriesName\": \"Survey Score\",";
						data = data + "\"parentYAxis\":\"S\",";
						data = data + "\"renderAs\":\"line\",";
						data = data + "\"data\":[";

						for (var i = 0; i < resultsArray.length; i++) {
							if (i != (resultsArray.length - 1)) {
								data = data
										+ "{\"value\":\""
										+ parseFloat(resultsArray[i].assurvey_addends)
										/ parseFloat(resultsArray[i].total_survey_count)
										* 100 + "\"},";
							} else {
								data = data
										+ "{\"value\":\""
										+ parseFloat(resultsArray[i].assurvey_addends)
										/ parseFloat(resultsArray[i].total_survey_count)
										* 100 + "\"}";
							}

						}
						data = data + "]}";

						globalObj.HideUtility("sample_wat_test",
								"active_reports_display");

						/* console.log((data + "]}}")); */

					},
					complete : function() {
						var objectified = JSON.parse("" + data + "]}}");
						globalObj.appendTopBoxFour(objectified);
					},
					error : function(a, b, c) {
						alert(c
								+ " Please send an email to marangelo.delatorre@thomsonreuters.com ");
					}
				});

	},
	appendChart : function(data) {
		FusionCharts.ready(function() {
			var revenueChart = new FusionCharts(data);
			revenueChart.render();
		});
	},
	appendTopBoxThree : function(data) {
		FusionCharts.ready(function() {
			var revenueChart = new FusionCharts(data);

			revenueChart.render();
		});
	},
	appendTopBoxFour : function(data) {
		FusionCharts.ready(function() {
			var revenueChart = new FusionCharts(data);
			revenueChart.render();
		});
	},
	GetAllQuestionSurvey : function(surveyId, appendToDiv) {
		globalObj.ShowPreLoader();
		$("#" + appendToDiv).html("");
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getallquestionSurvey",
			data : "{\"surveyId\":\"" + surveyId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i++) {
					globalObj.GetSummaryPerQuestion(
							resultsArray[i].question_id,
							resultsArray[i].survey_id, appendToDiv,
							resultsArray[i].question_id,
							resultsArray[i].answer_type_id)
					// questionId, surveyId,appendToDiv,prefixID
				}
			},
			complete : function(e) {
				globalObj.GetResponseRatio($("#survey_list option:selected")
						.attr("survey-uu-id"), $("#survey_list").val());
				globalObj.HidePreLoader();
			},
			error : function(a, b, c) {

			}
		});

	},
	appendWorkGroupList : function(elementId, toMultiple) {
		var data = "";
		$("#" + elementId).html("");
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getallworkgroups",
			data : "{}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				for (var i = 0; i < resultsArray.length; i++) {
					data = data + "<option value='" + resultsArray[i].wg_id
							+ "'>";
					data = data + resultsArray[i].wg_name + "</option>";
				}
				$("#" + elementId).append(data);
			},
			complete : function(e) {
				if (toMultiple == "" || toMultiple == undefined) {
					$("#" + elementId).multiselect({
						enableCaseInsensitiveFiltering : true,
						maxHeight : 100,
						enableFiltering : true,
						includeSelectAllOption : true,
						buttonWidth : '150px'
					});
				}
			},
			error : function(error, xhr, a) {

			}

		});
	},
	appendSurveyList : function(elementId) {
		var data = "";
		$("#" + elementId).html("");
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getallactivesurvey",
			data : "{}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				data = data + "<option value=''>--</option>";
				for (var i = 0; i < resultsArray.length; i++) {
					data = data + "<option survey-uu-id='"
							+ resultsArray[i].survey_uu_id + "'"
							+ "answer-type='" + resultsArray[i].ansType
							+ "' survey-type='"
							+ resultsArray[i].recepient_type + "' value='"
							+ resultsArray[i].survey_id + "'>";
					data = data + resultsArray[i].survey_name + "</option>";
				}
				$("#" + elementId).append(data);
			},
			complete : function(e) {
				$("#" + elementId).multiselect({
					enableCaseInsensitiveFiltering : true,
					maxHeight : 200,
					enableFiltering : true,
					includeSelectAllOption : true,
					buttonWidth : '150px'
				});

			},
			error : function(error, xhr, a) {

			}

		});
	},
	
	appendAseSurveyList : function(elementId) {
		var data = "";
		$("#" + elementId).html("");
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getallasectivesurvey",
			data : "{}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				data = data + "<option value=''>--</option>";
				for (var i = 0; i < resultsArray.length; i++) {
					data = data + "<option survey-uu-id='"
							+ resultsArray[i].survey_uu_id + "'"
							+ "answer-type='" + resultsArray[i].ansType
							+ "' survey-type='"
							+ resultsArray[i].recepient_type + "' value='"
							+ resultsArray[i].survey_id + "'>";
					data = data + resultsArray[i].survey_name + "</option>";
				}
				$("#" + elementId).append(data);
			},
			complete : function(e) {
				$("#" + elementId).multiselect({
					enableCaseInsensitiveFiltering : true,
					maxHeight : 200,
					enableFiltering : true,
					includeSelectAllOption : true,
					buttonWidth : '150px'
				});

			},
			error : function(error, xhr, a) {

			}

		});
	},
	
	AppendAllEmployees : function(elementId) {
		this.ShowPreLoader();
		var data = "";
		$("#" + elementId).html("");
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getallemployees",
			data : "{}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;

				for (var i = 0; i < resultsArray.length; i++) {
					data = data + "<option value='"
							+ resultsArray[i].user_email + "'>";
					data = data + resultsArray[i].user_first_name + " "
							+ resultsArray[i].user_last_name + "</option>";
				}
				$("#" + elementId).append(data);
			},
			complete : function(e) {
				$("#" + elementId).multiselect({
					enableCaseInsensitiveFiltering : true,
					maxHeight : 100,
					enableFiltering : true,
					includeSelectAllOption : true,
					buttonWidth : '150px'
				});
				globalObj.HidePreLoader();
			},
			error : function(error, xhr, a) {

			}

		});
	},
	AppendAllTeamManagers : function(elementId) {
		var data = "";
		$("#" + elementId).html("");
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getallteammmanagers",
			data : "{}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;

				for (var i = 0; i < resultsArray.length; i++) {
					data = data + "<option value='"
							+ resultsArray[i].user_employee_id + "'>";
					data = data + resultsArray[i].user_first_name + " "
							+ resultsArray[i].user_last_name + "</option>";
				}
				$("#" + elementId).append(data);
			},
			complete : function(e) {
				$("#" + elementId).multiselect({
					enableCaseInsensitiveFiltering : true,
					maxHeight : 200,
					enableFiltering : true,
					includeSelectAllOption : true,
					maxWidth : 150,
					buttonWidth : '150px'
				});

			},
			error : function(error, xhr, a) {

			}

		});
	},
	CreateDivForAppend : function(divID, prefixID, testNumber) {
		var data = "";

		var data = data + "<div id='" + prefixID + "_" + testNumber
				+ "' class='container-fluid'></div>";

		$("#" + divID).append(data);

	},
	GetSummaryPerQuestion : function(questionId, surveyId, appendToDiv,
			prefixID, surveyType) {
		var chartData = "";
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getsummaryperquestion",
			data : "{\"surveyId\":\""
					+ surveyId
					+ "\",\"questionId\":\""
					+ questionId
					+ "\",\"surveyAnswerType\": \""
					+ surveyType
					+ "\",\"recepientType\":\""
					+ $('option:selected', "#survey_list").attr('survey-type')
					+ "\","
					+ "\"recepientList\":\""
					+ ($("#work_group_list").val() == null ? "" : $(
							"#work_group_list").val()) + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				/*
				 * globalObj.CreateGraphForRespondentsReponse();
				 * globalObj.CreateGraphForRespondentsReponse();
				 */
				for (var i = 0; i < resultsArray.length; i++) {
					globalObj.CreateDivForAppend(appendToDiv, prefixID,
							surveyId);
					if ((resultsArray[0].question_id) == "0") {
						$("#" + appendToDiv).html(
								"<p> This survey has none response yet");
						return false;
					}
					if (surveyType == "1") {
						chartData = globalObj.CreateGraphForScore(
								resultsArray[0].NA, resultsArray[0].ONE,
								resultsArray[0].two, resultsArray[0].three,
								resultsArray[0].four, resultsArray[0].five,
								resultsArray[0].six, resultsArray[0].seven,
								resultsArray[0].eight, resultsArray[0].nine,
								resultsArray[0].ten, prefixID + "_" + surveyId,
								resultsArray[0].question_name);
					} else {
						// CreateGraphForRating : function(NA,
						// fExceeded,exceeded,achieved,pAchieved,notMet,appendToDiv,
						// questionName)
						chartData = globalObj.CreateGraphForRating(
								resultsArray[0].NA, resultsArray[0].notMet,
								resultsArray[0].pAchieved,
								resultsArray[0].achieved,
								resultsArray[0].exceeded,
								resultsArray[0].fExceeded, prefixID + "_"
										+ surveyId,
								resultsArray[0].question_name);
					}

				}

			},
			complete : function(e) {
				globalObj.appendChart(JSON.parse("" + chartData + "]}]}}"));

			},
			error : function(a, b, c) {
				$("#" + appendToDiv).html(
						"<p> This survey has none response yet");
				$("#answered").hide();
				$("#pending").hide();

			}
		});
	},
	
	////////////////////////////////
	
	GetSummaryASEPerQuestion : function(questionId, surveyId, appendToDiv,
			prefixID, surveyType) {
		var chartData = "";
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getsummaryperquestion",
			data : "{\"surveyId\":\""
					+ surveyId
					+ "\",\"questionId\":\""
					+ questionId
					+ "\",\"surveyAnswerType\": \""
					+ surveyType
					+ "\",\"recepientType\":\""
					+ $('option:selected', "#survey_list").attr('survey-type')
					+ "\","
					+ "\"recepientList\":\""
					+ ($("#work_group_list").val() == null ? "" : $(
							"#work_group_list").val()) + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;
				/*
				 * globalObj.CreateGraphForRespondentsReponse();
				 * globalObj.CreateGraphForRespondentsReponse();
				 */
				for (var i = 0; i < resultsArray.length; i++) {
					globalObj.CreateDivForAppend(appendToDiv, prefixID,
							surveyId);
					if ((resultsArray[0].question_id) == "0") {
						$("#" + appendToDiv).html(
								"<p> This survey has none response yet");
						return false;
					}
								chartData = globalObj.CreateGraphForScore(
							    resultsArray[0].one,
								resultsArray[0].two, resultsArray[0].three,
								resultsArray[0].four, resultsArray[0].five,
								resultsArray[0].six, resultsArray[0].seven,
								resultsArray[0].eight, resultsArray[0].nine,
								resultsArray[0].ten, prefixID + "_" + surveyId,
								resultsArray[0].question_name);
					}

			},
			complete : function(e) {
				globalObj.appendChart(JSON.parse("" + chartData + "]}]}}"));

			},
			error : function(a, b, c) {
				$("#" + appendToDiv).html(
						"<p> This survey has none response yet");
				$("#answered").hide();
				$("#pending").hide();

			}
		});
	},
	
	
	///////////////////////////////
	Archivesurvey : function(surveyId, isButton) {
		globalObj.ShowPreLoader();
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/archivesurvey",
			data : "{\"surveyId\":\"" + surveyId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;

				alert("Archive Successful");
				globalObj.ReadActiveSurvey();

			},
			complete : function(e) {
				globalObj.HidePreLoader();
			},
			error : function(a, b, c) {
				if (isButton)
					alert("There has been an error archiving your survey");
			}
		});
	},
	AppendSurveyRecepients : function(elementId, surveyId, surveyType) {
		// globalObj.ShowPreLoader();
		$('#' + elementId).html('');
		globalObj.SetSurveyId(surveyId);
		$('#' + elementId).multiselect('destroy');
		$
				.ajax({
					type : "POST",
					url : "../../../test-admin/action/getsurveyrecepientlistwithtype",
					data : "{\"surveyId\":\"" + surveyId
							+ "\",\"surveyType\":\"" + surveyType + "\"}",
					contentType : "application/x-www-form-urlencoded",
					dataType : "json",
					success : function(response) {
						var resultsArray = (typeof response) == 'string' ? eval('('
								+ response + ')')
								: response;

						var data = "";
						globalObj
								.SetSurveyIsAnonymous((resultsArray[0].is_anonymous == undefined) ? "0"
										: resultsArray[0].is_anonymous);
						if (resultsArray[0].is_anonymous == "1") {
							$("#recepient_label").text("Survey is anonymous");
							$("#" + elementId).hide();
							return;
						} else {
							try {
								globalObj
										.SetSurveyRecepientType(resultsArray[0].recepient_type);

								switch (resultsArray[0].recepient_type) {
								case "1":
									for (var i = 0; i < resultsArray.length; i++) {
										data = data + "<option value='"
												+ resultsArray[i].wg_id + "'>";
										data = data + resultsArray[i].wg_name
												+ "</option>";
									}
									$("#recepient_label").text(
											"Work Group List");
									break;
								case "2":
									for (var i = 0; i < resultsArray.length; i++) {
										data = data + "<option value='"
												+ resultsArray[i].tm_id + "'>";
										data = data + resultsArray[i].tmName
												+ "</option>";
										$("#recepient_label").text(
												"Team Manager List");
									}

									break;
								case "3":
									for (var i = 0; i < resultsArray.length; i++) {
										data = data + "<option value='"
												+ resultsArray[i].email_address
												+ "'>";
										data = data
												+ resultsArray[i].email_address
												+ "</option>";
										$("#recepient_label").text(
												"Individual List");
									}
									break;
								}

								$('#' + elementId).show();
							} catch (e) {
								$('#' + elementId).hide();
							}
						}
						$("#" + elementId).append(data);
						$("#" + elementId).multiselect({
							enableCaseInsensitiveFiltering : true,
							maxHeight : 200,
							enableFiltering : true,
							includeSelectAllOption : true,
							maxWidth : 150,
							buttonWidth : '150px'
						});
					},
					complete : function(e) {

						globalObj.HidePreLoader();
					},
					error : function(a, b, c) {
						$('#' + elementId).hide();
					}

				});
	},
	GetVerbatimQuestionPerSurvey : function() {
		globalObj.ShowPreLoader();
		$("#apeendVerbatimList").html("");
		var data = "";
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getverbatimquestiopersurvey",
			data : "{\"surveyId\":\"" + globalObj.GetSurveyId() + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;

				if (resultsArray.length == 0) {
					$("#apeendVerbatimList").attr("disabled", "disabled");

				} else {
					$("#apeendVerbatimList").attr("disabled", false);
					for (var i = 0; i < resultsArray.length; i++) {
						data = data + "<option value='"
								+ resultsArray[i].question_id + "'>"
								+ resultsArray[i].question_name + "</option>";
					}
				}

			},
			complete : function(e) {
				$("#apeendVerbatimList").append(data);
				globalObj.HidePreLoader();
			},
			error : function(a, b, c) {

			}
		});
	},
	GetWordsFromVerbatim : function(questionId) {
		globalObj.ShowPreLoader();
		var data = [];
		$.ajax({
			type : "POST",
			url : "../../../test-admin/action/getverbatimanswers",
			data : "{\"questionId\":\"" + questionId + "\"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')') : response;

				for (var i = 0; i < resultsArray.length; i++) {
					data.push(resultsArray[i].answer_value);
				}

			},
			complete : function(e) {
				globalObj.HidePreLoader();
			},
			error : function(a, b, c) {

			}
		});

		return data;
	},
	SeparateWordsFromArray : function(wordArray) {

		var sample = wordArray;
		var newArray = new Array();

		for (var i = 0; i < sample.length; i++) {
			var currentArray = sample[i].split(" ");
			for (var j = 0; j < currentArray.length; j++) {
				newArray.push(currentArray[j]);
			}
		}
		return newArray;

	},
	CountNumberOfStringsFrequency : function(arrayParameter) {
		var a = [], b = [], prev;

		arrayParameter.sort();
		for (var i = 0; i < arrayParameter.length; i++) {
			if (arrayParameter[i] !== prev) {
				a.push(arrayParameter[i].toLowerCase());
				b.push(1);
			} else {
				b[b.length - 1]++;
			}
			prev = arrayParameter[i].toLowerCase();
		}

		var data = "{";
		for (var k = 0; k < a.length; k++) {
			if (k == a.length - 1) {
				data = data + "\"" + a[k] + "\":" + "\"" + b[k] + "\"";
			} else {
				data = data + "\"" + a[k] + "\":" + "\"" + b[k] + "\","
			}
		}
		data = data + "}";
		/* console.log(data); */
		return JSON.parse(data);

	},
	DrawTopCount : function(obj) {
		// $('#appendWordCloud').html('');
		var array = [], obj2 = obj;
		for (a in obj) {
			array.push([ a, obj[a] ])
		}
		array.sort(function(a, b) {
			return a[1] - b[1]
		});
		array.reverse();

		for (var a = 0, b, txt = ''; b = array[a]; ++a) {
			txt += "<tr><td class='form-control'>" + b[0]
					+ '</td><td align="right"><label>' + b[1]
					+ '</label></td></tr>';
		}

		$("#testmetable").append(
				"<thead><tr><th>Word</th><th>Count</th></tr><thead><tbody>"
						+ txt + "</tbody>");
	},
	DrawCloud : function(words, element) {
		var fill = d3.scale.category20();
		d3.layout.cloud().size([ 300, 300 ]).words([ words ].map(function(d) {
			return {
				text : d,
				size : 10 + Math.random() * 50
			};
		})).rotate(function() {
			return ~~(Math.random() * 2) * 90;
		}).font("Impact").fontSize(function(d) {
			return d.size;
		}).on("end", globalObj.DrawCloudTwo(words, element)).start();

	},
	DrawCloudTwo : function(words, element) {

		var fill = d3.scale.category20();

		d3.select("#" + element).append("svg").attr("width", 300).attr(
				"height", 300).append("g").attr("transform",
				"translate(150,150)").selectAll("text").data(words).enter()
				.append("text").style("font-size", function(d) {
					return d.size + "px";
				}).style("font-family", "Impact").style("fill", function(d, i) {
					return fill(i);
				}).attr("text-anchor", "middle").attr(
						"transform",
						function(d) {
							return "translate(" + [ d.x, d.y ] + ")rotate("
									+ d.rotate + ")";
						}).text(function(d) {
					return d.text;
				});
	},

	LinkQuestionToVerbatim : function(element, tableId, surveyId, questionName,
			linkId) {
		this.AddOneToCurrentElementCounter();
		if (!$(element).is(":checked")) {

			$("#column_for_pri_id_" + linkId).remove();
			return false;
		}

		if ($("#column_for_pri_id_" + linkId) == undefined) {
			return false;
		}
		if (questionName == false) {
			$(element).prop("checked", false);
			return false;
		}

		var uuid = this.generateUUID();
		var element = "";

		element = element + "<tr id='column_for_pri_id_" + linkId
				+ "' question-counter='" + "" + "'><td>Question</td>";
		/* console.log(this.GetElementCounter()); */
		element = element + "<td><label counteLableCount='"
				+ this.GetElementCounter() + "'></td>";
		element = element
				+ "<td><input type='checkbox' option-type='is-required'> Required? </label></td>";
		element = element + "<td><label counteLableCount='"
				+ this.GetElementCounter()
				+ "'><input disabled onclick='globalObj.GetThisQuestionText(\""
				+ this.GetElementCounter()
				+ "\")' type='checkbox'> With Verbatim? </label></td>";

		element = element + "<td><input question-sequence='"
				+ this.GetElementCounter() + "' value='Verbatim For "
				+ questionName + "' disabled name='sample_this"
				+ this.GetElementCounter() + "' countaTable-count-text='"
				+ this.GetElementCounter()
				+ "'  class='form-control' question-survey-id='"
				+ ((surveyId == undefined) ? "Empty" : surveyId)
				+ "' type='text' value='' question-id='" + uuid + "'";
		element = element + " class='" + surveyId + "' /></td>";
		element = element + " <td><select disabled class='" + surveyId
				+ "' answer-survey-id='"
				+ ((surveyId == "undefined") ? "Empty" : surveyId) + "' id='"
				+ ((surveyId == "undefined") ? "Empty" : surveyId) + "_" + uuid
				+ "'>";

		element = element + "<option selected value='3'>Verbatim</option>";
		element = element + "</td></tr>";

		$("#" + tableId).append(element);
	},
	
	
	LinkQuestionToVerbatimUpdate : function(element, tableId, surveyId, questionName,
			linkId) {
		this.AddOneToCurrentElementCounter();
		if (!$(element).is(":checked")) {

			$("#column_for_pri_id_" + linkId).remove();
			return false;
		}

		if ($("#column_for_pri_id_" + linkId) == undefined) {
			return false;
		}
		if (questionName == false) {
			$(element).prop("checked", false);
			return false;
		}

		var uuid = this.generateUUID();
		var element = "";

		element = element + "<tr id='" + this.GetElementCounter()
				+ "' question-counter='" + "" + "'><td>Question</td>";
		/* console.log(this.GetElementCounter()); */
		element = element + "<td><label counteLableCount='"
				+ this.GetElementCounter() + "'></td>";
		element = element
				+ "<td><input type='checkbox' option-type='is-required-update'> Required? </label></td>";
		element = element + "<td><label counteLableCount='"
				+ this.GetElementCounter()
				+ "'><input disabled onclick='globalObj.GetThisQuestionText(\""
				+ this.GetElementCounter()
				+ "\")' type='checkbox'> With Verbatim? </label></td>";

		element = element + "<td><input question-sequence-update='"
				+ this.GetElementCounter() + "' value='Verbatim For "
				+ questionName + "' disabled name='sample_this"
				+ this.GetElementCounter() + "' countaTable-count-text='"
				+ this.GetElementCounter()
				+ "'  class='form-control' question-survey-id-update='"
				+ ((surveyId == undefined) ? "Empty" : surveyId)
				+ "' type='text' value='' question-id-update='" + uuid + "'";
		element = element + " class='" + surveyId + "' /></td>";
		element = element + " <td><select disabled class='" + surveyId
				+ "' answer-survey-id-update='"
				+ ((surveyId == "undefined") ? "Empty" : surveyId) + "' id='"
				+ ((surveyId == "undefined") ? "Empty" : surveyId) + "_" + uuid
				+ "'>";

		element = element + "<option selected class='" + surveyId + "-update"  + "' value='3'>Verbatim</option>";
		element = element + "</td></tr>";
 
		$("#" + tableId).append(element);
	},
	DeleteThisRow : function(rowId) {
		var go = confirm("Are you sure you want to delete row?");
		if (go == true) {
			$("#" + rowId).remove();
		}
		return false;
	}, ReplaceWithAsciiChar : function(stringToReplace){
		
	}
};
