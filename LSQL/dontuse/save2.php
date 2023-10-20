<?php 
      if($_POST){
            $name=$_POST['fname'];
            $surname=$_POST['lname'];
            $birth=$_POST['birthday'];
            $gender=$_POST['sex'];
            $username=$_POST['username'];
            $password=$_POST['pwd'];
            echo "Helo $name $surname <br> Date of birth : $birth <br> Gender : $gender <br> Username : $username <br> Password : $password";
      }

?>