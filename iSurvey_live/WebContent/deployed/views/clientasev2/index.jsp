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
<script type="text/javascript"
	src="../../common/lib/selectmultiple/dist/js/bootstrap-multiselect.js"></script>
<script type="text/javascript"
	src="../../common/lib/selectmultiple/dist/js/bootstrap-multiselect-collapsible-groups.js"></script>

<script src="../../units/modules/clientase.js"></script>
<script type="text/javascript"
	src="../../units/modules/global.survey.js"></script>

<script src="../../units/modules/clientAseInitializer.js"></script>
<script src="../../units/modules/clientAseIndexv2.js"></script>
<script src="../../common/lib/overlay.jquery/loadingoverlay.js"></script>
<script src="../../common/lib/jquery.browser.min.js"></script>

<script src="../../common/lib/tinymce/js/tinymce/jquery.tinymce.min.js"></script>
<script src="../../common/lib/tinymce/js/tinymce/tinymce.min.js"></script>

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link href="../../resources/css/bootstrap-3.3.5-dist/css/survey.css"></link>

<link
	href="../../common/lib/DataTables-1.10.11/media/css/dataTables.bootstrap.css"></link>



<script src="../../common/lib/underscore-min.js"></script>
<script src="../../common/lib/moment.min.js"></script>
<script src="../../common/lib/validate.min.js"></script>

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
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: pink;
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

#protoype_two_table {
	overflow-y: hidden;
}

div {
	border-bottom: none;
}

#dataTables_scrollBody {
	border: 0;
}

#testappendV2 {
	overflow-x: hidden;
}

li {
	padding-left: 20px;
}

.filter {
	padding-left: 0px;
}

.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th,
	.table>thead>tr>td, .table>thead>tr>th {
	padding: 8px;
	line-height: 1.42857143;
	vertical-align: top;
	border-top: 1px solid #ddd;
}
#tinymce{
	
}

::-webkit-input-placeholder {
    font-weight: bold;
}
</style>
</head>
<title>Survey for ASE</title>

<body>
	<form id="client_ase_survey_v2_form">
		<div class="row-fluid" style="">
			<img src="isurvey.jpg" />
			<p id="survey_description_v2"></p>
		</div>
		<div class="container-fluid" style="font-weight: bold; float: left">
			<div class="container-fluid"
				style="font-weight: bold; float: left; left: 0"
				id="instructions_ase_v2">
				<h1>Instructions</h1>
				<ul>
					<li>Select the <span style="font-size: medium; color: red;"> ASE/s</span> that you had the <span style="font-size: medium; color: red;"> most
						interaction with.</span> Click Search.</li>
					<li>Rate them based on the on pillars/questions indicated (1
						lowest - 10 highest).</li>
					<li>Do not forget to put a comment for each rated ASEs.</li>
					<li>Hit SUBMIT.</li>
				</ul>
			</div>

			<br />


			<div class="container-fluid" style="float: left;">
				<span style="font-weight: bold;">Select ASE </span> : <select
					multiple style="margin: auto;" class='dropdown' id="ase_list_here">
				</select>
			</div>
			<div class="container-fluid">
				<a class="btn btn-info" id="search_ase_values" role="button"
					href="javascript:void(0)">Search</a>
			</div>
		</div>

		<div class="container-fluid" style="min-height: 100%; height: 100%;">


			<div class="container-fluid" id="appendClientAseSurveyV2"></div>

			<div id="testappendV2" class="row-fluid table-responsive"
				style="margin-left: auto">
				<div>
					<table id="protoype_two_table"
						style="padding-left: 50px; border-bottom: 1px;"
						class="table row cell-border row-border center-block"></table>
				</div>
				<br />
			</div>

			<div id="testappendV2Comment" class="row-fluid table-responsive">
				
				<hr />
			</div>
			<div class="container-fluid">

				<a href="javascript:void(0)" style="visibility: hidden;"
					id="saveasesurveyanswersv2" style="width: 75%; float: left;"
					class="btn btn-default btn-block" role="button">SUBMIT</a>

			</div>
		</div>


		<div class="footer" style="background-color: #bab5b0; width: 100%"></div>
	</form>
</body>
</html>