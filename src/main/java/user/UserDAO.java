package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/*외부라이브러리를 추가*/
public class UserDAO { /* 데이터베이스 접근 객체의 약자, 데이터베이스에 회원정보를 불러와 넣고자할때 사용 */

	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;
	/* 정보를 담는 객체 생성 */

	/* 생성자 형성 */
	public UserDAO() {
		  try {
		   String dbURL = "jdbc:mysql://localhost:3306/BBS?serverTimezone=UTC";
		   String dbID = "root";
		   String dbPassword = "cyh1110@";
		   Class.forName("com.mysql.cj.jdbc.Driver");
		   conn = DriverManager.getConnection(dbURL, dbID, dbPassword);

		  } catch (Exception e) {
		   e.printStackTrace();
		  }
		 }

	public int login(String userID, String userPassword) {
		String SQL = "SELECT userPassword FROM USER WHERE userID=?";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, userID);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				if (rs.getString(1).equals(userPassword))
					return 1; // 로그인 성공
				else
					return 0; // 비밀번호 불일치
			}
			return -1; // 아이디가 없음

		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2; // 데이터 베이스 오류

	}
	// 하나의 계정에 대한 로그인 시도를 해주는 함수를 생성함->로그인 기능이 구현됨!
	
	public int join(User user) {
		String SQL = "INSERT INTO USER VALUES (?, ?, ?, ?, ?)";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, user.getUserID());
			pstmt.setString(2, user.getUserPassword());
			pstmt.setString(3, user.getUserConfirmPassword());
			pstmt.setString(4, user.getUserName());
			pstmt.setString(5, user.getUserEmail());
			return pstmt.executeUpdate();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		return -1;//데이터베이스 오류
	}
}
