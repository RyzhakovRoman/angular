<?php

$json = file_get_contents('php://input');
$update = json_decode($json, true);

if (isset($json)) {
    echo $json;
} else {
    echo 'форма отправленна';
}