<?php 
      require('dbconnect.php');

      $fname=$_POST['fname'];
      $lname=$_POST['lname'];
      $age=$_POST['age'];

      $sql = "INSERT INTO test(fname,lname,age) VALUE('$fname','$lname','$age')";

      $result = mysqli_query($con,$sql);

      if($result){
            header("location: show.php");
            exit(0);
      }


?>