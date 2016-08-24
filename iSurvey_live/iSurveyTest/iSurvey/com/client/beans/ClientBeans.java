package iSurvey.com.client.beans;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;

import iSurvey.com.dao.ConnectionDAO;
import iSurvey.com.emailer.SurveyEmailer;
import iSurvey.com.helper.json.ResultSetConverter;

public class ClientBeans {
	public JSONArray GetSurveyDetails(String surveyUUID) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_get_user_survey`(?)");

			query.setString(1, surveyUUID);
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

	public JSONArray GetUserClientDetails(String userId) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_get_user_details`(?)");
			query.setString(1, userId);
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

	public JSONArray AddSurveyAnswer(String surveyUUId, String questionId, String uuid, String answerValue,
			String userId) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_add_user_answer`(?,?,?,?,?)");
			query.setString(1, surveyUUId);
			query.setString(2, questionId);
			query.setString(3, "");
			query.setString(4, answerValue);
			query.setString(5, userId);
			query.execute();
			this.AddSurveyUser(surveyUUId, uuid);
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

	public JSONArray AddSurveyAnswerASE(String surveyUUId, String questionId, String questionType, String answerValue,
			String userId) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_ase_add_answer_survey`(?,?,?,?,?,?)");
			query.setString(1, questionId);
			query.setString(2, answerValue);
			query.setString(3, surveyUUId);
			query.setString(4, questionType);
			query.setString(5, "");
			query.setString(6, userId);
			query.execute();
			
			json = ResultSetConverter.convert(rs);
			this.AddSurveyUser(surveyUUId, userId);
			//this.EmailTeamManagerForConfirmation(userId);
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

	public JSONArray AddSurveyCommentASE(String surveyUUId, String questionId, String questionType, String answerValue,
			String userId) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_add_comments`(?,?,?,?,?,?)");
			query.setString(1, questionId);
			query.setString(2, answerValue);
			query.setString(3, surveyUUId);
			query.setString(4, questionType);
			query.setString(5, "");
			query.setString(6, userId);   
			query.execute();

			json = ResultSetConverter.convert(rs);
			// this.AddSurveyUser(surveyUUId, userId);
			return json;
			// SPLIT_STR(@currentString,'|',1);
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

	private JSONArray AddSurveyUser(String surveyId, String userId) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_add_to_answered_survey`(?,?)");
			query.setString(1, surveyId);
			query.setString(2, userId);

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

	public JSONArray ValidateUserAndSurvey(String surveyId, String userId) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_validate_if_answered`(?,?)");
			query.setString(1, surveyId);
			query.setString(2, userId);

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

	public JSONArray GetUserUUIDForEmail(String surveyId, String userId) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_validate_if_answered`(?,?)");
			query.setString(1, surveyId);
			query.setString(2, userId);

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

	public JSONArray GetAse(String employeeIds) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_get_employees_by_role`(?)");
			query.setString(1, employeeIds);

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

	private void EmailTeamManagerForConfirmation(String UUID) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_get_tm_details`(?)");
			query.setString(1, UUID);
			
			rs = query.executeQuery();

			while (rs.next()) {

				SurveyEmailer.SendCSeTM(rs.getString("user_email"), rs.getString("user_first_name"), rs.getString("emp_name"));

			}

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

	}
}
