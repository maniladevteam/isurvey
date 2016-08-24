<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">




<link
	href="../../common/lib/DataTables-1.10.11/media/css/jquery.dataTables.css"
	rel="stylesheet">
<link
	href="../../resources/css/bootstrap-3.3.5-dist/css/bootstrap.min.css"
	rel="stylesheet">


<link
	href="../../common/lib/DataTables-1.10.11/extensions/FixedColumns/css/fixedColumns.bootstrap.min.css"
	rel="stylesheet">

<link
	href="https://cdn.datatables.net/fixedcolumns/3.2.1/js/dataTables.fixedColumns.min.js"
	rel="stylesheet">


<script src="../../common/lib/jquery-1.11.3.min.js"></script>
<script src="../../resources/jquery-ui.min.js"></script>

<script
	src="../../resources/css/bootstrap-3.3.5-dist/css/bootstrap.min.js"></script>

<script
	src="../../common/lib/DataTables-1.10.11/media/js/jquery.dataTables.min.js"></script>

<script
	src="../../common/lib/DataTables-1.10.11/media/js/dataTables.bootstrap.min.js"></script>

<script
	src="../../common/lib/DataTables-1.10.11/extensions/FixedColumns/js/dataTables.fixedColumns.min.js"></script>


<script src="../../units/modules/clientase.js"></script>
<script type="text/javascript"
	src="../../units/modules/global.survey.js"></script>

<script src="../../units/modules/clientAseInitializer.js"></script>
<script src="../../units/modules/clientAsetIndex.js"></script>
<script src="../../common/lib/overlay.jquery/loadingoverlay.js"></script>
<script src="../../common/lib/jquery.browser.min.js"></script>

<script src="../../common/lib/tinymce/js/tinymce/jquery.tinymce.min.js"></script>
<script src="../../common/lib/tinymce/js/tinymce/tinymce.min.js"></script>


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
	/* overflow: hidden; */
}

body {
	/* Margin bottom by footer height */
	margin-bottom: 60px;
	overflow: scroll;
}

#testappend {
	overflow: hidden;
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

table tbody tr  td {
	white-space: nowrap;
	word-wrap: break-word !important;
	word-brek: break-all;
}

table {
	display: table-cell; 
	white-space: nowrap;
	padding: 0px;
	table-layout: fixed;
	over-flow: scroll;
}

tr {
	height: 50px;
}

tr td {
	border-bottom: 8 !important;
	width: 50px;
	word-wrap: break-word !important;
	word-break: break-all;
	table-layout: fixed
}

.dataTables_filter {
	display: none;
}

.required {
	color: red;
	font-weight: bolder;
	padding-left: 5px;
}
</style>
</head>
<title>Survey for ASE</title>

<body>
	<form id="client_ase_survey_form">
		<div class="container" style="min-height: 100%; height: 100%;">
			<div class="jumbotron" style="color: #ffffff; background: #898989">
				<h1 align='center' id='survey_title'></h1>
				<p id="survey_description"></p>
			</div>
			<div class="row-fluid" id="appendClientAseSurvey"></div>
			
			<div id="testappend" class="row-fluid table-responsive"></div>
			<hr />
			<div class="container-fluid">
				<a href="javascript:void(0)" style="visibility: hidden;" id="saveasesurveyanswers"
					style="width: 75%; float: left;" class="btn btn-default btn-block"
					role="button">SUBMIT</a>

			</div>
		</div>
		

		<div class="footer" style="background-color: #bab5b0; width: 100%"></div>
	</form>
</body>
</html>