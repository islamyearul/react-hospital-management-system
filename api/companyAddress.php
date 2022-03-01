<?php

include('connection.php');


$sql = $conn->query("SELECT * FROM company_addresses");
$result = array();

    if($data = mysqli_fetch_assoc($sql)){
        $result[] = $data;
    }


echo json_encode($result);
mysqli_close($conn);



?>