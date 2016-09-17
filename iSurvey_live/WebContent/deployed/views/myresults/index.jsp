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

.highcharts-stack-labels {
	display: none;
}

.highcharts-tooltip {
	display: none;
}

#tinymce {
	
}

::-webkit-input-placeholder {
	font-weight: bold;
}

.child_div_1 {
	float: left;
	left: 0;
	margin-right: 5px;
	margin-bottom: 25px;
	margin-top: 20px;
}

.label-warning {
	background-color: #006600;
}

.label-success {
	background-color: #ff8800;
	margin-right: 25px;
}

span {
	float: left;
	margin-right: 10px;
}

#container11 {
	
	margin-top 3000px;
	border-top: black 1px solid;
	position: relative;
}
ul {
    margin: 20px;
    list-style: none;
}

.input-color {
    position: relative;
}
.input-color input {
    padding-left: 20px;
}
.input-color .color-box {
    width: 10px;
    height: 10px;
    display: inline-block;
    background-color: #ccc;
    position: absolute;
    left: 5px;
    top: 5px;
    border : none;
}
</style>

</head>
<body>
  
	<img src="../../views/client/hic.jpg" />

	 

<div class="container-fluid">
<div>
	<p style="margin-top: 50px;"><h1 style="margin-top: 50px; margin-left: 100px;" id="openning"></h1></p>
	<ul>
    <li>
        <div class="input-color">
            <input type="text" value="9-10" />
            <div class="color-box" style="background-color: #006600;"></div>
            <!-- Replace "#FF850A" to change the color -->
        </div>
    </li>
    <li>
        <div class="input-color">
            <input type="text" value="7-8" />
            <div class="color-box" style="background-color: #FABE00;"></div>
            <!-- Replace "navy" to change the color -->
        </div>
    </li>
    
    <li>
        <div class="input-color">
            <input type="text" value="4-6" />
            <div class="color-box" style="background-color: #595959;"></div>
            <!-- Replace "#FF850A" to change the color -->
        </div>
    </li>
    <li>
        <div class="input-color">
            <input type="text" value="1-3" />
            <div class="color-box" style="background-color: #C00000;"></div>
            <!-- Replace "navy" to change the color -->
        </div>
    </li>
</ul>

</div>




		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 7px">
						<span
							style="font-size: 8px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span id="container1_my_perception" class="label label-success">8</span>
				</h1>
				<h1>
					<span id="container1_team_perception" class="label label-warning">10</span>
				</h1>


			</div>

			<div id="container1"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>

		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 7px">
						<span
							style="font-size: 8px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span class="label label-success" id="container2_my_perception"
						id="container2_my_perception">8</span>
				</h1>
				<h1>
					<span class="label label-warning" id="container2_team_perception">10</span>
				</h1>
			</div>
			<div id="container2"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>

		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 7px">
						<span
							style="font-size: 8px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span class="label label-success" id="container3_my_perception">8</span>
				</h1>
				<h1>
					<span class="label label-warning" id="container3_team_perception">10</span>
				</h1>
			</div>
			<div id="container3"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>


		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 7px">
						<span
							style="font-size: 8px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span class="label label-success" id="container4_my_perception">8</span>
				</h1>
				<h1>
					<span class="label label-warning" id="container4_team_perception">10</span>
				</h1>
			</div>
			<div id="container4"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>

		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 7px">
						<span
							style="font-size: 8px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span class="label label-success" id="container5_my_perception">8</span>
				</h1>
				<h1>
					<span class="label label-warning" id="container5_team_perception">10</span>
				</h1>
			</div>
			<div id="container5"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>

		<!-- 6 -->
		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 7px">
						<span
							style="font-size: 8px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span class="label label-success" id="container6_my_perception">8</span>
				</h1>
				<h1>
					<span class="label label-warning" id="container6_team_perception">10</span>
				</h1>
			</div>
			<div id="container6"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>

		<!-- 7 -->
		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 7px">
						<span
							style="font-size: 8px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span class="label label-success" id="container7_my_perception">8</span>
				</h1>
				<h1>
					<span class="label label-warning" id="container7_team_perception">10</span>
				</h1>
			</div>
			<div id="container7"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>


		<!--  8 -->

		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 7px">
						<span
							style="font-size: 8px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span class="label label-success" id="container8_my_perception">8</span>
				</h1>
				<h1>
					<span class="label label-warning" id="container8_team_perception">10</span>
				</h1>
			</div>
			<div id="container8"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>

		<!-- 9 -->
		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 7px">
						<span
							style="font-size: 8px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span class="label label-success" id="container9_my_perception">8</span>
				</h1>
				<h1>
					<span class="label label-warning" id="container9_team_perception">10</span>
				</h1>
			</div>
			<div id="container9"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>

		<!-- 10 -->

		<div class="container-fluid child_div_1">
			<div style="margin-left: 100px;">
				<div>
					<p style="font-size: 10px">
						<span
							style="font-size: 10px; margin-right: 5px; margin-bottom: 5px;">
							Self Assessment || Team Perception </span>
					</p>

				</div>
				<h1>
					<span class="label label-success" id="container10_my_perception">8</span>
					<span style="font-size: 1px;">Manager's Perception</span>
				</h1>
				<h1>
					<span class="label label-warning" id="container10_team_perception">10</span>
				</h1>
			</div>
			<div id="container10"
				style="width: 230px; height: 300px; margin-left: 50px; border-left: 1px solid black;"></div>
		</div>



</div>
 
		<div id="container11"
			style="height: 750px; width: auto; margin-top: 200px;"></div>
			
			
			
</body>
</html>
<script src="../../units/modules/myresults.js"></script>
<script src="../../units/modules/myresultsInitializer.js"></script>
<script src="../../units/modules/myresultsIndex.js"></script>
<script>
	$(function() {
		$('#container11')
				.highcharts(
						{
							exporting : {
								enabled : false
							},
							chart : {
								type : 'column'
							},
							title : {
								text : 'Internal Roadblocks',
									style: { "size": "50px"}
							},
							xAxis : {
								categories : myresultObj.internalQuestionName(),
								labels : {
									rotation : 270,
									y : 40
								},
								lineWidth: 0,
								   minorGridLineWidth: 0,
								   lineColor: 'transparent'
							},
							yAxis : {
								min : 0,
								stackLabels : {
									enabled : false
								},
								labels : {
									enabled : false
								},
								lineWidth : 0,
								minorGridLineWidth : 0,
								lineColor : 'transparent',
								gridLineColor: 'transparent'
							},
							tooltip : {
								headerFormat : '<b>{point.x}</b><br/>',
								pointFormat : '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
							},
							plotOptions : {
								column : {
									stacking : 'normal',
									dataLabels : {
										enabled : true,
										color : (Highcharts.theme && Highcharts.theme.dataLabelsColor)
												|| 'white',
										style : {
											textShadow : '0 0 3px black'
										}
									}
								}
							},

							series : [ {
								name : 'Internal Roadblocks',
								data : myresultObj
										.GetMyOwnPerceptiontwentyfive(),
								color : "#ff8800",
								formatter : function() {
									return this.x + ': ' + this.y
								},
								inside : true,
								rotation : -90

							} ],

						});

	});
</script>









