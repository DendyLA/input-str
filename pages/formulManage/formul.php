<?php
$servername = $_SERVER['SERVER_NAME'];
$username = "root";
$password = "";
$dbname = "inputwithdraw";

try {
    // Создаем соединение
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    // Проверка соединения

    // Обработка формы
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $a = $_POST['0001'] ?? 0;
        $b = $_POST['0002'] ?? 0;
        $c = $_POST['0003'] ?? 0;
        $d = $_POST['0004'] ?? 0;
        $e = $_POST['0005'] ?? 0;
        $f = $_POST['0006'] ?? 0;
        $g = $_POST['0007'] ?? 0;
        $h = $_POST['0008'] ?? 0;

        $sql = "REPLACE INTO formul (id, a, b, c, d, e, f, g, h) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?);";

        $stmt = $conn->prepare($sql);
        $stmt->execute([$a, $b, $c, $d, $e, $f, $g, $h]);
    }
}catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/css/intlTelInput.css">
    <link rel="stylesheet" href="style.css">
    <title>Formul</title>
</head>
<body>
    <div class="container">
        <div class="title">Формула:</div>
        <div class="title formul">{0001}х{API:/{0002}}х{0003}х{0004}х{0005}-({0006}-{0007})х{API:USD/{0008}}</div>
        <div class="title">Ввести данные</div>
        <form method='post'>
            <div class="form-group">
                <label for="exampleInputEmail1">0001</label>
                <input  class="form-control"  aria-describedby="emailHelp" name="0001">
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">0002</label>
                <input  class="form-control"  name="0002">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">0003</label>
                <input  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="0003">

            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">0004</label>
                <input  class="form-control" name="0004">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">0005</label>
                <input  class="form-control"  aria-describedby="emailHelp" name="0005">

            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">0006</label>
                <input  class="form-control" name="0006">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">0007</label>
                <input class="form-control"  aria-describedby="emailHelp" name="0007">
            
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">0008</label>
                <input  class="form-control" name="0008">
            </div>

            <button type="submit" class="btn btn-primary">Применить</button>
        </form>
    </div>
    <div id="data" 
        data-a="<?php echo $a; ?>" 
        data-b="<?php echo $b; ?>" 
        data-c="<?php echo $c; ?>" 
        data-d="<?php echo $d; ?>" 
        data-e="<?php echo $e; ?>"
        data-f="<?php echo $f; ?>"
        data-g="<?php echo $g; ?>"
        data-h="<?php echo $h; ?>">
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>