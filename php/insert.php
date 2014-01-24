<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<title>Thanks DB</title>
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
<?php
$connect = mysql_connect("localhost", "thanks", "thanksthanks");
if(!$connect){
	die("Cannot connect to MySQL");
}

if(!(mysql_select_db("thanks"))){
    die("Cannot select the DB");
}

$username = $_POST["data1"];
$password = $_POST["data2"];

$queryset = "INSERT INTO thanks.user (name, pass) VALUES ('$username', '$password')";

$sendquery = mysql_query($queryset);
if(!$sendquery){
    die("Error in query");
}

mysql_close($connect);
?>
</body>
</html>
