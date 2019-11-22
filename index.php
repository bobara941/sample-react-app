<?php
header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Headers: X-PINGOTHER, Content-Type, Authorization, Content-Length, X-Requested-With');  
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');

$json = file_get_contents('php://input');
$data = json_decode($json, 1);
//baza maza
try {
    $dbhost = 'localhost';
    $dbname = 'legitttt';
    $dbuser = 'root';
    $dbpass = '';
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
}
catch (PDOException $e) {
    echo "Error!: " .$e->getMessage() . "<br />";
    die();
}
$check = false;
if (isset($data['firstName']) && isset($data['surName']) && isset($data['email']) && isset($data['phone']) && isset($data['gender']) && isset($data['birthDay']['day']) && isset($data['birthDay']['month']) && isset($data['birthDay']['year']) && isset($data['comment'])) {
    $first_name = $data['firstName'];
    $last_name = $data['surName'];
    $email = $data['email'];
    $phone = $data['phone'];
    $gender = $data['gender'];
    $comments = $data['comment'];
    $check = true;
}
$return = [
    'success'=>false,
];
if($check){

    $date = $data['birthDay']['day'] .'.'.$data['birthDay']['month'].'.'.$data['birthDay']['year'];

    $sth = $dbh->prepare('INSERT INTO users (first_name, last_name, email, phone, gender, date, comments) VALUES (?, ?, ?, ?, ?, ?, ?)');
    $sth->execute([$first_name, $last_name, $email, $phone, $gender, $date, $comments]);
    $return = [
        'success'=>true,
        'data' => $data
    ];
    
}
header('Content-Type: application/json');
echo json_encode($return);