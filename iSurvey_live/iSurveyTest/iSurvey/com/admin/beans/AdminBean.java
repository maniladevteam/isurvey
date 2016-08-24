package iSurvey.com.admin.beans;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.sql.*;
import javax.json.JsonArray;
import javax.ws.rs.core.Response;

import org.json.*;

import com.sun.xml.rpc.processor.modeler.j2ee.xml.exceptionMappingType;

import org.codehaus.jettison.json.JSONObject;
import iSurvey.com.dao.ConnectionDAO;
import iSurvey.com.emailer.SurveyEmailer;
import iSurvey.com.helper.json.*;

public class AdminBean {

	public JSONArray GetAllActiveSurveys() throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_get_all_active_surveys`()");
			rs = query.executeQuery();

			json = ResultSetConverter.convert(rs);
			return json;

		} catch (SQLException e) {
			e.getStackTrace();
		} catch (Exception e) {  
			e.getMessage();
		} finally {
			try {
				if (rs != null)
					rs.close();
			} catch (Exception e) {

			}

			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {

			}

		}
		
		

		return null;
	}
	
	
	public JSONArray GetAllAseActiveSurveys() throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_ase_get_all_active_survey`()");
			rs = query.executeQuery();

			json = ResultSetConverter.convert(rs);
			return json;

		} catch (SQLException e) {
			e.getStackTrace();
		} catch (Exception e) {
			e.getMessage();
		} finally {
			try {
				if (rs != null)
					rs.close();
			} catch (Exception e) {
				
			}

			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
			}
			
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {

			}

		}
		
		

		return null;
	}

	public JSONArray GetSurveyDetail(String surveyUuId) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_get_survey_detail`(?)");

			query.setString(1, surveyUuId);
			rs = query.executeQuery();

			json = ResultSetConverter.convert(rs);

			return json;

		} catch (SQLException e) {
			e.getStackTrace();
		} catch (Exception e) {
			e.getMessage();
		} finally {
			try {
				if (rs != null)
					rs.close();
			} catch (Exception e) {

			}

			try {
				if (query != null)
					query.close();
			} catch (Exception e) {
			}

			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {

			}

		}

		return null;
	}

	public JSONObject CreateNewSurvey(String surveyName, String surveyDescription, String surveyCreator,
			String isAnonymous, String surveyType, String startDate, String endDate) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONObject success = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_add_admin_survey(?,?,?,?,?,?,?)";
			query = connection.prepareCall(sql);
		/*	
			SimpleDateFormat sdfmt1 = new SimpleDateFormat("mm/dd/yyyy");
			SimpleDateFormat sdfmt2= new SimpleDateFormat("yyyy-mm-dd");
			java.util.Date dDate = sdfmt1.parse( startDate );
			String strOutput = sdfmt2.format( dDate );
			
			java.util.Date eDate = sdfmt1.parse( endDate );
			String strOutputEDate = sdfmt2.format( eDate );*/
			
			query.setString(1, surveyName);
			query.setString(2, surveyDescription);
			query.setString(3, surveyCreator);
			query.setString(4, isAnonymous);
			query.setString(5, startDate);
			query.setString(6, endDate); 

			query.registerOutParameter(7, Types.INTEGER);

			rs = query.executeQuery();
			int surveyId = query.getInt(7);
			if (surveyId == 0) {
				success = new JSONObject("{\"error\":\"Name Already exists\"}");

			} else {
				success = new JSONObject("{\"success\":\"success\",\"surveyId\":\"" + surveyId + "\"}");
			}
			this.AddSurveyType(surveyId, surveyType);
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

	public void AddNewQuesetion(String surveyId, String quesetionName, String questionUUid, String answerTypeId,
			String isRequired, String sequence) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONObject success = null;
		Integer questionId = 0;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_add_question(?,?,?,?,?)";
			query = connection.prepareCall(sql);

			query.setString(1, questionUUid);
			query.setString(2, quesetionName);
			query.setString(3, isRequired);
			query.setString(4, sequence);
			query.registerOutParameter(5, Types.INTEGER);
			rs = query.executeQuery();

			questionId = query.getInt(5);
			// this.deleteSurveyQuestion(Integer.parseInt(surveyId));

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

			this.SaveToSurveyQuestions(Integer.parseInt(surveyId), questionId);
			this.SaveToQuestionAnswerType(questionId, Integer.parseInt(answerTypeId));
		}
	}

	public Boolean DeleteForUpdateQuestions(String surveyId) {

		CallableStatement query = null;
		Connection connection = null;
		Boolean success = false;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_delete_all_quesetion_per_survey(?)";
			query = connection.prepareCall(sql);
			query.setString(1, surveyId);
			query.executeQuery();
			success = true;

		} catch (SQLException e) {
			e.getMessage();
		} catch (NullPointerException ne) {
			ne.getMessage();
		} catch (Exception ex) {
			ex.getMessage();

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

	private void AddSurveyType(int surveyId, String surveyType) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_add_survey_type`(?,?)";
			query = connection.prepareCall(sql);

			query.setInt(1, surveyId);
			query.setString(2, surveyType);
			query.executeQuery();

		} catch (SQLException e) {
			e.getMessage();
			// success = new JSONObject("{\"error\":\"error\",\"errorReport\":"
			// + e.getMessage() + "\"");
		} catch (NullPointerException ne) {
			ne.getMessage();
			// success = new JSONObject("{\"error\":\"error\",\"errorReport\":"
			// + ne.getMessage() + "\"");
		} catch (Exception ex) {
			// success = new JSONObject("{\"error\":\"error\",\"errorReport\":"
			// + ex.getMessage() + "\"");
			ex.getMessage();
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

	private void SaveToSurveyQuestions(Integer surveyId, Integer questionId) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_add_survey_question_mapping(?,?)";
			query = connection.prepareCall(sql);

			query.setInt(1, surveyId);
			query.setInt(2, questionId);
			rs = query.executeQuery();
		} catch (SQLException sqlEx) {
			sqlEx.getMessage();
		} catch (Exception ex) {
			ex.getMessage();
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

	private void SaveToQuestionAnswerType(Integer questionId, Integer answerTypeId) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_add_question_answertype_mapping(?,?)";
			query = connection.prepareCall(sql);

			query.setInt(1, questionId);
			query.setInt(2, answerTypeId);

			rs = query.executeQuery();
		} catch (SQLException sqlEx) {
			sqlEx.getMessage();
		} catch (Exception ex) {
			ex.getMessage();
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

	public Boolean deleteSurveyQuestion(Integer surveyId) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		Boolean is_deleted = false;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_delete_survey_question_answer_types(?)";
			query = connection.prepareCall(sql);

			query.setInt(1, surveyId);

			rs = query.executeQuery();

			is_deleted = true;
		} catch (SQLException sqlEx) {
			sqlEx.getMessage();

		} catch (Exception ex) {
			ex.getMessage();
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
		return is_deleted;
	}

	public JSONArray GetSurveySummary(Integer surveyId, String workGroup) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_get_all_computation_summary(?,?)";
			query = connection.prepareCall(sql);

			query.setInt(1, surveyId);
			query.setString(2, workGroup);

			rs = query.executeQuery();

			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			sqlEx.getMessage();

		} catch (Exception ex) {
			ex.getMessage();
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

	public JSONArray GetSurveySummaryTopBoxThree(Integer surveyId, String workGroup) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_get_survey_top_box_three(?,?)";
			query = connection.prepareCall(sql);

			query.setInt(1, surveyId);
			query.setString(2, workGroup);

			rs = query.executeQuery();
			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			sqlEx.getMessage();

		} catch (Exception ex) {
			ex.getMessage();
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

	public JSONArray GetSurveySummaryTopBoxFour(Integer surveyId, String workGroup) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_get_survey_top_box_four(?,?)";
			query = connection.prepareCall(sql);

			query.setInt(1, surveyId);
			query.setString(2, workGroup);

			rs = query.executeQuery();
			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			sqlEx.getMessage();

		} catch (Exception ex) {
			ex.getMessage();
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

	public JSONArray GetAllWorkGroups() {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_all_work_group_list`()";
			query = connection.prepareCall(sql);
			rs = query.executeQuery();

			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return json;
	}

	public JSONArray GetAllEmployees() {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_all_employees`()";
			query = connection.prepareCall(sql);
			rs = query.executeQuery();

			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return json;
	}

	public JSONArray GetAllTeamManagers() {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_team_managers`()";
			query = connection.prepareCall(sql);
			rs = query.executeQuery();

			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return json;
	}

	public boolean SendEmailToRespondents(String surveyUUID, String message, String origin) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;

		try {
			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_emails_for_follow_up`(?)";
			query = connection.prepareCall(sql);
			query.setString(1, surveyUUID);

			rs = query.executeQuery();

			while (rs.next()) {
				SurveyEmailer.SendSurvey(rs.getString("email_address"), rs.getString("user_uu_id"),
						rs.getString("survey_uu_id"), rs.getString("user_first_name"), message, origin);
			}
			AddToSentEmailCount(surveyUUID, message);
			return true;
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try { 
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return false;
	}
	
	public boolean SendAseEmailToRespondents(String surveyUUID, String message) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		
		try {
			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_emails_for_follow_up`(?)";
			query = connection.prepareCall(sql);
			query.setString(1, surveyUUID);
			List<String> emails = new ArrayList<String>();
			rs = query.executeQuery();

			while (rs.next()) {
				emails.add(rs.getString("email_address"));
				SurveyEmailer.SendSurveyASE(rs.getString("email_address"), rs.getString("user_uu_id"),
						rs.getString("survey_uu_id"), rs.getString("user_first_name"), message);
			}
			/*SurveyEmailer.logEmailed(surveyUUID, emails);*/
			AddToSentEmailCount(surveyUUID, message);
			return true;
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return false;
	}

	private void AddToSentEmailCount(String surveyID, String message) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_add_to_follow_up_sent_email`(?,?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyID);
			query.setString(2, message);
			rs = query.executeQuery();

		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}

	}

	public JSONArray GetAllQuestionsPerSurvey(String surveyID) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_all_question_per_survey`(?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyID);
			rs = query.executeQuery();

			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());
			
		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return json;
	}

	public JSONArray GetPerSurveySummaryQuestion(String questionID, String surveyID, String surveyAnswerType,
			String recepientType, String recepientList) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = null;
			if (surveyAnswerType.equals("1")) {
				sql = "call iperform_survey_db_test.`sp_get_summary_per_question`(?,?,?,?)";
			} else {
				sql = "call iperform_survey_db_test.`sp_get_summary_per_question_rating`(?,?,?,?)";
			}

			query = connection.prepareCall(sql);

			query.setString(1, questionID);
			query.setString(2, surveyID);
			query.setString(3, recepientType);
			query.setString(4, (recepientList.equals("null") ? "" : recepientList));
			rs = query.executeQuery();

			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return json;
	}

	public Boolean ArchiveSurveys(String surveyId) {
		CallableStatement query = null;
		Connection connection = null;
		Boolean is_archived = false;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_archive_survey(?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyId);
			query.executeQuery();

			is_archived = true;
		} catch (SQLException sqlEx) {
			sqlEx.getMessage();

		} catch (Exception ex) {
			ex.getMessage();
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
		return is_archived;
	}

	public JSONArray ReadArchivedSurvey() {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_archived_surveys`()";
			query = connection.prepareCall(sql);

			rs = query.executeQuery();

			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return json;
	}

	public boolean SaveSurveyRecepientType(String surveyId, String surveyType) {
		CallableStatement query = null;
		Connection connection = null;
		Boolean saved = false;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_add_survey_recepient_type(?,?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyId);
			query.setString(2, surveyType);

			if (query.execute())
				saved = true;

		} catch (SQLException sqlEx) {
			sqlEx.getMessage();
		} catch (Exception ex) {
			ex.getMessage();
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
		return saved;
	}

	public boolean SaveSurveyRecepientTypeListEmail(String surveyId, String surveyType, String recepients) {
		CallableStatement query = null;
		Connection connection = null;
		Boolean saved = false;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_add_survey_recepients(?,?,?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyId);
			query.setString(2, surveyType);
			query.setString(3, recepients);

			if (query.execute())
				saved = true;

		} catch (SQLException sqlEx) {
			sqlEx.getMessage();
		} catch (Exception ex) {
			ex.getMessage();
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
		return saved;
	}

	public JSONArray GetSurveyReceipients(String surveyId, String surveyType) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_survey_recepients_with_type`(?,?)";
			query = connection.prepareCall(sql);
			query.setString(1, surveyId);
			query.setString(2, surveyType);
			rs = query.executeQuery();

			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return json;
	}

	public JSONArray GetResponseRatioData(String surveyId, String surveyUUID) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_response_percentage`(?,?)";
			query = connection.prepareCall(sql);
			query.setString(1, surveyUUID);
			query.setString(2, surveyId);
			rs = query.executeQuery();

			return ResultSetConverter.convert(rs);
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return json;
	}

	public JSONObject AddToSurveyTemplate(String surveyId, String message) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONObject success = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_add_to_follow_up_sent_email(?,?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyId);
			query.setString(2, message);

			rs = query.executeQuery();
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

	public JSONArray GetVerbatimPerQuestion(String surveyId) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONArray success = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_get_all_verbatim_question_per_survey(?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyId);

			rs = query.executeQuery();
			success = ResultSetConverter.convert(rs);

		} catch (SQLException e) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + e.getMessage() + "\"");
		} catch (NullPointerException ne) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ne.getMessage() + "\"");
		} catch (Exception ex) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ex.getMessage() + "\"");

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
	
	public JSONArray GetVerbatimAnswers(String questionId) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONArray success = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_get_answer_from_vervatim_question(?)";
			query = connection.prepareCall(sql);

			query.setString(1, questionId);

			rs = query.executeQuery();
			success = ResultSetConverter.convert(rs);

		} catch (SQLException e) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + e.getMessage() + "\"");
		} catch (NullPointerException ne) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ne.getMessage() + "\"");
		} catch (Exception ex) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ex.getMessage() + "\"");

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
	
	public JSONArray GetSurveyIfValidForUpdate(String surveyUUID) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONArray success = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_validate_survey_if_answered(?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyUUID);

			rs = query.executeQuery();
			success = ResultSetConverter.convert(rs);

		} catch (SQLException e) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + e.getMessage() + "\"");
		} catch (NullPointerException ne) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ne.getMessage() + "\"");
		} catch (Exception ex) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ex.getMessage() + "\"");

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
	
	
	public JSONArray UpdateSurveyDates(String surveyUUID,String startDate,String endDate) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONArray success = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_update_survey_dates(?,?,?)";
			query = connection.prepareCall(sql);

			
			query.setString(1, surveyUUID);
			query.setString(2, startDate);
			query.setString(3, endDate);

			rs = query.executeQuery();
			success = ResultSetConverter.convert(rs);

		} catch (SQLException e) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + e.getMessage() + "\"");
		} catch (NullPointerException ne) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ne.getMessage() + "\"");
		} catch (Exception ex) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ex.getMessage() + "\"");

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

	public JSONArray GetSurveyRecipientsForUpdate(String surveyId) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONArray success = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_get_all_survey_recepients(?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyId);

			rs = query.executeQuery();
			success = ResultSetConverter.convert(rs);

		} catch (SQLException e) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + e.getMessage() + "\"");
		} catch (NullPointerException ne) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ne.getMessage() + "\"");
		} catch (Exception ex) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ex.getMessage() + "\"");

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
	
	public JSONArray DeleteSurveyRecepient(String surveyId,String emailAdd) throws SQLException, Exception {

		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray jason = new org.json.JSONArray();
		JSONArray success = null;
		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.sp_delete_survey_recepient(?,?)";
			query = connection.prepareCall(sql);			
			query.setString(1, surveyId);
			query.setString(2, emailAdd);
		

			rs = query.executeQuery();
			success = ResultSetConverter.convert(rs);

		} catch (SQLException e) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + e.getMessage() + "\"");
		} catch (NullPointerException ne) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ne.getMessage() + "\"");
		} catch (Exception ex) {
			success = new JSONArray("{\"error\":\"error\",\"errorReport\":" + ex.getMessage() + "\"");

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
	
	public boolean SendEmailToRespondentsAgent(String surveyUUID, String message, String origin) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;

		try {
			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_emails_for_follow_up`(?)";
			query = connection.prepareCall(sql);
			query.setString(1, surveyUUID);

			rs = query.executeQuery();

			while (rs.next()) {
				SurveyEmailer.SendSurveyQualityAgent(rs.getString("email_address"), rs.getString("user_uu_id"),
						rs.getString("survey_uu_id"), rs.getString("user_first_name"),origin);
			}
			AddToSentEmailCount(surveyUUID, "this has been sent");
			return true;
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());

		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)  
					connection.close();
			} catch (Exception e) {
				e.getMessage();  
			}

		}
		return false;
	}
	
	public boolean SendEmailToRespondentsTm(String surveyUUID,String SurveyUUIDTm, String message,String origin) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;

		try {
			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_emails_for_follow_up`(?)";
			query = connection.prepareCall(sql);
			query.setString(1, surveyUUID);
			
			rs = query.executeQuery();

			while (rs.next()) {
				SurveyEmailer.SendSurveyQualityTM(rs.getString("email_address"), rs.getString("user_uu_id"),
						rs.getString("survey_uu_id"), rs.getString("user_first_name"), SurveyUUIDTm,origin);
			}
			AddToSentEmailCount(surveyUUID, message);
			return true;
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());
			
		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {  
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return false;
	}
	
	public boolean SendEmailToRespondentsPSM(String surveyUUID, String message, String origin) {
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;

		try {
			connection = ConnectionDAO.iSurveyConntest().getConnection();
			String sql = "call iperform_survey_db_test.`sp_get_emails_for_follow_up`(?)";
			query = connection.prepareCall(sql);
			query.setString(1, surveyUUID);

			rs = query.executeQuery();

			while (rs.next()) {
				SurveyEmailer.SendSurveyPSM(rs.getString("email_address"), rs.getString("user_uu_id"),
						rs.getString("survey_uu_id"), rs.getString("user_first_name"),origin);
			}
			AddToSentEmailCount(surveyUUID, message);
			return true;
		} catch (SQLException sqlEx) {
			System.out.println(sqlEx.getMessage());
			
		} catch (Exception ex) {
			ex.getMessage();
		} finally {
			try {
				if (connection != null)
					connection.close();
			} catch (Exception e) {
				e.getMessage();
			}

		}
		return false;
	}
	
}
