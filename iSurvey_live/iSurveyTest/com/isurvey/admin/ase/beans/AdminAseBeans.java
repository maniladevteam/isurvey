package com.isurvey.admin.ase.beans;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

import org.codehaus.jettison.json.JSONObject;
import org.json.JSONArray;

import iSurvey.com.admin.beans.AdminBean;
import iSurvey.com.dao.ConnectionDAO;
import iSurvey.com.helper.json.ResultSetConverter;

public class AdminAseBeans {
	public JSONObject CreateNewSurvey(String surveyName, String surveyDescription, String surveyCreator,
			String isAnonymous, String surveyType, String quarter, String year) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONObject success = null;
		AdminBean adminbean = new AdminBean();
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_ase_add_admin_survey(?,?,?,?,?,?,?,?,?,?)";
			query = connection.prepareCall(sql);
			/*
			 * SimpleDateFormat sdfmt1 = new SimpleDateFormat("mm/dd/yyyy");
			 * SimpleDateFormat sdfmt2= new SimpleDateFormat("yyyy-mm-dd");
			 * java.util.Date dDate = sdfmt1.parse( startDate ); String
			 * strOutput = sdfmt2.format( dDate );
			 * 
			 * java.util.Date eDate = sdfmt1.parse( endDate ); String
			 * strOutputEDate = sdfmt2.format( eDate );
			 */

			query.setString(1, surveyName);
			query.setString(2, surveyDescription);
			query.setString(3, surveyCreator);
			query.setString(4, isAnonymous);
			query.setString(5, "");
			query.setString(6, "");
			query.setString(7, "2");

			query.setString(8, quarter);
			query.setString(9, year);
			query.registerOutParameter(10, Types.INTEGER);

			rs = query.executeQuery();
			Integer surveyId = query.getInt(10);
			if (surveyId == 0) {
				success = new JSONObject("{\"error\":\"Name Already exists\"}");

			} else {
				this.InsertQuestionsAndAnswerTypeAse(surveyId.toString());
				adminbean.SaveSurveyRecepientType(surveyId.toString(), "3");
				success = new JSONObject("{\"success\":\"success\",\"surveyId\":\"" + surveyId + "\"}");

			}

			return success;

		} catch (SQLException e) {
			success = new JSONObject("{\"error\":\"error\",\"errorReport\":" + e.getMessage() + "\"");
		} catch (NullPointerException ne) {
			success = new JSONObject("{\"error\":\"error\",\"errorReport\":" + ne.getMessage() + "\"");
		} catch (Exception ex) {
			success = new JSONObject("{\"error\":\"error\",\"errorReport\":" + ex.getMessage() + "\"");

		} finally {

			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
				e.getMessage();
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return success;
	}

	public void InsertQuestionsAndAnswerTypeAse(String surveyId) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();

			String sql = "call iperform_survey_db_test.sp_ase_add_question_and_answer_type_mapping(?,?,?,?)";

			query = connection.prepareCall(sql);
			Integer counter = 1;
			for (AseQuestionsEnums questions : AseQuestionsEnums.values()) {

				query.setString(1, surveyId);
				query.setString(2, this.ReturnCorrespondQuestion(counter));
				query.setString(3, counter.toString());
				query.setString(4, "1");
				query.executeUpdate();

				counter = counter + 1;
			}

		} catch (SQLException e) {
			e.getMessage();
		} catch (Exception e) {

		} finally {
			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
				e.getMessage();
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}
		}

	}

	public String InsertRecepientsSurveyAse(String surveyId, String shiftIdTo, String shiftIdFor) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		String result = "failed";
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();

			String sql = "call iperform_survey_db_test.sp_ase_add_to_for_by_shift_recepients(?,?,?,?)";

			query = connection.prepareCall(sql);
			query.setString(1, surveyId);
			query.setString(2, shiftIdFor);
			query.setString(3, shiftIdTo);
			query.setString(4, "1");

			query.executeUpdate();
			return "success";

		} catch (SQLException e) {
			result = e.getMessage();
		} catch (Exception e) {
			result = e.getMessage();
		} finally {
			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
				e.getMessage();
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}
		}

		return result;

	}

	public JSONArray GetAseSurveyQuestions(String surveyId, String employeeId) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray result = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();

			String sql = "call iperform_survey_db_test.sp_ase_get_questions_for_survey(?,?)";

			query = connection.prepareCall(sql);
			query.setString(1, surveyId);
			query.setString(2, employeeId);

			result = ResultSetConverter.convert(query.executeQuery());

		} catch (SQLException e) {
			e.getMessage();
		} catch (Exception e) {
			e.getMessage();
		} finally {
			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
				e.getMessage();
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}
		}

		return result;

	}

	public JSONArray GetAseToBeSurveyed(String surveyId, String employeeId) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();

			String sql = "call iperform_survey_db_test.sp_ase_get_agent_to_ase_mapping(?,?)";

			query = connection.prepareCall(sql);
			query.setString(1, surveyId);
			query.setString(2, employeeId);

			json = ResultSetConverter.convert(query.executeQuery());

		} catch (SQLException e) {
			e.getMessage();
		} catch (Exception e) {

			e.getMessage();
		} finally {
			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
				e.getMessage();
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}
		}

		return json;

	}

	public JSONArray GetSurveyDetailsForClient(String surveyId, String employeeId) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();

			String sql = "call iperform_survey_db_test.sp_ase_get_survey_employee_information_for_client(?,?)";

			query = connection.prepareCall(sql);
			query.setString(1, surveyId);
			query.setString(2, employeeId);

			json = ResultSetConverter.convert(query.executeQuery());

		} catch (SQLException e) {
			e.getMessage();
		} catch (Exception e) {

			e.getMessage();
		} finally {
			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
				e.getMessage();
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}
		}

		return json;

	}

	public JSONArray SaveClientAseSurveyAnswers(String questionUUID, String answerValues, String surveyId,
			String answerType, String employeeId, String aseIds) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();

			String sql = "call iperform_survey_db_test.sp_ase_add_answer_survey(?,?,?,?,?,?)";

			query = connection.prepareCall(sql);
			query.setString(1, questionUUID);
			query.setString(2, answerValues);
			query.setString(3, surveyId);
			query.setString(4, answerType);
			query.setString(5, aseIds);
			query.setString(6, employeeId);

			json = ResultSetConverter.convert(query.executeQuery());

		} catch (SQLException e) {
			e.getMessage();
		} catch (Exception e) {

			e.getMessage();
		} finally {
			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
				e.getMessage();
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}
		}

		return json;

	}

	public JSONArray GetEmployeesByRole(String roleId) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();

			String sql = "call iperform_survey_db_test.sp_get_employees_by_role(?)";

			query = connection.prepareCall(sql);
			query.setString(1, roleId);

			json = ResultSetConverter.convert(query.executeQuery());

		} catch (SQLException e) {
			e.getMessage();
		} catch (Exception e) {

			e.getMessage();
		} finally {
			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
				e.getMessage();
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}
		}

		return json;

	}

	private String ReturnCorrespondQuestion(int counter) {
		String newstring = "";
		switch (counter) {
		case 1:
			newstring = "1. <b>(Knowledge)</b> <br />Did the INFORMATION shared/provided by the assigned ASE MADE SENSE to you?<br /> Answer/Resolution PROVIDED by the ASE: <br/ > <ul><li> Did it INCLUDE what you needed or wanted to know? </li></ul>";
			break;
		case 2:
			newstring = "2. <b>(Speed)</b> <br /> How RESPONSIVE was the ASE to the question or concerns you have raised? In terms of: <ul><li> ACCESSIBILITY</li><li>WILLINGNESS TO HELP</li></ul>";
			break;
		case 3:
			newstring = "3. <b>(Ownership) </b> <br /> How PROFESSIONAL was the assigned ASE in his/her interaction with you? <ul><li> How ATTENTIVE was the ASE?</li><li>Does the ASE act with a SENSE OF URGENCY on customer's concerns?</li>";
			break;
		case 4:
			newstring = "4. <b>(COLLABORATION)</b><br /> Did the ASE HELP YOU UNDERSTAND the issue and the resolution provided?<ul> <li> Did the ASE share his/her knowledge on HOW the RESOLUTION was OBTAINED?</li><li> Was the ASE HELPFUL in ARTICULATING the resolution?</li>";
			break;
		case 5:
			newstring = "5. <b>(Over All Rating )</b><br /> How would you rate the OVERALL QUALITY of your engagement with the assigned ASE?";
			break;
		}
		
		return newstring;
	}

}
