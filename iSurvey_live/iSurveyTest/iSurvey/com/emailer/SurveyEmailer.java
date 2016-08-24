package iSurvey.com.emailer;

import java.io.IOException;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import java.util.List;
import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import javax.mail.internet.MimeMultipart;
import java.util.logging.*;

import javax.mail.internet.MimeBodyPart;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;

public class SurveyEmailer {
	public static void SendSurvey(String to, String userUUID, String surveyUUID, String toName, String messageBody,
			String origin) {

		String from = "devmanila@thomsonreuters.com";
		String host = "mailhub.tfn.com";

		Properties properties = System.getProperties();
		properties.setProperty("mail.smtp.host", host);
		Session session = Session.getDefaultInstance(properties);
		// http://localhost:8080/iSurvey/tests/views/client/?u=1b7c98fe00ee8071c42e2862b422ff8f&s=d93a404a-86f8-11e5-b4e6-00059a3c7a00
		try {
			/*
			 * MimeMessage message = new MimeMessage(session); MimeMultipart
			 * multipart = new MimeMultipart("related"); BodyPart
			 * messageBodyPart = new MimeBodyPart(); String htmlText =
			 * "<H1>Hello</H1><img src=\"cid:image\">";
			 * messageBodyPart.setContent(htmlText, "text/html"); // add it
			 * multipart.addBodyPart(messageBodyPart);
			 * 
			 * messageBodyPart.setContent(htmlText, "text/html"); // add it
			 * multipart.addBodyPart(messageBodyPart);
			 */
			StringBuilder msgBody = new StringBuilder();
			msgBody.append(
					"<body style='font:segoe UI; margin:auto; text-align: justify; text-justify: inter-word;'> <div style='margin:auto;'>");
			msgBody.append("<img src=cid:image> </div>");
			msgBody.append("Hi ");
			msgBody.append(toName);
			msgBody.append(",");
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append(messageBody);
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append("<a href='" + origin + "/iSurvey_live/deployed/views/client/?u=");
			msgBody.append(userUUID);
			msgBody.append("&");
			msgBody.append("s=" + surveyUUID + "'>");
			msgBody.append("Click here</a> to take our short survey!!");

			msgBody.append("<p>Thanks</p>");
			msgBody.append("<p>Yours Truly,</p>");
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append("Manila Development Team");

			/*
			 * message.setFrom(new InternetAddress(from));
			 * message.addRecipient(Message.RecipientType.TO, new
			 * InternetAddress(to)); message.setSubject(
			 * "No Reply : New Request from " +
			 * "Test Email From Mar for the survey");
			 * message.setContent(msgBody.toString(), "text/html");
			 * Transport.send(message);
			 */
			// Create a default MimeMessage object.
			Message message = new MimeMessage(session);

			// Set From: header field of the header.
			message.setFrom(new InternetAddress(from));

			// Set To: header field of the header.
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));

			// Set Subject: header field
			message.setSubject("No Reply : Survey From Dev Manila");

			// This mail has 2 part, the BODY and the embedded image
			MimeMultipart multipart = new MimeMultipart("related");

			// first part (the html)
			BodyPart messageBodyPart = new MimeBodyPart();
			String htmlText = msgBody.toString();
			messageBodyPart.setContent(htmlText, "text/html");
			// add it
			multipart.addBodyPart(messageBodyPart);

			// second part (the image)
			messageBodyPart = new MimeBodyPart();
			// DataSource fds = new
			// FileDataSource("///C:/Users/U6016812/Desktop/logoemail.png");

			/*
			 * DataSource fds2 = new FileDataSource(
			 * "///C:/Users/U6016812/Desktop/RE_SurveyMappingsxlsx.msg");
			 * messageBodyPart.setDataHandler(new DataHandler(fds2));
			 */

			// messageBodyPart.setDataHandler(new DataHandler(fds));

			messageBodyPart.setHeader("Content-ID", "<image>");

			// add image to the multipart
			//

			addAttachment(multipart, "///C:/defaultlogo.jpg");

			// put everything together
			message.setContent(multipart);
			// Send message
			Transport.send(message);

			System.out.println("Sent message successfully....");

		} catch (Exception e) {
			e.getMessage();
		}
	}

	private static void addAttachment(Multipart multipart, String filename) throws MessagingException {
		DataSource source = new FileDataSource(filename);
		BodyPart messageBodyPart = new MimeBodyPart();
		messageBodyPart.setDataHandler(new DataHandler(source));
		messageBodyPart.setFileName((filename).substring(filename.lastIndexOf("/")));
		messageBodyPart.setHeader("Content-ID", "<image>");
		multipart.addBodyPart(messageBodyPart);
	}

	public static void SendSurveyASE(String to, String userUUID, String surveyUUID, String toName, String messageBody) {

		String from = "devmanila@thomsonreuters.com";
		String host = "mailhub.tfn.com";

		Properties properties = System.getProperties();
		properties.setProperty("mail.smtp.host", host);
		Session session = Session.getDefaultInstance(properties);
		// http://localhost:8080/iSurvey/tests/views/client/?u=1b7c98fe00ee8071c42e2862b422ff8f&s=d93a404a-86f8-11e5-b4e6-00059a3c7a00
		try {
			/*
			 * MimeMessage message = new MimeMessage(session); MimeMultipart
			 * multipart = new MimeMultipart("related"); BodyPart
			 * messageBodyPart = new MimeBodyPart(); String htmlText =
			 * "<H1>Hello</H1><img src=\"cid:image\">";
			 * messageBodyPart.setContent(htmlText, "text/html"); // add it
			 * multipart.addBodyPart(messageBodyPart);
			 * 
			 * messageBodyPart.setContent(htmlText, "text/html"); // add it
			 * multipart.addBodyPart(messageBodyPart);
			 */
			StringBuilder msgBody = new StringBuilder();
			msgBody.append(
					"<body  style='font:segoe UI'; margin:auto; text-align: justify; text-justify: inter-word;'> <div style='margin:auto;'>");
			msgBody.append("<img src=cid:image> </div>");
			msgBody.append("<i>Hi ");
			msgBody.append(toName);
			msgBody.append(",");
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append(
					"You are receiving this message as our key stakeholder of the ASE Program. Collaboration is part of our ASEs bonus objective and we are continuing the quarterly ASE engagement survey. <br /> <br />");

			msgBody.append("Kindly take a few minutes to complete this ");
			msgBody.append(
					"<a href='http://service.reporting.ime.reuters.com:8080/iSurvey_live/deployed/views/clientasev2/?u=");
			msgBody.append(userUUID);
			msgBody.append("&");
			msgBody.append("s=" + surveyUUID + "'>");
			msgBody.append("survey");
			msgBody.append("</a>.");
			msgBody.append(
					" <span style='color:red'>(use Google Chrome)</span>. Your perspectives and insights are important to us to improve our interaction.<br /><br />");

			msgBody.append(
					"<u>Responses are completely anonymous</u>. Survey will be open until the morning of June 18. Select the ASE/s that you had the most interaction with. <br /> <br />");

			msgBody.append(
					"Please be transparent as you can on rating them and provide candid feedback in the comments section. <br /><br /> ");
			msgBody.append(
					"Lastly, do not forward this email since each survey link generated is unique. <br /><br /> ");
			msgBody.append("Thank you in advance for your participation. <br /><br /> ");

			msgBody.append("<p>Sincerely,</p>");

			msgBody.append("ASE Management Team</i>");

			Message message = new MimeMessage(session);

			message.setFrom(new InternetAddress(from));

			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));

			message.setSubject("No Reply : New Request from " + "ASE Survey Form");

			MimeMultipart multipart = new MimeMultipart("related");

			BodyPart messageBodyPart = new MimeBodyPart();
			String htmlText = msgBody.toString();
			messageBodyPart.setContent(htmlText, "text/html");

			multipart.addBodyPart(messageBodyPart);

			messageBodyPart = new MimeBodyPart();
			DataSource fds = new FileDataSource("///C:/isurvey.jpg");

			messageBodyPart.setDataHandler(new DataHandler(fds));
			messageBodyPart.setHeader("Content-ID", "<image>");

			multipart.addBodyPart(messageBodyPart);

			message.setContent(multipart);

			Transport.send(message);

			System.out.println("Sent message successfully....");

		} catch (Exception e) {
			e.getMessage();
		}
	}

	public static void SendSurveyPSM(String to, String userUUID, String surveyUUID, String toName, String origin) {

		String from = "globalqualityteam@thomsonreuters.com";
		String host = "mailhub.tfn.com";

		Properties properties = System.getProperties();
		properties.setProperty("mail.smtp.host", host);
		Session session = Session.getDefaultInstance(properties);
		// http://localhost:8080/iSurvey/tests/views/client/?u=1b7c98fe00ee8071c42e2862b422ff8f&s=d93a404a-86f8-11e5-b4e6-00059a3c7a00
		try {

			StringBuilder msgBody = new StringBuilder();
			msgBody.append(
					"<body  style='font:Segoe UI'; margin:auto;  text-align: justify; text-justify: inter-word;'> <div style='margin:auto;'>");
			msgBody.append("<img src=cid:image> </div>");
			msgBody.append("Hello ");
			msgBody.append(toName);
			msgBody.append(",");
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append("Today is the last day to share your perspective on how your team managers are doing before they join the upcoming High-Impact Coaching Workshop</b>. <br /><br />");
			msgBody.append(
					"Simply go through the questionnaire below by copying the link and opening it in Google Chrome.<br/><br/> <br/>");
			msgBody.append("<a href='" + origin + "/iSurvey_quality/deployed/views/psm/?u=");
			msgBody.append(userUUID);
			msgBody.append("&");
			msgBody.append("s=" + surveyUUID + "'>");
			msgBody.append("Personal Qualities of an Effective Coach");
			msgBody.append("</a>");

			msgBody.append("<p>Warm Regards,</p>");
			msgBody.append("Global Quality Team");

			Message message = new MimeMessage(session);

			message.setFrom(new InternetAddress(from));

			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));

			message.setSubject("PRE-WORK: High-Impact Coaching");

			MimeMultipart multipart = new MimeMultipart("related");

			BodyPart messageBodyPart = new MimeBodyPart();
			String htmlText = msgBody.toString();
			messageBodyPart.setContent(htmlText, "text/html");

			multipart.addBodyPart(messageBodyPart);

			messageBodyPart = new MimeBodyPart();

			messageBodyPart.setHeader("Content-ID", "<image>");

			addAttachment(multipart, "///C:/hic.jpg");

			message.setContent(multipart);

			Transport.send(message);

			System.out.println("Sent message successfully....");
		} catch (MessagingException f) {
			f.getMessage();
		} catch (Exception e) {
			e.getMessage();
		}
	}

	public static void SendSurveyQualityAgent(String to, String userUUID, String surveyUUID, String toName,
			String origin) {

		String from = "globalqualityteam@thomsonreuters.com";
		String host = "mailhub.tfn.com";

		Properties properties = System.getProperties();
		properties.setProperty("mail.smtp.host", host);
		Session session = Session.getDefaultInstance(properties);

		try {

			StringBuilder msgBody = new StringBuilder();
			msgBody.append(
					"<body  style='font:segoe UI'; margin:auto; text-align: justify; text-justify: inter-word;'> <div style='margin:auto;'>");
			msgBody.append("<img src=cid:image> </div>");
			msgBody.append("Hi ");
			msgBody.append(toName);
			msgBody.append(",");
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append(
					"Today is the last day to share your perspective on how your team manager is doing before they join the upcoming High-Impact Coaching Workshop.   <br /> <br />");
			msgBody.append(
					"Simply go through the questionnaire below by copying the link and opening it in Google Chrome.<br/><br/> <br/>");
			
			msgBody.append("<a href='" + origin + "/iSurvey_quality/deployed/views/client/?u=");
			msgBody.append(userUUID);
			msgBody.append("&");
			msgBody.append("s=" + surveyUUID + "'>");
			msgBody.append("Personal Qualities of an Effective Coach");
			msgBody.append("</a>");

			msgBody.append("<p>Warm Regards,</p>");
			msgBody.append("Global Quality Team");
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(from));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
			message.setSubject("PRE-WORK: High-Impact Coaching");
			MimeMultipart multipart = new MimeMultipart("related");

			BodyPart messageBodyPart = new MimeBodyPart();
			String htmlText = msgBody.toString();
			messageBodyPart.setContent(htmlText, "text/html");
			multipart.addBodyPart(messageBodyPart);
			messageBodyPart = new MimeBodyPart();

			messageBodyPart.setHeader("Content-ID", "<image>");
			addAttachment(multipart, "///C:/hic.jpg");
			message.setContent(multipart);
			Transport.send(message);
			System.out.println("Sent message successfully....");

		} catch (Exception e) {
			e.getMessage();
		}
	}

	public static void SendSurveyQualityTM(String to, String userUUID, String surveyUUID, String toName,
			String sencondSurveyUUID, String origin) {

		String from = "globalqualityteam@thomsonreuters.com";
		String host = "mailhub.tfn.com";

		Properties properties = System.getProperties();
		properties.setProperty("mail.smtp.host", host);
		Session session = Session.getDefaultInstance(properties);

		try {

			StringBuilder msgBody = new StringBuilder();
			msgBody.append(
					"<body  style='margin:auto; text-align: justify; text-justify: inter-word;'> <div style='margin:auto;'>");
			msgBody.append("<img src=cid:image> </div>");
			msgBody.append("Hi ");
			msgBody.append(toName);
			msgBody.append(",");
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append(
					"Today is the last day to complete your pre-work for the High-Impact Coaching. Kindly answer the two questionnaires: 'Personal Qualities of an Effective Coach' and 'Internal Roadblocks'. <br /><br /> ");

			msgBody.append(
					"Simply go through the questionnaires below by copying the links and opening them in Google Chrome.<br /><br /><br />");

		
			msgBody.append("<a href='" + origin + "/iSurvey_quality/deployed/views/client/?u=");

			msgBody.append(userUUID);
			msgBody.append("&");
			msgBody.append("s=" + surveyUUID + "'> ");

			msgBody.append("1. Personal Qualities of an Effective Coach");
			msgBody.append("</a><br />");

			msgBody.append("<a href='" + origin + "/iSurvey_quality/deployed/views/client/?u=");
			msgBody.append(userUUID);
			msgBody.append("&");
			msgBody.append("s=" + sencondSurveyUUID + "'>");

			msgBody.append("2. Internal Roadblocks");
			msgBody.append("</a>");

			msgBody.append("<p>Regards,</p>");

			msgBody.append("Global Quality Team");
			
			Message message = new MimeMessage(session);

			message.setFrom(new InternetAddress(from));

			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));

			message.setSubject("PRE-WORK: High-Impact Coaching");

			MimeMultipart multipart = new MimeMultipart("related");
			BodyPart messageBodyPart = new MimeBodyPart();
			String htmlText = msgBody.toString();
			messageBodyPart.setContent(htmlText, "text/html");
			// add it
			multipart.addBodyPart(messageBodyPart);
			messageBodyPart = new MimeBodyPart();
			messageBodyPart.setHeader("Content-ID", "<image>");
			addAttachment(multipart, "///C:/hic.jpg");
			message.setContent(multipart);
			Transport.send(message);

			System.out.println("Sent message successfully....");

		} catch (Exception e) {
			e.getMessage();
		}
	}

	public static void SendCSeTM(String to, String toName, String byName) {

		String from = "globalqualityteam@thomsonreuters.com";
		String host = "mailhub.tfn.com";

		Properties properties = System.getProperties();
		properties.setProperty("mail.smtp.host", host);
		Session session = Session.getDefaultInstance(properties);
		try {
			StringBuilder msgBody = new StringBuilder();
			msgBody.append(
					"<body  style='margin:auto;  text-align: justify; text-justify: inter-word;'> <div style='margin:auto;'>");
			msgBody.append("<img src=cid:image> </div>");
			msgBody.append("<i>Hi ");
			msgBody.append(toName);
			msgBody.append(",");
			msgBody.append("<p>&nbsp;</p>");
			msgBody.append("You are receiving this email because " + byName
					+ " has answered the survey for the ASEs.<br /><br /> ");
			msgBody.append("<p>Regards,</p>");
			msgBody.append("Manila Development Team</i>");
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(from));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
			message.setSubject("Confirmation: Answered ASE survey");
			MimeMultipart multipart = new MimeMultipart("related");

			BodyPart messageBodyPart = new MimeBodyPart();
			String htmlText = msgBody.toString();
			messageBodyPart.setContent(htmlText, "text/html");

			multipart.addBodyPart(messageBodyPart);

			messageBodyPart = new MimeBodyPart();

			addAttachment(multipart, "///C:/isurvey.jpg");

			message.setContent(multipart);

			Transport.send(message);

			System.out.println("Sent message successfully....");

		} catch (Exception e) {
			e.getMessage();
		}
	}

	public static void logEmailed(String surveyId, String email, String type)
			throws IOException, ClassNotFoundException {
		try {

			Logger logger = LogManager.getLogManager().getLogger(Logger.GLOBAL_LOGGER_NAME);
			if (type.equals("error")) {
				logger.log(Level.SEVERE, surveyId + " sent " + email);
			} else {
				logger.log(Level.INFO, surveyId + " error " + email);
			}

		} catch (Exception e) {
			e.getMessage();
		}
	}
}
