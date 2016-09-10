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
	
	questionId : function(){
		var questionId = ['24','48','88','90','98'];
	},	
		
	GetMyResultsBucketed : function() {
		$
		.ajax({
			async : false,
			type : "POST",
			url : "../../../test-client/actions/getltsummary",
			data : "{\"userId\":\""
					+ myresultObj.GetltParameterByName("u") + "\"," +
					"\"question_id\"" + 		
					"}",
			contentType : "application/x-www-form-urlencoded",
			dataType : "json",
			success : function(response) {
				var resultsArray = (typeof response) == 'string' ? eval('('
						+ response + ')')  
						: response;

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
	}

}