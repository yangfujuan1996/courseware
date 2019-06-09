<?php
class Mysql {
  
  // 基本参数配置
  private static $host = "localhost";
  private static $user = "root";
  private static $password = "123456";
  private static $dbName = "HKXY"; //数据库名
  private static $charset = "utf8"; //字符编码
//      private static $port="3306"; //端口号
  private $conn = null;

  function __construct(){
    // 连接数据库       参数依次为： 主机地址，用户名，密码，数据库名称，数据库连接端口（默认端口，此处省略了）
    $this->conn=new mysqli(self::$host,self::$user,self::$password,self::$dbName);
    if(!$this->conn){
      die("数据库连接失败！".$this->conn->connect_error);
    }
    // 设置字符编码
    $this->conn->query("set names ".self::$charset);
  }
  //执行sql语句
  function sql($sql){
    $res=$this->conn->query($sql);
    if(!$res){
      echo "数据操作失败";
    }else{
      if($this->conn->affected_rows>0){
        return $res;
      }else{
        return 0;
      }
    }
  }
  //返回受影响数据行数
  function getResultNum($sql){
    $res=$this->conn->query($sql);
    return mysqli_num_rows($res);
  }
  //关闭数据库
  public function close(){
    @mysqli_close($this->conn);
  }
}
?>