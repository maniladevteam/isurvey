package com.isurvey.admin.ase.controller;

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

import com.isurvey.admin.ase.beans.AdminAseBeans;

import iSurvey.com.admin.beans.AdminBean;

@Path("/action-ase")
public class AdminAseController {
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String Status() {
		return "You are running the ";
	}

	// adminObj.CreateNewSurvey()
	@Path("/savenewasesurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response CreateNewSurveyASE(String DATA) {
		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String surveyName = json.optString("surveyName", "");
			String surveyDesc = json.optString("surveyDesc", "");
			String surveyCreator = json.optString("surveyCreator", "");
			String isAnonymous = json.optString("isAnonymous", "");

			String surveyType = json.optString("surveyType", "");
			String quarter = json.optString("quarter", "");
			String year = json.optString("year", "");

			AdminAseBeans adminbeanase = new AdminAseBeans();

			JSONObject JSONreturn = adminbeanase.CreateNewSurvey(surveyName, surveyDesc, surveyCreator, isAnonymous,
					surveyType, quarter, year);
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

	// 
	@Path("/saveaserecepient")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response SaveNewAseRecepient(String DATA) {
		boolean success = false;
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String shiftIdFor = json.optString("shiftIdFor", "");
			String shiftIdTo = json.optString("shiftIdTo", "");
			String surveyId = json.optString("surveyId", "");
			
			AdminAseBeans adminbeanase = new AdminAseBeans();

			String functionSuccess = adminbeanase.InsertRecepientsSurveyAse(surveyId, shiftIdTo, shiftIdFor);
						
			StringBuilder sb = new StringBuilder();

			if (functionSuccess.equals("success")){ 
				sb.append("{\"success\":\"success\",\"surveyId\":\"");
				sb.append(surveyId + "\"}");
				rb = Response.ok(sb.toString()).build();
			} else {
				sb.append("{\"error\":\"" + functionSuccess + "\"}");
				rb = Response.status(500).entity("{\"error\":\"" + sb.toString()  + "\"}").build();
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
	
	@Path("/getasequestionsforsurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetAseQuestionsForSurvey(String DATA) {
		
		try {
			Response rb = null;
			JSONObject json = new JSONObject(DATA);
			String employeeId = json.optString("employeeId", "");
			String surveyId = json.optString("surveyId", "");
			
			AdminAseBeans adminbeanase = new AdminAseBeans();

			return rb = Response.ok(adminbeanase.GetAseSurveyQuestions(surveyId, employeeId).toString()).build();
			
			
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
	
	@Path("/getasestobesurveyed")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetAseToBeSurveyed(String DATA) {
		boolean success = false;
		Response rb = null;
		try {
			
			JSONObject json = new JSONObject(DATA);  
			String employeeId = json.optString("employeeId", "");
			String surveyId = json.optString("surveyId", "");
			
			AdminAseBeans adminbeanase = new AdminAseBeans();

			rb = Response.ok(adminbeanase.GetAseToBeSurveyed(surveyId, employeeId).toString()).build();

			return rb;
			
		} catch (NullPointerException h) {  
			  
			return Response.status(500).entity("You have empty parameter").build();
			
		} catch (Exception e) {
			Response.ok("{\"error\":\"" + e.getMessage() + "\"}").build();
		} finally {
			success = false;
		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}
	
	@Path("/getaseclientdetailsforsurvey")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetClientDetailsForSurvey(String DATA) {
		boolean success = false;
		Response rb = null;
		try {
			
			JSONObject json = new JSONObject(DATA);  
			String employeeId = json.optString("employeeUUID", "");
			String surveyId = json.optString("surveyUUID", "");
			
			AdminAseBeans adminbeanase = new AdminAseBeans();

			rb = Response.ok(adminbeanase.GetSurveyDetailsForClient(surveyId, employeeId).toString()).build();
			
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
	
	@Path("/saveclientasesurveyanswers")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response SaveClientAseSurveyAnswers(String DATA) {
		boolean success = false;
		Response rb = null;
		try {
			
			JSONObject json = new JSONObject(DATA);  
			String questionUUID = json.optString("questionUUID", "");
			String answerValues = json.optString("answerValues", "");
			String surveyId = json.optString("surveyId", "");
			String answerType = json.optString("answerType", "");
			String employeeId = json.optString("employeeId", "");
			String aseIds = json.optString("aseIds", "");
			
			
			
			AdminAseBeans adminbeanase = new AdminAseBeans();

			rb = Response.ok(adminbeanase.SaveClientAseSurveyAnswers(questionUUID, answerValues,
					surveyId,answerType,employeeId,aseIds).toString()).build();
			
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
	
	@Path("/getemployeesbyrole")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetEmployeesByRole(String DATA) {
		boolean success = false;
		Response rb = null;
		try {
			
			JSONObject json = new JSONObject(DATA);  
			String roleId = json.optString("roleId", "");
			
			AdminAseBeans adminbeanase = new AdminAseBeans();
			rb = Response.ok(adminbeanase.GetEmployeesByRole(roleId).toString()).build();
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

}
