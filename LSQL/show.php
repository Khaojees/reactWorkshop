<?php
      require('dbconnect.php');
       /*if (isset($_GET['id'])) {  
            $id=$_GET['id'];  
            $delete="DELETE FROM test WHERE id=1";  
            if ($delete) {  
                 header("location: show.php");  
                 die();  
            }  
       }*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="style.css">
</head>
<body style="display: block">
      <div class="haha">
            require('dbconnect.php');
            <table border="1" cellpadding="0">  
            <tr>  
                  <th>id</th>  
                  <th>FName</th>  
                  <th>Lname</th>  
                  <th>Age</th>   
      
            </tr> 
            <?php
                  require('dbconnect.php');

                  $sql = "SELECT id, fname, lname, age FROM test";
                  $result = $con->query($sql);
                  
                  if ($result->num_rows > 0) {
                  // output data of each row
                        
                        while($row = $result->fetch_assoc()) {
                              
                              echo "  
                                    <tr>  
                                          <td>".$row['id']."</td>  
                                          <td>".$row['fname']."</td>  
                                          <td>".$row['lname']."</td>  
                                          <td>".$row['age']."</td>  
                                          <td>  
                                          <a href='?id=".$row['id']."' class='opt'>Delete</a>   
                                          </td>  
                                    </tr>  
                              ";  
                                    
                              
                        }
                        
                  } else {
                        echo "0 results";
                  }
                  $con->close();   
            ?>
            <br>
      
      </div>
      <div>
            <a href="index.php">Back to Get data</a>
            <?php $delete="DELETE FROM test WHERE id=1"; ?>
      </div>
      
</body>
</html>