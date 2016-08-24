var adminase = adminase || {};

adminase.adminaseObj = function() {
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
};

adminase.adminaseObj.prototype = {
	admintest : function() {
		alert("this is just a test");
	}
};