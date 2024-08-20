<?php
$servername = $_SERVER['SERVER_NAME'];
$username = "root";
$password = "";
$dbname = "inputwithdraw";

$data = [];
try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Выполняем запрос
    $sql = 'SELECT * FROM formul WHERE id = 1';
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $data = $stmt->fetch(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    
    // Отправляем данные в формате JSON
    echo json_encode($data);

} catch (PDOException $e) {
    echo 'Ошибка подключения: ' . $e->getMessage();
}


