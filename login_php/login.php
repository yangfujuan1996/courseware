<?php

$postData =  file_get_contents('php://input');

$userData = json_decode($postData);
$username = $userData->username;
$password = $userData->password;

if (!$username||!$password) {
  exit('{"success": false,"msg": "用户名或密码为空，请重新提交！"}');
}

$password = md5($password);

// echo $password;

require_once 'common/conn.php';

$sql = "SELECT `username` FROM `users` WHERE `username`='{$username}' and `password`='{$password}'";

$mysql = new Mysql();

$res = $mysql->sql($sql);

$rows = mysqli_fetch_all($res,MYSQLI_ASSOC);

// var_dump($rows);
if ($rows) {
  echo '{"success": true,"msg": "登录成功！", "username":"' . $rows[0]['username'] . '"}';
} else {
  echo '{"success": false,"msg": "登录失败！"}';
}

$mysql->close();

?>