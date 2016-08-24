<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">


<meta name="this site is to create / record / sruvey the helpdesk"
	content="">
<meta name="marangelo">
<title>iSurvey</title>

<link
	href="../../resources/css/bootstrap-3.3.5-dist/css/bootstrap.min.css"
	rel="stylesheet">
<link
	href="../../resources/css/bootstrap-3.3.5-dist/css/bootstrap-theme.css.map"></link>
<link href="../../resources/css/bootstrap-3.3.5-dist/css/dashboard.css"
	rel="stylesheet">

<link
	href="../../common/lib/DataTables-1.10.11/media/css/jquery.dataTables.css"></link>
<link
	href="../../common/lib/DataTables-1.10.11/media/css/dataTables.bootstrap.css"></link>
<link
	href="../../common/lib/DataTables-1.10.11/examples/resources/syntax/shCore.css"></link>


<link rel="stylesheet"
	href="../../common/lib/selectmultiple/dist/css/bootstrap-multiselect.css"
	type="text/css" />


<script src="../../common/lib/jquery-1.11.3.min.js"></script>
<script src="../../resources/jquery-ui.min.js"></script>



<script src="../../resources/css/bootstrap-3.3.5-dist/js/moment.js"></script>
<script src="../../resources/css/bootstrap-3.3.5-dist/js/transition.js"></script>
<script src="../../resources/css/bootstrap-3.3.5-dist/js/collapse.js"></script>
<script
	src="../../resources/css/bootstrap-3.3.5-dist/css/bootstrap.min.js"></script>

<script type="text/javascript"
	src="../../common/lib/DataTables-1.10.11/media/js/jquery.dataTables.min.js"></script>
<script type="text/javascript"
	src="../../common/lib/DataTables-1.10.11/media/js/dataTables.bootstrap.js"></script>
<script type="text/javascript"
	src="../../common/lib/DataTables-1.10.11/media/js/dataTables.bootstrap.js"></script>


<script type="text/javascript"
	src="../../common/lib/DataTables-1.10.11/media/js/dataTables.bootstrap.js"></script>


<script type="text/javascript"
	src="../../common/lib/DataTables-1.10.11/examples/resources/syntax/shCore.js"></script>

<script type="text/javascript"
	src="../../common/lib/DataTables-1.10.11/extensions/Buttons/js/dataTables.buttons.min.js"></script>
<script type="text/javascript"
	src="../../common/lib/DataTables-1.10.11/extensions/Select/js/dataTables.select.min.js"></script>
<script src="../../common/lib/tinymce/js/tinymce/jquery.tinymce.min.js"></script>
<script src="../../common/lib/tinymce/js/tinymce/tinymce.min.js"></script>

<script src="../../common/lib/fusioncharts-suite-xt/js/fusioncharts.js"></script>
<script
	src="../../common/lib/fusioncharts-suite-xt/js/fusioncharts.charts.js"></script>
<script
	src="../../common/lib/fusioncharts-suite-xt/js/fusioncharts.gantt.js"></script>
<script
	src="../../common/lib/fusioncharts-suite-xt/js/fusioncharts.maps.js"></script>
<script
	src="../../common/lib/fusioncharts-suite-xt/js/fusioncharts.powercharts.js"></script>
<script
	src="../../common/lib/fusioncharts-suite-xt/js/fusioncharts.widgets.js"></script>
<script type="text/javascript"
	src="../../common/lib/fusioncharts-suite-xt/js/themes/fusioncharts.theme.fint.js"></script>

<script type="text/javascript"
	src="../../resources/css/bootstrap-3.3.5-dist/css/ie10-viewport-bug-workaround.js"></script>
<script type="text/javascript"
	src="../../resources/css/bootstrap-3.3.5-dist/css/ie-emulation-modes-warning.js"></script>
<script type="text/javascript"
	src="../../resources/css/bootstrap-3.3.5-dist/dist/js/bootstrap-datepicker.js"
	charset="UTF-8"></script>
<script src="../../common/lib/overlay.jquery/loadingoverlay.js"></script>

<script
	src="../../resources/css/bootstrap-3.3.5-dist/css/ie-emulation-modes-warning.js"></script>
<script type="text/javascript"
	src="../../units/modules/global.survey.js"></script>
<script type="text/javascript" src="../../units/modules/admin.js"></script>
<script type="text/javascript" src="../../units/modules/initializer.js"></script>
<script type="text/javascript" src="../../units/modules/index.js"></script>

<script type="text/javascript" src="../../units/modules/adminASE.js"></script>
<script type="text/javascript"
	src="../../units/modules/adminASEindex.js"></script>
<script type="text/javascript"
	src="../../units/modules/adminASEInitializer.js"></script>

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link href="../../resources/css/bootstrap-3.3.5-dist/css/survey.css"></link>

<script type="text/javascript"
	src="../../common/lib/selectmultiple/dist/js/bootstrap-multiselect.js"></script>
<script type="text/javascript"
	src="../../common/lib/selectmultiple/dist/js/bootstrap-multiselect-collapsible-groups.js"></script>

<script type="text/javascript" src="../../common/lib/d3.min.js"></script>
<script src="../../common/lib/jquery.browser.min.js"></script>

<link
	href="../../resources/css/bootstrap-3.3.5-dist/dist/css/bootstrap-datepicker.min.css"></link>

</head>
<style>
@import
	url(http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);

#sample_active_table_filter {
	float: right;
}

#active_reports_display {
	overflow-x: hidden;
	padding-top: 10px;
}

#sample_active_table_paginate {
	float: right;
}

#sample_active_table {
	border-collapse: collapse;
	padding-top: 20px;
}

#sample_active_table {
	padding-top: 20px;
}

html, body {
	font-family: 'Open Sans', sans-serif;
	padding-top: 50px;
}

.container-full {
	margin: 0 auto;
	width: 100%;
}
</style>

<body>

	<nav class="navbar navbar-inverse navbar-fixed-top">
	<div style="background-color: #494949" class="container-fluid">
		<img style="height: 100px;" src="../../common/lib/images/banner.jpg" />
		<div class="navbar-header" style="float-left: 0px">
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#navbar" aria-expanded="false"
				aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<a class="navbar-brand" id='home_button' href="javascript:void(0)">iSurvey</a>
		</div>

		<div id="navbar" class="navbar-collapse collapse">
			<ul class="nav navbar-nav navbar-right">
				<li><a href="javascript:void(0);" data-toggle="modal"
					id="launch_create_survey_dialogue_top" data-target="#myModal">New
						Survey</a></li>
				<li><a href="javascript: void(0)"
					id="launch_analytics_page_top">Analytics</a></li>
				<li>
				<li><a href="javascript: void(0)" id="load_archive_survey">Archive
						Surveys</a></li>
				<li><a
					href="./Dashboard Template for Bootstrap_files/Dashboard Template for Bootstrap.html">Profile</a></li>
			</ul>
			<form class="navbar-form navbar-right">
				<input type="text" class="form-control" placeholder="Search...">
			</form>
		</div>
	</div>
	</nav>
	<br />
	<div class="container-fluid">
		<div>

			<div class="col-sm-3 col-md-2 sidebar">
				<br /> <br /> <br /> <br />
				<ul class="nav nav-sidebar">
					<li class="active"><a href="javascript:void(0)">Useful
							Links <span class="sr-only">(current)</span>
					</a></li>

					<li><a href="javascript:void(0)" id="launch_home">Home</a></li>
					<li id="more_option_tab"><a href="javascript:void(0)"
						data-toggle="modal" id="launch_create_survey_dialogue"
						data-target="#myModal">New Survey <i style='padding-left: 5px'
							class='glyphicon glyphicon-plus'></i>
					</a>
						<ul class="nav nav-sidebar collapse" id="to_hide_ul"
							style="padding-left: 25px;">
							<li><a data-toggle="modal" data-target="#myModal"
								href="javascript:void(0)">Custom Survey </a></li>
							<li><a href="javascript:void(0)" data-toggle="modal"
								data-target="#aseModal" id="create_new_ase_survey">ASE
									Survey</a></li>
							<li><a href="javascript:void(0)" data-toggle="modal"
								data-target="#psmModal" id="create_new_ase_survey">Send
									Quality Survey</a></li>
						</ul></li>
					<li><a href="javascript:void(0)" id="launch_archives_page">Archive
							<i style='padding-left: 20px' class='glyphicon glyphicon-stats'></i>
					</a></li>
					<li id="more_option_tab_ase"><a href="#">Analytics </a>
						<ul class="nav nav-sidebar collapse" id="to_hide_ul_analytics"
							style="padding-left: 25px;">
							<li><a href="javascript:void(0)" id="launch_analytics_page">
									Default Analytics </a></li>

							<li><a href="javascript:void(0)"
								id="launch_analytics_ase_page">Ase Analytics </a></li>
						</ul></li>
					<!-- <li><a href="javascript:void(0)">Export <i
							style='padding-left: 35px' class='glyphicon glyphicon-export'></i></a></li> -->
				</ul>

			</div>
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
				id='test_wait'>

				<div class="table-responsive" id="div_edit_page"></div>

				<div class="table-responsive" id="div_analytics_page"></div>

				<div class="table-responsive table" id="sample_wat_test"></div>

				<div class="table-responsive" id="archive_table"></div>

				<div id='active_reports_display'>
					<h1>Active Survey</h1>
					<p style='padding-top: 10px;'></p>
					<table id='sample_active_table'
						class='display table-responsive table table-striped' width="100%">
					</table>
				</div>

				<div class="row placeholders">
					<div class="col-xs-6 col-sm-3 placeholder">
						<div id="" class="row placeholders"></div>
					</div>
				</div>

				<div class="table-responsive" id="sample" style=""
					cellpadding="10px;">
					<table class="table table-striped">
						<!--  theaed tbody -->


					</table>
					<div class="modal fade" id="myModal" role="dialog">
						<div class="modal-dialog">

							<!-- Modal content-->
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Create New Survey</h4>
								</div>
								<div class="modal-body">
									<table id="" class="table">
										<tr>
											<td><label for="survey_name_add">Survey Name:</label></td>
											<td><input type="text" class="form-control"
												id="survey_name_add"></td>
										</tr>
										<tr>
											<td><label for="survey_start_date">Start Date:</label></td>
											<td><input type="text" class="form-control datepicker"
												id="survey_start_date" data-provide="datepicker"></td>
										</tr>
										<tr>
											<td><label for="survey_end_date">End Date:</label></td>
											<td><input type="text" class="form-control datepicker"
												id="survey_end_date" data-provide="datepicker"></td>
										</tr>
										<tr>
											<td><label for="survey_desc_add">Survey
													Description:</label></td>
											<td><textarea rows="8" class="form-control mceEditor"
													id="survey_desc_add" name="survey_desc_add"
													style="resize: none"></textarea></td>
										</tr>

										<tr>
											<td><label>Survey Type</label></td>
											<td><select class="form-control" id="analytic_type">
													<option value="1">Default</option>
													<option value="3">ASE</option>
											</select></td>
										</tr>
										<tr>
											<td><label>Anonymous</label></td>
											<td><input id='anonymous' type="checkbox" value=""></td>
										</tr>
										<tr>
											<td><label>Recipient List</label></td>
											<td><div class="btn-group btn-group-justified"
													role="group" aria-label="...">
													<div class="btn-group" role="group">
														<button type="button" id="append_individual_create_page"
															class="btn btn-default">Individual</button>
													</div>
													<div class="btn-group" role="group">
														<button type="button" id="append_work_group_create_page"
															class="btn btn-default">Work Group</button>
													</div>
													<div class="btn-group" role="group">
														<button type="button" id="append_team_manager_create_page"
															class="btn btn-default">TM</button>
													</div>
													<div class="btn-group" role="group">
														<button type="button" id="append_ase_create_page"
															class="btn btn-default">ASE</button>
													</div>
												</div></td>
										</tr>
										<tr>
											<td><label>&nbsp;</label></td>
											<td id="td_multiselect"></td>
										</tr>
									</table>
								</div>
								<div class="modal-footer">
									<button type="button" id="create_new_survey"
										class="btn btn-default">Add</button>
									<button type="button" class="btn btn-default"
										data-dismiss="modal">Close</button>
									<button type="button" id="alert_values" class="btn btn-default">alert</button>
								</div>
							</div>

						</div>
					</div>

					<!--  EMAIL MODAL -->
					<div class="modal fade" id="emailModal" role="dialog">
						<div class="modal-dialog">

							<!-- Modal content-->
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">Email Template</h4>
								</div>
								<div class="modal-body">
									<table id="" class="table">
										<tr>
											<td><label for="email_message">Email Body:</label></td>
											<td><textarea rows="8" class="form-control mceEditor"
													id="email_message" style="resize: none"></textarea></td>
										</tr>
									</table>
								</div>
								<div class="modal-footer">
									<button type="button" id="send_email" class="btn btn-default">Send</button>
									<button type="button" class="btn btn-default"
										data-dismiss="modal">Close</button>

								</div>
							</div>
						</div>
					</div>
					<!-- EMAIL MODAL END -->



					<!--  ASE MODAL -->
					<div class="modal fade" id="aseModal" role="dialog">
						<div class="modal-dialog">

							<!-- Modal content-->
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">ASE New Survey</h4>
								</div>
								<div class="modal-body">
									<table id="" class="table">
										<tr>
											<td>Employee Shift</td>
											<td style="text-align: center" colspan="4">ASE Shift</td>
										</tr>
										<tr>
											<td>APAC</td>
											<td><label class="checkbox-inline"><input
													type="checkbox" id="recepient_apac_all">All</label></td>
											<td><label class="checkbox-inline"><input
													chk-val="1" class="apac_shift_class" type="checkbox"
													id="recepient_apac_apac" value="">APAC</label></td>
											<td><label class="checkbox-inline"><input
													chk-val="2" class="apac_shift_class" type="checkbox"
													id="recepient_apac_emea" value="">EMEA</label></td>
											<td><label class="checkbox-inline"><input
													chk-val="3" class="apac_shift_class" type="checkbox"
													id="recepient_apac_amers" value="">AMERS</label></td>

										</tr>
										<tr>
											<td>EMEA</td>
											<td><label class="checkbox-inline"><input
													type="checkbox" id="recepient_emea_all">All</label></td>
											<td><label class="checkbox-inline"><input
													chk-val="1" class="emea_shift_class" type="checkbox"
													id="recepient_emea_apac" value="">APAC</label></td>
											<td><label class="checkbox-inline"><input
													chk-val="2" class="emea_shift_class" type="checkbox"
													id="recepient_emea_emea" value="">EMEA</label></td>
											<td><label class="checkbox-inline"><input
													chk-val="3" class="emea_shift_class" type="checkbox"
													id="recepient_emea_amers" value="">AMERS</label></td>

										</tr>
										<tr>
											<td>AMERS</td>
											<td><label class="checkbox-inline"><input
													type="checkbox" id="recepient_amers_all">All</label></td>
											<td><label class="checkbox-inline"><input
													class="amers_shift_class" type="checkbox" chk-val="1"
													id="recepient_amers_apac" value="">APAC</label></td>
											<td><label class="checkbox-inline"><input
													chk-val="2" class="amers_shift_class" type="checkbox"
													id="recepient_amers_emea" value="">EMEA</label></td>
											<td><label class="checkbox-inline"><input
													chk-val="3" class="amers_shift_class" type="checkbox"
													id="recepient_amers_amers" value="">AMERS</label></td>

										</tr>
										<tr>
											<td>Details</td>
											<td colspan="2"><label for="ase_year">Year</label> <select
												id="ase_year" class="form-control">
													<option value="2015">2015</option>
													<option value="2016">2016</option>
													<option value="2017">2017</option>
													<option value="2018">2018</option>
													<option value="2019">2019</option>
													<option value="2020">2020</option>
											</select></td>

											<td colspan="2"><label for="ase_quarter">Quater</label>
												<select class="form-control" id="ase_quarter">
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
											</select></td>
										</tr>
									</table>

								</div>
								<div class="modal-footer">
									<button type="button" id="save_new_ase_survey"
										class="btn btn-default">Create</button>
									<button type="button" class="btn btn-default"
										data-dismiss="modal">Close</button>

								</div>
							</div>
						</div>
					</div>
					<!-- ASE MODAL END -->



					<!--  PSM MODAL -->
					<div class="modal fade" id="psmModal" role="dialog">
						<div class="modal-dialog">

							<!-- Modal content-->
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal">&times;</button>
									<h4 class="modal-title">ASE New Survey</h4>
								</div>
								<div class="modal-body">
									<table id="" class="table">
										<tr>
											<td>Product Support Manager</td>
											<td colspan="2" style=""text-align:center">Team Manager</td>
											<td>Email Agent</td>
										</tr>
										<tr>
											<td><input type="text" class='form-control' id="psm_txt_survey_uu_id" /></td>
											<td><input type="text" class='form-control' id="tm_txt_survey_uu_id" /></td>
											<td><input type="text" class='form-control' id="tm_txt_survey_uu_id_two" /></td>
											<td><input type="text" class='form-control' id="agent_txt_survey_uu_id" /></td>
										</tr>
									</table>

								</div>
								<div class="modal-footer">
									<button type="button" id="email_recepients_quality_360"
										class="btn btn-default">send email</button>
									<button type="button" class="btn btn-default"
										data-dismiss="modal">Close</button>

								</div>
							</div>
						</div>
					</div>
					<!-- PSM MODAL END -->
				</div>
			</div>
		</div>
	</div>
</html>
