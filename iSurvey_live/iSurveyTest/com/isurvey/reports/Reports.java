package com.isurvey.reports;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import iSurvey.com.dao.ConnectionDAO;
import jxl.Workbook;
import jxl.write.Label;
import jxl.write.WritableCell;
import jxl.write.WritableCellFormat;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;

/**
 * Servlet implementation class Reports
 */
@WebServlet("/Reports")
public class Reports extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Reports() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		WritableCell cell = null;
		WritableCellFormat cf = null;
		Connection conn = null;
		CallableStatement query = null;
		Connection connection = null;
		ResultSet rs = null;
		JSONArray json = null;
		String surveyName = request.getParameter("sn");
		try {
			String surveyID = request.getParameter("surveyId");
			String isAnonymous = request.getParameter("ano");

			try {
				connection = ConnectionDAO.iSurveyConntest().getConnection();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			String sql = "call iperform_survey_db_test.`sp_get_all_answers_from_survey_for_reporting`(?)";
			query = connection.prepareCall(sql);

			query.setString(1, surveyID);
			rs = query.executeQuery();

			response.setContentType("application/vnd.ms-excel");
			response.setHeader("Content-Disposition", "attachment; filename=" + surveyName + ".xls");
			WritableWorkbook w = Workbook.createWorkbook(response.getOutputStream());
			WritableSheet s = w.createSheet(surveyName, 0);
			WritableCellFormat cellFormat = new jxl.write.WritableCellFormat(
					new jxl.write.DateFormat("MM/dd/yyyy hh:mm"));

			int counter = 1;
			if (isAnonymous.equals("1")) {
				s.addCell(new Label(0, 0, "Employee name"));
				s.addCell(new Label(1, 0, "Question Name"));
				s.addCell(new Label(2, 0, "Score"));
               
				while (rs.next()) {

					s.addCell(new Label(0, counter, "## anonymous ##"));
					s.addCell(new Label(1, counter, rs.getString("question_name")));
					s.addCell(new Label(2, counter, rs.getString("value")));

					counter++;
				}

			} else {
				s.addCell(new Label(0, 0, "Employee name"));
				s.addCell(new Label(1, 0, "Question Name"));
				s.addCell(new Label(2, 0, "Score"));

				while (rs.next()) {

					s.addCell(new Label(0, counter, rs.getString("employee_name")));
					s.addCell(new Label(1, counter, rs.getString("question_name")));
					s.addCell(new Label(2, counter, rs.getString("value")));

					counter++;
				}
			}
			w.write();
			w.close();
		} catch (NullPointerException g) {

		} catch (WriteException ex) {

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException ex) {

			}
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
