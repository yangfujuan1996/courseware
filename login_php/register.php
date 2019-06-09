<?php

$postData =  file_get_contents('php://input');

$dataArr = json_decode($postData);

$username = $dataArr->username;
$password = $dataArr->password;

if ( !$username || !$password ) {
  die('{"success": false,"msg": "用户名或密码为空，请重新提交！"}');
}

if ( strlen( $username ) < 6 || strlen( $password ) < 6 ) {
  die('{"success": false,"msg": "用户名或密码长度太短，请重新提交！"}');
}

$password = md5($password);

require_once 'common/conn.php';

$sql_select = "SELECT * FROM `users` WHERE `username`='{$username}'";

$sql_add = "INSERT INTO `users` (`username`,`password`) VALUES ('{$username}','{$password}')";

$mysql = new Mysql();

$checkUser = $mysql->getResultNum($sql_select) > 0;

if ( $checkUser ) {
  die('{"success": false,"msg": "用户名已经存在，请重新输入！"}');
}

$result = $mysql->sql($sql_add);

if ($result) {
  echo '{"success": true,"msg": "注册成功！"}';
} else {
  echo '{"success": false,"msg": "注册失败，请重新注册！"}';
}

$mysql->close();

?>