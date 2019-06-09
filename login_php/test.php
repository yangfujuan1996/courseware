<?php 

require_once 'common/conn.php';

$sql = "SELECT * FROM `users`";

$mysql = new Mysql();

$res = $mysql->sql($sql);

$rows = mysqli_fetch_all($res,MYSQLI_ASSOC);

echo json_encode($rows);

$mysql->close();

?>