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


<script src="../../units/modules/clientpsm.js"></script>
<script type="text/javascript"
	src="../../units/modules/global.survey.js"></script>

<script src="../../units/modules/clientpsmInitializer.js"></script>
<script src="../../units/modules/clientpsmindex.js"></script>
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
	overflow-y: scroll;
}

body {
	/* Margin bottom by footer height */
	margin-bottom: 60px;
}

]
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
	height: 100%;
}

.container-full {
	margin: 0 auto;
	width: 100%;
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
	table-layout: fixed;
	display: table-cell;
	white-space: nowrap;
	padding: 0px;
	overflow-y: scroll;
}

tr {
	height: 50px;
}

.datatable td {
	text-overflow: ellipsis;
}

tr td {
	border-bottom: 8 !important;
	width: 50px;
	word-wrap: break-word !important;
	word-break: break-all;
	table-layout: fixed;
	white-space: nowrap;
}

.dataTables_filter {
	display: none;
}

#testpsmappend {
	overflow: hidden;
}

th {
	overflow: hidden;
	word-wrap: break-word;
	border-bottom: 8 !important;
	width: 50px;
	word-wrap: break-word !important;
	word-break: break-all;
	table-layout: fixed;
	white-space: nowrap;
}

body {
	margin: 0;
}

td {
	word-wrap: break-word;
	word-wrap: break-word !important;
	white-space: nowrap;
}

.dataTable td {
	
}

table {
	border-collapse: collapse;
	table-layout: fixed;
	width: 310px;
}

table td {
	border: solid 1px #fab;
	width: 100px;
	word-wrap: break-word;
}

.required {
	color: red;
	font-weight: bolder;
	padding-left: 5px;
}

img {
	width: 100%;
	height: auto;
}

table ::-webkit-scrollbar {
	display: none;
}

.DTFC_LeftBodyLiner {
	overflow-x: hidden;
}

.DTFC_LeftHeadWrapper ::-webkit-scrollbar {
	display: none;
}

.dataTables_scrollHeadInner ::-webkit-scrollbar {
	display: none;
}
</style>
</head>
<title>Survey for PSM</title>
   
<body>
	<form id="client_psm_survey_form">
		<div class="row-fluid">
			<img src="hic.jpg" />
			<!-- <h1>High Impact Coaching</h1> -->
		</div>
		<div class="container-fluid" id="survey_instructions"></div>
		<div class="container" style="min-height: 100%; height: 100%;">
			<div>
				<h1 align='center' id='survey_title'></h1>
				<p id="survey_psm_description"></p>
			</div>
		</div>
		<div class="row-fluid" id="appendClientpsmSurvey"></div>

		<div id="testpsmappend" class="row-fluid table-responsive">
			<table id="append_psm_tm_question_table"
				class="table stripe row-border order-column"
				style='font-size: small;'></table>
		</div>
		<hr />
		<div class="container-fluid">
			<a href="javascript:void(0)" style="visibility: hidden;"
				id="savepsmsurveyanswers" style=""
				class="btn btn-default btn btn-primary btn-lg" role="button">SUBMIT</a>

		</div>



		<div class="footer" style="background-color: #bab5b0; width: 100%"></div>
	</form>
</body>
</html>