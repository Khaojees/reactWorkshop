<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Insert Form</title>
</head>
<body>
      <h2>Enter Data</h2>
      <form action="insertdata.php" method="POST">
            <label for="emp_title">haha : </label>
            <select name="emp_title">
                  <option value="Mr.">Mr</option>
                  <option value="Mrs.">Mrs</option>
            </select><br>
            <label for="emp_name">Name : </label>
                  <input type="text" name="emp_name"><br>
            <label for="emp_surname">Surname : </label>
                  <input type="text" name="emp_surname"><br>
            <label for="emp_birth">Birth of date</label>
                  <input type="date" name="emp_birthday"><br>
            <input type="submit" value="Save"><br>
      </form>
</body>
</html>