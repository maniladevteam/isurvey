package com.psm.admin.client.controller;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jettison.json.JSONObject;

import com.psm.admin.client.beans.PSMBeans;

import iSurvey.com.client.beans.ClientBeans;


@Path("/actions")
public class PSMController {

	@GET
	@Produces(MediaType.TEXT_HTML)
	public String Status() {
		return "You are running the client";
	}

	@Path("/getadminreports")
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String GetReAllReports() {
		return "this is a client psm";

	}

	@Path("/getsurveydetails")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetSurveyDetailForClient(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String surveyId = json.optString("surveyId", "");
			PSMBeans psmBeans = new PSMBeans();

			rb = Response.ok(psmBeans.GetSurveyDetails(surveyId).toString()).build();

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
	
	
	@Path("/getpsmteammanagers")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response GetPsmTeamManagers(String DATA) {
		Response rb = null;

		try {

			JSONObject json = new JSONObject(DATA);
			String userId = json.optString("userId", "");
			PSMBeans psmBeans = new PSMBeans();

			rb = Response.ok(psmBeans.GetPsmTeamManagers(userId).toString()).build();

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

	@Path("/adduseranswerpsm")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response AddClientPsmAnswer(String DATA) {
		Response rb = null;
    
		try {

			JSONObject json = new JSONObject(DATA);
			String userId = json.optString("userId", "");
			String surveyId = json.optString("surveyId", "");
			String values = json.optString("values", "");
			
			PSMBeans psmBeans = new PSMBeans();

			return rb = Response.ok(psmBeans.AddClientPsmAnswers(userId, surveyId, values).toString()).build();

			
		} catch (NullPointerException h) {

			return Response.status(400).entity("You have empty parameter").build();

		} catch (Exception e) {
			e.getMessage();  
		}

		return Response.status(500)
				.entity("{\"error\":\"There was an error on the code kindly contact marangelo.delatorre@thomsonreuters.com\"}")
				.build();

	}
	
	
	//
}
