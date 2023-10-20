<?php
      $severname = "localhost";
      $username = "root";
      $password = "";
      $dbname = "mydata";

      $con = mysqli_connect($severname,$username,$password,$dbname);

      if(!$con){
            die("Connection failed");
      }
      /*else{
            echo "Connected Successfully";
      }*/

?>