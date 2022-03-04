<?php
include('connection.php');

$method = $_SERVER['REQUEST_METHOD'];
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// // $query = "INSERT INTO public_get_in_touches VALUES ('', '$name', '$email', '$subject', '$message')";
//  $query = "INSERT INTO `public_get_in_touches`(`name`, `email`, `subject`, `message`) VALUES ('$name', '$email', '$subject', '$message')";
// $result;
//  if(mysqli_query($conn, $query)){
//     $result = "Data Create Success";
// } else{
//      $result = "Nothing Do";

//  }
// echo json_encode($result);


switch ($method) {
    case 'GET':
      if(isset($_GET["id"])){
        $id = $_GET['id'];  
      }     
      $sql = "select * from public_get_in_touches".($id?" where id=$id":''); 
      break;
    case 'POST':
        if(isset($_GET["id"])){
            $id = $_GET['id'];  
            $name = $_POST["name"];
            $email = $_POST["email"];
            $subject = $_POST["subject"];
            $message = $_POST["message"];
            $sql = "UPDATE public_get_in_touches SET name='$name', email='$email', subject='$subject', message='$message' WHERE id = $id"; 
        }else if(isset($_GET["delete"])){
            $delete = $_GET['delete'];  
            $sql = "DELETE FROM public_get_in_touches WHERE id = $delete"; 
        }else{  
          $name = $_POST["name"];
          $email = $_POST["email"];
          $subject = $_POST["subject"];
          $message = $_POST["message"];
          $sql = "INSERT INTO `public_get_in_touches`(`name`, `email`, `subject`, `message`) VALUES ('$name', '$email', '$subject', '$message')"; 
        }
      break;
    }

      // run SQL statement
      $result = mysqli_query($conn,$sql);
    // die if SQL statement failed
    if (!$result) {
        http_response_code(404);
        die(mysqli_error($conn));
    }

    if ($method == 'GET') {
        if (!$id) echo '[';
          for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
            echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
          }
        if (!$id) echo ']';
    } 
    elseif ($method == 'POST') {
        echo json_encode($result);
    } 
    else {
        echo mysqli_affected_rows($conn);
    }

$conn->close();

