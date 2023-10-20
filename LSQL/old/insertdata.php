<?php
      require('dbconnect.php');
      $emp_title=$_POST['emp_title'];
      $emp_name=$_POST['emp_name'];
      $emp_surname=$_POST['emp_surname'];
      $emp_birthday=$_POST['emp_birthday'];

      $sql="INSERT INTO employee(emp_title,emp_name,emp_surname,emp_birthday) 
                  VALUE('$emp_title','$emp_name','$emp_surname','$emp_birthday')";

      $result=mysqli_query($con,$sql);

      if($result){
            header("location: index.php");
            exit(0);
      }else{
            echo mysqli_error($con);
      }
?>