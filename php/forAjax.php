<?php

$json = file_get_contents('php://input');
$update = json_decode($json, true);

//$str = isset($_POST['bid']);

echo $json;
//
//echo $_POST;