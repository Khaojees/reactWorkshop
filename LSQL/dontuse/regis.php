<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
</head>
<body>
      <form action="save2.php" method="POST">
            <label for="sex">Gender</label>
            <select name="sex">
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
            </select><br><br>
            <label for="fname">First Name</label>
                  <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">Last Name</label>
                  <input type="text" id="lname" name="lname"><br><br>
            <label for="birthday">Date of birth</label>
                  <input type="date" name="birthday"><br><br>
            <label for="username">Username : </label>
                  <input type="text" name="username">
            <label for="password">Password</label>
                  <input type="password" name="pwd"><br><br>
                  <input type="submit" value="Save">
      </form>
</body>
</html>