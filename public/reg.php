<?php
$url = 'http://95.213.143.142:22222/?spec='.$_POST['spec'].'&city='.$_POST['city'].'&firstname='.$_POST['firstname'].'&lastname='.$_POST['lastname'].'&middlename='.$_POST['middlename'].'&email='.$_POST['email'];
http_get($url);
// $arr=$_POST;
// $csvData = "{$_POST['surname']}|{$_POST['name']}|{$_POST['surname']}|{$_POST['spec']}|{$_POST['email']}\r\n";// РІ РІРёРЅРґРµ СЌС‚Рѕ \r\n РІРјРµСЃС‚Рѕ РїСЂРѕСЃС‚Рѕ \n
// echo $csvData;
// $csvData = iconv('UTF-8', 'cp1251', $csvData);
// echo $csvData;
// file_put_contents( $csvFile, $csvData, FILE_APPEND );
?>