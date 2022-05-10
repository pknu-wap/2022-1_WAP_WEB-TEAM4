<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" dir="ltr">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 반응형 웹을 위한 설정 -->
<meta name="viewport" content="width=divice-width" , initial-scale="1">
<link rel="stylesheet" href="css/style.css">

<title>JSP 게시판 웹 사이트</title>
</head>
<body>
	<div class="login-form">
		<h1>3D Calendar</h1>
		<form method="post" action="LoginAction.jsp">
			<div class="int-area">
				<input type="text" id="id" name="userID" autocomplete="off" required
					maxlength="20"><label for="id">USER ID</label>

			</div>
			<div class="int-area">
				<input type="password" id="pw" name="userPassword"
					autocomplete="off" required maxlength="20"><label for="pw">PASSWORD</label>
			</div>
			<div class="btn-area">
				<button id="btn" type="submit">LOGIN</button>
			</div>
		</form>
		<div class="caption">
			<a href="join.jsp">Join to 3D Calendar!</a>
		</div>
	</div>
	<!-- 애니메이션 동작을 위해 -->
	<script type="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script src="js/bootstrap.js"></script>
</body>
</html>


