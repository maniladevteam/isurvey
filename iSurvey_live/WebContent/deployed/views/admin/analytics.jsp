
<style>
.page {
	overflow-x: hidden;
}

.circleBase {
	behavior: url(PIE.htc); /* remove if you don't care about IE8 */
}

.type3 {
	float: left;
	clear: both;
	width: 200px;
	height: 200px;
	background: #428BCA;
	border: 5px solid white;
}

.type2 {
	float: left;
	width: 200px;
	height: 200px;
	background: #494949;
	width: 200px;
	border: 5px solid white;
}
*
/
</style>
<div class="page">
	<div class="container-fluid" style="position: inherit;">
		<h2>
			Survey Analytics <span id="survey_name"></span>
		</h2>
		<div class="container-fluid"
			style="position: inline; float: left; min-height: 100px;">
			<label for="survey_list">Surveys</label> <select style="width: 50%;"
				class="dropdown form-control" id="survey_list">

			</select>
		</div>
		<div class="container-fluid"
			style="position: inline; float: left; min-height: 150px;">
			<label id="recepient_label" for="work_group_list">Recepient
				List</label> <select multiple style="max-height: 100px;"
				class="form-control dropdown" id="work_group_list">
			</select>
		</div>
	</div>
	<div class="container-fluid" style="left-padding: 200px;">
		<a id="search_analytics" href="javascript:void(0)" role="button"
			class="btn btn-primary btn-md"> Search </a> <a id="export_excel"
			href="javascript:void(0)" role="button"
			class="btn btn-primary btn-md"> Export </a> <a
			id="verbatim_window_launched" data-toggle="modal"
			href="javascript:void(0)" role="button" onclick='globalObj.GetVerbatimQuestionPerSurvey()' data-target="#textanalytics" id="launch_text_analytics_window"
			class="btn btn-primary btn-md"> Text Analytics </a>
	</div>
	<hr />
	<div class="container-fluid" style="padding-left: 80px">
		<div class="circleBase type3" id="answered" hidden="hidden">
			<label
				style="padding-left: 35px; font-size: 150%; visible: false; padding-top: 50px; text-align: center;">Completion
				<p id="percent_answered" style="font-size: 250%;">100%</p>
			</label>
		</div>
		<div class="circleBase type2" id="pending" hidden="hidden">
			<label
				style="padding-left: 35px; font-size: 150%; padding-top: 50px; text-align: center; color: white;">Respondents
				<p id="total_respondents" style="font-size: 250%;">100%</p>
			</label>
		</div>
	</div>

	<!--  TEXT ANALYTICS MODAL -->
	<div class="modal fade" id="textanalytics" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Verbatims</h4>
					<select id="apeendVerbatimList" class="form-control"></select>
				</div>
				
				<div class="modal-body">
					<div id="appendWordCloud"  style="">
						<table id="testmetable" class="container-fluid"></table>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" id="analyze_text" class="btn btn-default">Analyze</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
			
		</div>
	</div>
	<!-- TEXT ANALYTICS MODAL END -->

	<div class="container-fluid">
		<div class="container-fluid" style="position: relative;">
			<div id="survey_top3" class="container-fluid"
				style="position: static;">
				<span id="table_for_recepient_content"></span>
			</div>
			<div id="survey_top2" class="container-fluid"
				style="position: relative;"></div>

		</div>

	</div>
	<div id="give_me_rate_here" class="container-fluid"
		style="position: relative;">
		<div id="hey" style="position: relative;" class="container-fluid"></div>
	</div>
</div>

<script>
	$(document)   
			.ready(
					function() {
						
						
						 $("#work_group_list").hide();
						$("#survey_list").change(
								function() {
									globalObj.AppendSurveyRecepients(
											"work_group_list", this.value, $(
													'option:selected', this)
													.attr('survey-type'));
								});
						globalObj.appendSurveyList("survey_list");
						$("#search_analytics")
								.click(
										function() {
											if (!$("#survey_list").val() == "") {
												globalObj
														.GetAllQuestionSurvey(
																$(
																		"#survey_list")
																		.val(),
																"survey_top2");
											} else {
												alert("Please choose your survey first!!!");
												return false;
											}
										});

						$("#export_excel").click(function() {
							adminObj.DownloadExcel();
						});
						$("#analyze_text").click(function(){
							 globalObj.DrawTopCount(globalObj.CountNumberOfStringsFrequency(globalObj.SeparateWordsFromArray(globalObj.GetWordsFromVerbatim($("#apeendVerbatimList").val()))),"appendWordCloud");
						});
						$('#textanalytics').on('shown.bs.modal', function(e) {
							$("#testmetable").html(" ");
						});
						
					});
</script>
