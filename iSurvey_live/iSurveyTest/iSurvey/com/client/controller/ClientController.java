package iSurvey.com.client.controller;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jettison.json.JSONObject;

import iSurvey.com.admin.beans.AdminBean;
import iSurvey.com.client.beans.ClientBeans;

@Path("/actions")
public class ClientController {

	@GET
	@Produces(MediaType.TEXT_HTML)
	public String Status() {
		return "You are running the client";
	}

	@Path("/getadminreports")
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String GetReAllReports() {
		return "this is a client";

	}

	@Path("/getsurveydetails")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSurveyDetailForClient(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			ClientBeans clientBean = new ClientBeans();

			rb = Response.ok(clientBean.GetSurveyDetails(surveyId).toString()).build();

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

	@Path("/getuserdetails")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetUserDetails(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String empId = json.optString("userId", "");
			ClientBeans clientBean = new ClientBeans();

			rb = Response.ok(clientBean.GetUserClientDetails(empId).toString()).build();

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

	@Path("/adduseranswer")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response AddUserAnswer(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String surveyUUId = json.optString("surveyId", "");
			String questionId = json.optString("questionId", "");
			/* String questionType = json.optString("questionType", ""); */
			String answerValue = json.optString("answerValue", "");
			String empId = json.optString("userId", "");
			String UUid = json.optString("uuid", "");
			ClientBeans clientBean = new ClientBeans();

			clientBean.AddSurveyAnswer(surveyUUId, questionId, UUid, answerValue, empId);
			rb = Response.ok("{\"success\":\"success\"}").build();

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

	@Path("/addusersurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response addusersurvey(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String surveyUUId = json.optString("surveyId", "");
			String userId = json.optString("userId", "");

			ClientBeans clientBean = new ClientBeans();

			// clientBean.AddSurveyUser(surveyUUId, userId);
			rb = Response.ok("{\"success\":\"success\"}").build();

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

	@Path("/validateusersurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response ValidateSurvey(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String surveyUUId = json.optString("surveyId", "");
			String userId = json.optString("userId", "");

			ClientBeans clientBean = new ClientBeans();

			rb = Response.ok(clientBean.ValidateUserAndSurvey(surveyUUId, userId).toString()).build();

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

	@Path("/getase")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetAse(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String employeeIds = json.optString("employeeIds", "");

			ClientBeans clientBean = new ClientBeans();

			rb = Response.ok(clientBean.GetAse(employeeIds).toString()).build();

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

	@Path("/adduseranswerase")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response AddUserAnswerASE(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String surveyUUId = json.optString("surveyId", "");
			String questionId = json.optString("questionId", "");
			String questionType = json.optString("questionType", "");
			String answerValue = json.optString("answerValue", "");
			String empId = json.optString("userId", "");
			ClientBeans clientBean = new ClientBeans();

			clientBean.AddSurveyAnswerASE(surveyUUId, questionId, questionType, answerValue, empId);
			rb = Response.ok("{\"success\":\"success\"}").build();

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

	@Path("/addusercommentase")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response AddUserCommentASE(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String surveyUUId = json.optString("surveyId", "");
			String questionId = json.optString("questionId", "");
			String questionType = json.optString("questionType", "");
			String answerValue = json.optString("answerValue", "");
			String empId = json.optString("userId", "");
			ClientBeans clientBean = new ClientBeans();

			clientBean.AddSurveyCommentASE(surveyUUId, questionId, questionType, answerValue, empId);
			rb = Response.ok("{\"success\":\"success\"}").build();

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

	@Path("/getltsummary")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSummaryForLT(String DATA) {
		Response rb = null;

		try {  
			
			JSONObject json = new JSONObject(DATA);
			String surveyUUId = json.optString("surveyId", "");
			String questionId = json.optString("questionId", "");
			String tmId = json.optString("tmId", "");

			ClientBeans clientBean = new ClientBeans();
			clientBean.GetResultsForLT(surveyUUId, tmId, questionId);
			rb = Response.ok("{\"success\":\"success\"}").build();

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
}
