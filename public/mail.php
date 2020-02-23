<?php
$csvFile = 'user_data.csv';
$csvData = "{$_POST['surname']}|{$_POST['name']}|{$_POST['surname']}|{$_POST['spec']}|{$_POST['email']}\r\n";// в винде это \r\n вместо просто \n
echo $csvData;
$csvData = iconv('UTF-8', 'cp1251', $csvData);
echo $csvData;
file_put_contents( $csvFile, $csvData, FILE_APPEND );
?>