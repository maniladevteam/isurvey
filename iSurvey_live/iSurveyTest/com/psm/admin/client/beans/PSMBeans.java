package com.psm.admin.client.beans;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;

import iSurvey.com.dao.ConnectionDAO;
import iSurvey.com.helper.json.ResultSetConverter;

public class PSMBeans {
	
	public JSONArray GetSurveyDetails(String surveyUUID) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_get_survey_psm_detail`(?)");

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
	
	
	
	
	public JSONArray GetPsmTeamManagers(String userId) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_get_emp_psm_mapping`(?)");

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
	
	public JSONArray AddClientPsmAnswers(String userId, String surveyId, String value) throws SQLException, Exception {

		PreparedStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		org.json.JSONArray json = new org.json.JSONArray();

		try {

			connection = ConnectionDAO.iSurveyConntest().getConnection();
			query = connection.prepareStatement("call iperform_survey_db_test.`sp_add_user_psm_answer`(?,?,?,?,?)");

			query.setString(1, surveyId);
			query.setString(2, "");
			query.setString(3, "");
			query.setString(4, value);
			query.setString(5, userId);
			
			rs = query.executeQuery();

			json = ResultSetConverter.convert(rs);
			AddSurveyUser(surveyId,userId);
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
}
