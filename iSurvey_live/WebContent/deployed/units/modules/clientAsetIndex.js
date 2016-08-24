$(document)
		.ready(

				function() {

					/*
					 * localStorage.removeItem("question_uu_id");
					 * localStorage.removeItem("survey_ase_id");
					 * localStorage.removeItem("survey_ase_names");
					 * localStorage.removeItem("survey_questions");
					 * localStorage.removeItem("survey_questions_id");
					 * localStorage.removeItem("survey_questions_name");
					 */
					clientAseObj.IsAnswered(clientAseObj
							.GetAseParameterByName("s"),clientAseObj
							.GetAseParameterByName("u"));
					
					
					clientAseObj.SetSurveyUUID(clientAseObj
							.GetAseParameterByName("s"));

					$("#saveasesurveyanswers").click(function() {
						clientAseObj.InserAllQuestionAndAnswerUUID();
					});
				});   