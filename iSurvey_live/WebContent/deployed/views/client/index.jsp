<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Survey</title>
<link
	href="../../resources/css/bootstrap-3.3.5-dist/css/bootstrap.min.css"
	rel="stylesheet">
<script src="../../common/lib/jquery-1.11.3.min.js"></script>
<script src="../../resources/jquery-ui.min.js"></script>
<script
	src="../../resources/css/bootstrap-3.3.5-dist/css/bootstrap.min.js"></script>
<script src="../../units/modules/client.js"></script>
<script type="text/javascript"
	src="../../units/modules/global.survey.js"></script>

<script src="../../units/modules/clientInitializer.js"></script>
<script src="../../units/modules/clientIndex.js"></script>
<script src="../../common/lib/overlay.jquery/loadingoverlay.js"></script>
<script src="../../common/lib/jquery.browser.min.js"></script>
<style>
@import
	url(http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);

.container-full {
	margin: 0 auto;
	width: 100%;
}

.no-border {
	border: 0;
	box-shadow: none;
	/* You may want to include this as bootstrap applies these styles too */
}

html {
	position: relative;
	min-height: 100%;
}

body {
	/* Margin bottom by footer height */
	margin-bottom: 60px;
}

.footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	/* Set the fixed height of the footer here */
	height: 30px;
	background-color: #f5f5f5;
}

/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */
.container {
	width: auto;
	max-width: 680px;
	padding: 0 15px;
}

.container .text-muted {
	margin: 20px 0;
}

.numbers {
	font-weight: bold;
}

tr td {
	border-bottom: 8 !important;
	position: absolute;
}

img {
	width: 100%;
	height: auto;
}

.required {
	color: red;
	font-weight: bolder;
	padding-left: 5px;
}
</style>
</head>
<body>
	<form id="client_survey_form">
		<div style="text-align: left;">
			<img src="hic.jpg" style="" />
			<!-- <h1 style="margin-left: 200px;">High Impact Coaching</h1> -->
			<div style="text-align: center" id="survey_client_instructions" 
				class="container-fluid"></div>
			<br />

		</div>
		<div class="container-fluid" style="min-height: 100%; height: 100%;">
			<div class="container-fluid">
				<div class="container-fluid" id="appendClientSurvey"></div>
				<hr />
				
			</div>
		</div>
		<div class="container-fluid">
			<a href="javascript:void(0)" id="savesurveyanswers"
				class="btn btn-default btn-block" role="button">SUBMIT</a>

		</div>

		<div class="footer"
			style="background-color: #bab5b0; width: 100%; text-align: center; color: #FFFFFF; text-decoration: none;">
			<a id="test" style="color: #FFFFFF; text-decoration: none;"
				href="mailto:marangelo.delatorre@thomsonreuters.com">
				Performance and Business Planning.</a>
		</div>
	</form>
</body>
</html>