<head>
<style>
</style>
</head>
<div class="container-fluid">
	<h2>Update Survey Page</h2>
	<div class="table-responsive">
		<table id="update_active_surveys" class="table hover borderless"></table>
		<div id="test_active_surveys"></div>
		<div id="add_space"></div>

	</div>
	<div style="float-right: 0px;">
		<a class="btn btn-info btn-md" role="button" href="javascript:void(0)"
			id="append_new_quesetion_survey">Add Question</a> <a
			class="btn btn-info btn-md" role="button" href="javascript:void(0)"
			id="get_survey_other_details" data-toggle="modal"
			data-target="#otherSurveyDetails">Other Details</a> <br />
	</div>
	<hr />
	<div class='pull-right' style="float-right: 0px;">
		<a class="btn btn-info btn-danger btn-md" role="button"
			href="javascript:void(0)" id="back_home">Back</a> <a
			class="btn btn-info btn-md" role="button" href="javascript:void(0)"
			id="update_elements"
			onclick='adminObj.DeleteSurveyQuestion(globalObj.GetSurveyUUID())'>Save</a>
	</div>

	<div class="modal fade" id="otherSurveyDetails" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Survey Details</h4>
				</div>
				<div class="modal-body">
					<div class="table">
						<label for="start_date">Start Date</label> <input type="text"
							class="form-control" id="start_date" /> <label for="end_date">End
							Date</label> <input type="text" class="form-control" id="end_date" />
					</div>
					<div class="input-group">
						<input type="email" value='email' placeholder='email' id='email_update_recepient' class="form-control"> <span
							class="input-group-btn">
							<button onclick='adminObj.AddRecepientUpdate()'
								class="btn btn-default" type="button">Add Recepient</button>
						</span>
					</div>
					<div>
						<hr />
					</div>
					<div class="table">
						<table id="recepients_for_email_survey"
							class="display table table-striped"></table>

					</div>

				</div>
				<div class="modal-footer">
					<button type="button" id="update_survey_detalils"
						class="btn btn-default">Update</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

				</div>
			</div>

		</div>
	</div>
</div>
<script>
	$(document).ready(
			function() {
				$("#back_home").click(function() {
					adminObj.GetAllRequiredQuestion();
					globalObj.ReadActiveSurvey();
					globalObj.SetElementCounter("0");
				});
				$("#append_new_quesetion_survey").click(
						function() {
							globalObj.AppendNewQuestionTypeUpdate(
									"update_active_surveys", globalObj
											.GetSurveyUUID());
						});
				globalObj.GetSurveyDetails(globalObj.GetSurveyUUID(),
						"update_active_surveys");

				globalObj.MakeDatePicker("start_date", "end_date");

				$("#update_survey_detalils").click(
						function() {
							adminObj.UpdateSurveyDates(globalObj
									.GetSurveyUUID(), $("#start_date").val(),
									$("#end_date").val());
						});

				$('#otherSurveyDetails').on(
						'shown.bs.modal',
						function(e) {
							$(this).hide().show();
							globalObj.GetSurveyDetails(globalObj
									.GetSurveyUUID(), "update_active_surveys");
							adminObj.GetAllSurveyRecepientsForUpdate(globalObj
									.GetSurveyUUID());
							$("#email_update_recepient").val("");
						});
				$('#otherSurveyDetails').on('hide.bs.modal', function(e) {

				});

			});
</script>
















