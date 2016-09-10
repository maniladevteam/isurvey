<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title></title>

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

<script src="../../common/lib/overlay.jquery/loadingoverlay.js"></script>
<script src="../../common/lib/jquery.browser.min.js"></script>

<script src="../../common/lib/tinymce/js/tinymce/jquery.tinymce.min.js"></script>
<script src="../../common/lib/tinymce/js/tinymce/tinymce.min.js"></script>

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link href="../../resources/css/bootstrap-3.3.5-dist/css/survey.css"></link>

<link
	href="../../common/lib/DataTables-1.10.11/media/css/dataTables.bootstrap.css"></link>


<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
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

#tinymce {
	
}

::-webkit-input-placeholder {
	font-weight: bold;
}

.child_div_1 {
	float: left;
	margin-right: 5px;
	margin-bottom: 25px;
	margin-top: 10px;
}

span {
	float: left;
	margin-right: 5px;
}
</style>

</head>
<body>
	
	<img src="../../views/client/hic.jpg" />

	<p style="margin-top: 50px"></p>
	
	<div class="container-fluid child_div_1">
		<div style="margin-left: 100px;">
			<h1>
				<span class="label label-success">7</span>
			</h1>
			<h1>
				<span class="label label-success">8</span>
			</h1>
			<h1>
				<span class="label label-warning" style="float: right;">10</span>
			</h1>
		</div>
		<div id="container"
			style="width: 230px; height: 500px; margin-left: 50px;"></div>
	</div>

	<div class="container-fluid child_div_1">
		<div style="margin-left: 100px;">
			<h1>
				<span class="label label-success">7</span>
			</h1>
			<h1>
				<span class="label label-success">8</span>
			</h1>
			<h1>
				<span class="label label-warning">10</span>
			</h1>
		</div>
		<div id="container2"
			style="width: 230px; height: 500px; margin-left: 50px;"></div>
	</div>
	
	<div class="container-fluid child_div_1">
		<div style="margin-left: 100px;">
			<h1>
				<span class="label label-success">7</span>
			</h1>
			<h1>
				<span class="label label-success">8</span>
			</h1>
			<h1>
				<span class="label label-warning">10</span>
			</h1>
		</div>
		<div id="container3"
			style="width: 230px; height: 500px; margin-left: 50px;"></div>
	</div>
	
	
	<div class="container-fluid child_div_1">
		<div style="margin-left: 100px;">
			<h1>
				<span class="label label-success">7</span>
			</h1>
			<h1>
				<span class="label label-success">8</span>
			</h1>
			<h1>
				<span class="label label-warning">10</span>
			</h1>	
		</div>
		<div id="container4"
			style="width: 230px; height: 500px; margin-left: 50px;"></div>
	</div>
	
	<div class="container-fluid child_div_1">
		<div style="margin-left: 100px;">
			<h1>
				<span class="label label-success">7</span>
			</h1>
			<h1>
				<span class="label label-success">8</span>
			</h1>
			<h1>
				<span class="label label-warning">10</span>
			</h1>
		</div>
		<div id="container5"
			style="width: 230px; height: 500px; margin-left: 50px;"></div>
	</div>


</body>
</html>
<script src=""></script>