
<style>

/* .page {
	overflow-x: hidden;
	padding-top : 50px;
} */
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
</style>
<div class="page">
	<div class="container-fluid" style="position: inherit;">
		<h2>
			Ase Survey Analytics <span id="ase_survey_name"></span>
		</h2>
		<div class="container-fluid"
			style="position: inline; float: left; min-height: 100px;">
			<label for="survey_ase_list">Ase Surveys </label> <select
				style="width: 50%;" class="dropdown form-control"
				id="survey_list_ase">

			</select>
		</div>
		<div class="container-fluid"
			style="position: inline; float: left; min-height: 150px;">
			<label id="" for="team_managers_list">Team Manager List</label> <select
				multiple style="max-height: 100px;" class="form-control dropdown"
				id="team_managers_list">

				<option value='0120860'>ALDEL DELGADO RAMOS</option>
				<option value='0143470'>Arturo III Catolos Aquino</option>
				<option value='0126186'>IVEE LOZANO GONZALES</option>
				<option value='0129302'>ASA JARED CAMARILLO SISON</option>
				<option value='0139160'>CHRISTIAN PAULO DELA TORRE DE LEON</option>
				<option value='0138576'>EDGAR PALAD ESMERIA</option>
				<option value='0129307'>GERARDINO DELA CRUZ PADUA</option>
				<option value='0139325'>Jerome Cortez Mateo</option>
				<option value='0126172'>HAMILL ONG</option>
				<option value='0126173'>JANIS MAHINAY MERON</option>
				<option value='0129288'>JENIFER REYES RAZON</option>
				<option value='0142064'>JENNIFER APRESA TRASMONTE</option>
				<option value='0129337'>JENNIFER MARLEY MALIT CRISOSTOMO</option>
				<option value='0127767'>MONINA GACER BANGIT</option>
				<option value='0127292'>RONALDO DULAY RUBIO</option>

			</select>
		</div>

		<div class="container-fluid"
			style="position: inline; float: left; min-height: 150px;">
			<label id="" for="ase_list">Ase Name</label> <select multiple
				style="max-height: 100px;" class="form-control dropdown"
				id="ase_list">
				<option value="0120794">Knoy Fuderanan</option>
				<option value="6021458">Wilbert Herrera</option>
				<option value="0120790">Chris De Vera</option>
				<option value="0120767">Nys Perez</option>
				<option value="6018852">Eliser Tangan</option>
				<option value="0120864">Dianne Gojo Rosales</option>
				<option value="6018700">Kenneth William Blasa</option>
				<option value="0147960">Dave Gabriel Poblete</option>
				<option value="6018760">Jennifer Uy</option>
				<option value="0141764">Nelson Magtibay Ong</option>
				<option value="0126472">Julie Ann Lian Fernandez</option>
				<option value="0141775">Alberto Bug-os</option>
				<option value="0159176">Vanessa Caasi Ilustrisimo</option>
				<option value="0144048">Teofilo Cangco Guiang</option>
				<option value="0126231">Kris Abigail De Jesus Hilvano</option>
				<option value="0144398">Laura Bernice Tarlit Tudlong</option>
				<option value="0141964">Irene Padrinas</option>
				<option value="0147255">Jennylyn Neverida</option>
				<option value="0129084">Anthony Marzan</option>
				<option value="0149854">Robert Lazaro</option>
				<option value="0156750">Earlyn Cristhine Bihis</option>
				<option value="0151061">Kimberly Yao</option>
				<option value="0126481">Mary Claire Cayton</option>
			</select>
		</div>

	</div>
	<div class="container-fluid" style="left-padding: 200px;">
		<a id="search_analytics" href="javascript:void(0)" role="button"
			class="btn btn-primary btn-md"> Search </a> <a id="export_ase_excel"
			href="javascript:void(0)" role="button"
			class="btn btn-primary btn-md"> Export </a> <a
			id="verbatim_ase_window_launched" data-toggle="modal"
			href="javascript:void(0)" role="button"
			onclick='globalObj.GetVerbatimQuestionPerSurvey()'
			data-target="#textanalytics" id="launch_text_analytics_window"
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
					<select id="apeendaseVerbatimList" class="form-control"></select>
				</div>

				<div class="modal-body">
					<div id="appendaseWordCloud" style="">
						<table id="testasemetable" class="container-fluid"></table>
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
				<span id="table_ase_for_recepient_content"></span>
			</div>
			<div id="survey_top2" class="container-fluid"
				style="position: relative;"></div>

		</div>

	</div>
	<div id="give_ase_me_rate_here" class="container-fluid"
		style="position: relative;">
		<div id="hey" style="position: relative;" class="container-fluid"></div>
	</div>
</div>

<script>
	$(document).ready(
			function() {
				$("#team_managers_list").multiselect({
					enableCaseInsensitiveFiltering : true,
					maxHeight : 200,
					enableFiltering : true,
					includeSelectAllOption : true,
					buttonWidth : '150px'
				});

				$("#ase_list").multiselect({
					enableCaseInsensitiveFiltering : true,
					maxHeight : 200,
					enableFiltering : true,
					includeSelectAllOption : true,
					buttonWidth : '150px'
				});
				$("#work_group_list").hide();
				/* $("#survey_list").change(
						function() {
							globalObj.AppendSurveyRecepients(
									"work_group_list", this.value, $(
											'option:selected', this)
											.attr('survey-type'));
						}); */
				globalObj.appendAseSurveyList("survey_list_ase");
				$("#search_analytics_ase").click(
						function() {
							if (!$("#survey_list_ase").val() == "") {
								globalObj.GetAllQuestionSurvey($(
										"#survey_list_ase").val(),
										"survey_top2");
							} else {
								alert("Please choose your survey first!!!");
								return false;
							}
						});

				$("#export_excel").click(function() {
					adminObj.DownloadExcel();
				});

			});
</script>
