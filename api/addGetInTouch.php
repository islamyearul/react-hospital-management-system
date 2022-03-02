<?php
include('connection.php');
//$_POST = json_decode(file_get_contents("php://input"), true);

// $name = $_POST['name'];
// $email = $_POST['email'];
// $subject = $_POST['subject'];
// $message = $_POST['message'];

// if( $_POST === null){
//     $result = "Nothing Found Data";
// } else{
//     $sql = $conn->query("INSERT INTO public_get_in_touches VALUES ('', '$name', '$email', '$subject', '$message')");

// }

// if($sql === true){
//     $result = "New record created successfully";
// }else{
//     $result = "Error: " . $sql . "<br>" . $conn->error;
// }

echo json_encode('sff');

$conn->close();

