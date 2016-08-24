package iSurvey.com.admin.controller;

import java.sql.SQLException;

import javax.json.JsonObject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jettison.json.JSONObject;

import com.oracle.webservices.api.databinding.Databinding.Builder;

import iSurvey.com.admin.beans.AdminBean;
import iSurvey.com.emailer.SurveyEmailer;

@Path("/action")

public class AdminController {
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String Status() {
		return "You are running the ";
	}

	@Path("/getadminreports")
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String GetReAllReports() {

		return "this is a string";

	}

	// globalObj.ReadActiveSurvey()
	@Path("/getallactivesurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetAllSurvey() {
		Response rb = null;
		try {
			/* JSONObject json = new JSONObject(DATA); */
			/* String empId = json.optString("empId", ""); */
			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetAllActiveSurveys().toString()).build();

			if (rb.getEntity().toString().equals("[]")) {
				return Response.status(500)
						.entity("There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com")
						.build();
			}

			return rb;
		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			e.getMessage();
		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getallasectivesurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetAllASeSurvey() {
		Response rb = null;
		try {
			/* JSONObject json = new JSONObject(DATA); */
			/* String empId = json.optString("empId", ""); */
			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetAllAseActiveSurveys().toString()).build();

			if (rb.getEntity().toString().equals("[]")) {
				return Response.status(500)
						.entity("There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com")
						.build();
			}

			return rb;
		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			e.getMessage();
		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	// adminObj.CreateNewSurvey()
	@Path("/addnewsurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response CreateNewSurvey(String DATA) {
		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyName = json.optString("surveyName", "");
			String surveyDesc = json.optString("surveyDesc", "");
			String surveyCreator = json.optString("surveyCreator", "");
			String isAnonymous = json.optString("isAnonymous", "");

			String surveyType = json.optString("surveyType", "");
			String startDate = json.optString("startDate", "");
			String endDate = json.optString("endDate", "");

			AdminBean adminbean = new AdminBean();

			JSONObject JSONreturn = adminbean.CreateNewSurvey(surveyName, surveyDesc, surveyCreator, isAnonymous,
					surveyType, startDate, endDate);
			String surveyId = JSONreturn.optString("surveyId", "");
			StringBuilder sb = new StringBuilder();

			if (JSONreturn.optString("error", "").equals("")) {
				sb.append("{\"success\":\"success\",\"surveyId\":\"");
				sb.append(surveyId + "\"}");
				rb = Response.ok(sb.toString()).build();
			} else {
				sb.append("{\"error\":\"" + JSONreturn.optString("error") + "\"}");
				rb = Response.status(500).entity("{\"error\":\"Name already exists\"}").build();
			}

			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	// globalObj.getsurveydetail()
	@Path("/getsurveydetail")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSurveyDetail(String DATA) {
		Response rb = null;
		try {
			JSONObject json = new JSONObject(DATA);
			String surveyUuId = json.optString("surveyId", "");
			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetSurveyDetail(surveyUuId).toString()).build();

			if (rb.getEntity().toString().equals("[]")) {
				return Response.status(500)
						.entity("There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com")
						.build();
			}

			return rb;
		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			e.getMessage();
		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	// adminObj.SendSaveSurveyAllDetails()
	@Path("/addnewquesetion")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response AddNewQuestion(String DATA) {
		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String quesetionName = json.optString("quesetionName", "");
			String questionUUid = json.optString("questionUUid", "");
			String answerTypeId = json.optString("answerTypeId", "");
			String sequence = json.optString("sequence", "");
			String isRequired = (json.optString("isRequired", "").equals("undefined") ? "0"
					: json.optString("isRequired"));

			AdminBean adminbean = new AdminBean();

			adminbean.AddNewQuesetion(surveyId, quesetionName, questionUUid, answerTypeId, isRequired, sequence);

			Response.ok("{\"success\":\"success\",\"surveyId\":\"}").build();
			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	// adminObj.DeleteSurveyQuestion()
	@Path("/deletesurveyquestion")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response DeleteSurveyQuesetion(String DATA) {
		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");

			AdminBean adminbean = new AdminBean();
			success = adminbean.deleteSurveyQuestion(Integer.parseInt(surveyId));
			Response.ok("{\"success\":\"success\",\"surveyId\":\"}").build();

			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getsurveysummarypersurveyTopBoxTwo")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSurveySummary(String DATA) {
		Response rb = null;
		try {

			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String workGroup = json.optString("workGroup", "");

			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetSurveySummary(Integer.parseInt(surveyId), workGroup).toString()).build();
			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {

		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getsurveysummarypersurveyTopBoxThree")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSurveySummaryTopBoxThree(String DATA) {
		Response rb = null;
		try {

			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String workGroup = json.optString("workGroup", "");

			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetSurveySummaryTopBoxThree(Integer.parseInt(surveyId), workGroup).toString())
					.build();
			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {

		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getsurveysummarypersurveyTopBoxFour")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSurveySummaryTopBoxFour(String DATA) {
		Response rb = null;
		try {

			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String workGroup = json.optString("workGroup", "");

			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetSurveySummaryTopBoxFour(Integer.parseInt(surveyId), workGroup).toString())
					.build();
			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {

		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getallworkgroups")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetAllWorkGroups(String DATA) {
		Response rb = null;
		try {

			JSONObject json = new JSONObject(DATA);
			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetAllWorkGroups().toString()).build();
			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {

		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getallteammmanagers")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetAllTeamManagers(String DATA) {
		Response rb = null;
		try {

			JSONObject json = new JSONObject(DATA);
			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetAllTeamManagers().toString()).build();
			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {

		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getallemployees")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetAllEmployees(String DATA) {
		Response rb = null;
		try {

			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetAllEmployees().toString()).build();
			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {

		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getallquestionSurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetAllQuestionSurvey(String DATA) {

		Response rb = null;
		try {
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetAllQuestionsPerSurvey(surveyId).toString()).build();
			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {

		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getsummaryperquestion")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetPerSurveySummaryQuestion(String DATA) {

		Response rb = null;
		try {
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String questionId = json.optString("questionId", "");
			String surveyAnswerType = json.optString("surveyAnswerType", "");

			String recepientType = json.optString("recepientType", "");
			String recepientList = json.optString("recepientList", "");

			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean
					.GetPerSurveySummaryQuestion(questionId, surveyId, surveyAnswerType, recepientType, recepientList)
					.toString()).build();
			/*
			 * if (rb.getEntity().toString().equals("[]")) { return
			 * Response.status(500) .entity(
			 * "There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com"
			 * ) .build(); }
			 */
			return rb;

		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {

		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/sendemail")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public void SendEmail(String DATA) {

		try {
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String message = json.optString("message", "");
			String origin = json.optString("origin", "");
			AdminBean adminBean = new AdminBean();

			if (adminBean.SendEmailToRespondents(surveyId, message, origin)) {
				Response.ok("{\"success\":\"success\"}").build();

			} else {
				Response.status(500).entity("\"error\":\"\"").build();
			}

		} catch (NullPointerException h) {
			Response.status(500).entity("\"error\":\"\"").build();
		} catch (Exception e) {
			Response.status(500).entity("\"error\":\"\"").build();
		} finally {

		}

	}

	@Path("/senasedemail")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public void SendASEEmail(String DATA) {

		try {
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String message = json.optString("message", "");
			AdminBean adminBean = new AdminBean();

			if (adminBean.SendAseEmailToRespondents(surveyId, message)) {
				Response.ok("{\"success\":\"success\"}").build();

			} else {
				Response.status(500).entity("\"error\":\"\"").build();
			}

		} catch (NullPointerException h) {
			Response.status(500).entity("\"error\":\"\"").build();
		} catch (Exception e) {
			Response.status(500).entity("\"error\":\"\"").build();
		} finally {

		}

	}

	@Path("/archivesurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response ArchiveSurveys(String DATA) {
		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");

			AdminBean adminbean = new AdminBean();
			success = adminbean.ArchiveSurveys(surveyId);
			Response.ok("{\"success\":\"success\"}").build();
			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/readarchivedsurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response ReadArchivedSurvey() {

		try {
			Response rb = null;
			AdminBean adminbean = new AdminBean();
			rb = Response.ok(adminbean.ReadArchivedSurvey().toString()).build();
			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {

		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/savesurveyrecepienttype")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response SaveSurveyType(String DATA) {
		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String surveyType = json.optString("surveyType", "");

			AdminBean adminbean = new AdminBean();
			success = adminbean.SaveSurveyRecepientType(surveyId, surveyType);
			Response.ok("{\"success\":\"success\"}").build();
			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/addrecepienttypeemails")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response AddRecepientTypeEmails(String DATA) {
		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String surveyType = json.optString("surveyType", "");
			String recepients = json.optString("recepients", "");

			AdminBean adminbean = new AdminBean();
			success = adminbean.SaveSurveyRecepientTypeListEmail(surveyId, surveyType, recepients);
			Response.ok("{\"success\":\"success\"}").build();
			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getsurveyrecepientlistwithtype")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSurveyRecepientListWithType(String DATA) {

		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String surveyType = json.optString("surveyType", "");

			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetSurveyReceipients(surveyId, surveyType).toString()).build();

			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/deleteforupdatequestion")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response DeleteAllrelatedQuestion(String DATA) {
		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			AdminBean adminbean = new AdminBean();

			if (adminbean.DeleteForUpdateQuestions(surveyId)) {
				Response.ok("{\"success\":\"success\",\"surveyId\":\"}").build();
				return rb;
			}
		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getresponsesurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetResponseRatio(String DATA) {

		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String surveyUUID = json.optString("surveyUUID", "");

			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetResponseRatioData(surveyId, surveyUUID).toString()).build();

			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getverbatimquestiopersurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetVerbatimPerSurvey(String DATA) {

		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");

			AdminBean adminbean = new AdminBean();
			
			rb = Response.ok(adminbean.GetVerbatimPerQuestion(surveyId).toString()).build();
			
			return rb;
			
		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getverbatimanswers")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetVerbatimAnswers(String DATA) {

		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String questionId = json.optString("questionId", "");

			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetVerbatimAnswers(questionId).toString()).build();

			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getsurveyvalidforupdate")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSurveyValidForUpdate(String DATA) {

		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyUUID = json.optString("surveyUUID", "");

			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetSurveyIfValidForUpdate(surveyUUID).toString()).build();

			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/updatesurveydates")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response UpdateSurveyDates(String DATA) {

		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyUUID = json.optString("surveyUUID", "");
			String startDate = json.optString("startDate", "");
			String endDate = json.optString("endDate", "");
			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.UpdateSurveyDates(surveyUUID, startDate, endDate).toString()).build();

			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/getsurveyrecepientsforupdate")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSurveyRecepientsForUpdate(String DATA) {

		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.GetSurveyRecipientsForUpdate(surveyId).toString()).build();

			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/deletefromcepients")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response DeleteFromRecepients(String DATA) {

		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String emailAdd = json.optString("emailAdd", "");
			AdminBean adminbean = new AdminBean();

			rb = Response.ok(adminbean.DeleteSurveyRecepient(surveyId, emailAdd).toString()).build();

			return rb;

		} catch (NullPointerException h) {
			return Response.status(400).entity("You have empty parameter").build();
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}
		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}

	@Path("/sendemailagent")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public void SendEmailAgent(String DATA) {

		try {
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String message = json.optString("message", "");
			String origin = json.optString("origin", "");
			AdminBean adminBean = new AdminBean();

			if (adminBean.SendEmailToRespondentsAgent(surveyId, message, origin)) {
				Response.ok("{\"success\":\"success\"}").build();

			} else {
				Response.status(500).entity("\"error\":\"\"").build();
			}

		} catch (NullPointerException h) {
			Response.status(500).entity("\"error\":\"\"").build();
		} catch (Exception e) {
			Response.status(500).entity("\"error\":\"\"").build();
		} finally {

		}

	}

	@Path("/sendemailtm")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public void SendEmailTm(String DATA) {

		try {
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String surveyIdTm = json.optString("surveyIdTm", "");
			String message = json.optString("message", "");
			String origin = json.optString("origin", "");
			AdminBean adminBean = new AdminBean();

			if (adminBean.SendEmailToRespondentsTm(surveyId, surveyIdTm, message, origin)) {
				Response.ok("{\"success\":\"success\"}").build();

			} else {
				Response.status(500).entity("\"error\":\"\"").build();
			}

		} catch (NullPointerException h) {
			Response.status(500).entity("\"error\":\"\"").build();
		} catch (Exception e) {
			Response.status(500).entity("\"error\":\"\"").build();
		} finally {

		}

	}

	@Path("/sendemailpsm")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public void SendEmailPsm(String DATA) {
			
		try {
			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			String message = json.optString("message", "");
			String origin = json.optString("origin", "");
			AdminBean adminBean = new AdminBean();

			if (adminBean.SendEmailToRespondentsPSM(surveyId, message, origin)) {
				Response.ok("{\"success\":\"success\"}").build();
				
			} else {
				Response.status(500).entity("\"error\":\"\"").build();
			}
			
		} catch (NullPointerException h) {
			Response.status(500).entity("\"error\":\"\"").build();
		} catch (Exception e) {
			Response.status(500).entity("\"error\":\"\"").build();
		} finally {

		}

	}

}