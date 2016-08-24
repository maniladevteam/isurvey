$(document)
		.ready(
				function() {
					/*
					 * if(!($.browser.chrome)){ alert("Kindly use Google
					 * Chrome"); var message = '<p>When using other
					 * browsers,kindly copy and paste the URL address from your
					 * current browser to google chrome</p><p>Thank You!!</p>Dev
					 * Manila'; $(".container").html("<p>Please use Google
					 * Chorme</p>" + message); $("body").click(function(){
					 * return false; }); WW }else{
					 */
					
					$("#alert_values").click(function() {
						adminObj.AddRecepienTypeListEmails();
					});
					$(".yes").click(function() {
						alert("me");
					});
					$("#more_option_tab").hover(function() {

						$("#to_hide_ul").show();

					}, function() {

						$("#to_hide_ul").hide();
					});

					$("#more_option_tab_ase").hover(function() {

						$("#to_hide_ul_analytics").show();

					}, function() {

						$("#to_hide_ul_analytics").hide();
					});

					$("#save_new_ase_survey").click(
							function() {
								adminObj.SaveNewAseSurvey($("#ase_quarter")
										.val(), $("#ase_year").val());
							});
					$("#create_new_ase_survey").click(function() {
						globalObj.LoadPageAse();
					});
					$("#send_email").click(
							function() {
								adminObj.EmailSurveyToRespondents(globalObj
										.GetSurveyId(), $("#email_message")
										.html());
							});
					$("#append_work_group_create_page")
							.click(
									function() {
										$("#td_multiselect").html("");
										$(this).attr("disabled", "disabled");
										$("#td_multiselect")
												.append(
														'<select class="form-control" multiple id="wg_reciepient_list"></select>');
										globalObj.appendWorkGroupList(
												"wg_reciepient_list", "");

										$("#append_team_manager_create_page")
												.attr("disabled", false);
										$("#append_individual_create_page")
												.attr("disabled", false);
										globalObj.SetSurveyType("1");

									});
					tinymce.init({

						selector : "survey_desc_add",
						editor_selector : "mceEditor", 
						mode : "specific_textareas",
						browser_spellcheck : true,
						statusbar : false

					});

					$("#launch_archives_page").click(function() {
						globalObj.ReadArchiveSurvey();
					});

					$("#append_individual_create_page")
							.click(
									function() {
										$("#td_multiselect").html("");
										$(this).attr("disabled", "disabled");
										$("#td_multiselect")
												.append(
														'<select class="form-control" multiple id="individual_reciepient_list"></select>');
										globalObj.AppendAllEmployees(
												"individual_reciepient_list",
												"");
										$("#append_work_group_create_page")
												.attr("disabled", false);
										$("#append_team_manager_create_page")
												.attr("disabled", false);
										globalObj.SetSurveyType("3");

									});
					$("#append_team_manager_create_page")
							.click(
									function() {
										$("#td_multiselect").html("");
										$(this).attr("disabled", "disabled");
										$("#td_multiselect")
												.append(
														'<select class="form-control" multiple id="tm_reciepient_list"></select>');

										$("#append_work_group_create_page")
												.attr("disabled", false);
										$("#append_individual_create_page")
												.attr("disabled", false);
										globalObj.AppendAllTeamManagers(
												"tm_reciepient_list", "");
										globalObj.SetSurveyType("2");

									});
					$("#append_ase_create_page")
							.click(
									function() {
										$("#td_multiselect").html("");
										$(this).attr("disabled", "disabled");
										$("#td_multiselect")
												.append(
														'<select class="form-control" multiple id="tm_reciepient_list"></select>');

										$("#append_work_group_create_page")
												.attr("disabled", false);
										$("#append_individual_create_page")
												.attr("disabled", false);
										globalObj.AppendAllTeamManagers(
												"tm_reciepient_list", "");
										globalObj.SetSurveyType("2");
									});

					$('#myModal').on('shown.bs.modal', function(e) {
						$("#survey_name_add").val("");
						$("#survey_desc_add").html("");
						$("#survey_desc_add").val("");
						$("#survey_start_date").val("");
						$("#survey_end_date").val("");

					});
					$('#emailModal').on('shown.bs.modal', function(e) {
						$("#email_message").html("");
					});

					$("#launch_analytics_page_top").click(function() {
						globalObj.LoadPageAnalytics();
					});

					$("#launch_analytics_page_ase").click(function() {
						globalObj.LoadPageAnalytics();
					});

					$("#launch_analytics_ase_page").click(function() {
						globalObj.LoadPageAnalyticsAse();
					});

					globalObj.SetCurrentpage(localStorage.setItem("page", ""));
					globalObj.MakeDatePicker("survey_start_date",
							"survey_end_date");

					$("#launch_home").click(function() {
						globalObj.ReadActiveSurvey();
					});
					$("#home_button").click(function() {
						globalObj.ReadActiveSurvey();
					});
					$("#launch_analytics_page").click(function() {
						globalObj.LoadPageAnalytics();
					});
					globalObj.ReadActiveSurvey();

					$("#create_new_survey")
							.click(
									function() {
										
										adminObj
												.CreateNewSurvey(
														$("#survey_name_add")
																.val(),
														tinyMCE.get('survey_desc_add').getContent(),
														localStorage
																.getItem("0b8b667e7722bc7e363b601ce584259d"),
														$("#anonymous").is(
																"checked"),
														$("#analytic_type")
																.val(),
														$("#survey_start_date")
																.val(),
														$("#survey_end_date")
																.val());
									});

					$("#launch_create_survey_dialogue").click(function() {
						/* globalObj.ShowCreateSurveyPage(); */
						globalObj.HidePreLoader();
					});

					$("#recepient_apac_all").click(
							function() {
								if ($(this).is(":checked")) {
									$("#recepient_apac_apac").prop("checked",
											"checked");
									$("#recepient_apac_emea").prop("checked",
											"checked");
									$("#recepient_apac_amers").prop("checked",
											"checked");
								} else {
									$("#recepient_apac_apac").prop("checked",
											false);
									$("#recepient_apac_emea").prop("checked",
											false);
									$("#recepient_apac_amers").prop("checked",
											false);
								}
							});

					$("#recepient_emea_all").click(
							function() {
								if ($(this).is(":checked")) {
									$("#recepient_emea_apac").prop("checked",
											"checked");
									$("#recepient_emea_emea").prop("checked",
											"checked");
									$("#recepient_emea_amers").prop("checked",
											"checked");
								} else {
									$("#recepient_emea_apac").prop("checked",
											false);
									$("#recepient_emea_emea").prop("checked",
											false);
									$("#recepient_emea_amers").prop("checked",
											false);
								}
							});

					$("#recepient_amers_all").click(
							function() {
								if ($(this).is(":checked")) {
									$("#recepient_amers_apac").prop("checked",
											"checked");
									$("#recepient_amers_emea").prop("checked",
											"checked");
									$("#recepient_amers_amers").prop("checked",
											"checked");
								} else {
									$("#recepient_amers_apac").prop("checked",
											false);
									$("#recepient_amers_emea").prop("checked",
											false);
									$("#recepient_amers_amers").prop("checked",
											false);
								}
							});
					
					$("#email_recepients_quality_360").click(function(){
						adminObj.SendEmailQualitySurveyAgent($("#agent_txt_survey_uu_id").val());
						adminObj.SendEmailQualitySurveyTmOne($("#tm_txt_survey_uu_id").val(),$("#tm_txt_survey_uu_id_two").val());
						adminObj.SendEmailQualitySurveyPSM($("#psm_txt_survey_uu_id").val());
					});

				});