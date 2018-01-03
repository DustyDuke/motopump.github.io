<?php

/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$surname = htmlspecialchars($_POST["surname"]);
$phone = htmlspecialchars($_POST["phone"]);
$email = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["message"]);


/* Ваш адрес и тема сообщения */
$address = "kotenevaelena@rambler.ru";
$sub = "заявка на тренеровку";

/* Формат письма */
$mes = "Сообщение с сайта ХХХ.\n
Имя отправителя: $name 
Фамилия: $surname
Телефон отправителя: $phone
Почта отправителя: $email
Текст сообщения:
$message";



/* Отправляем сообщение, используя mail() функцию */
$from = "Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
	header('Refresh: 5; URL=https://dustyduke.github.io/motopump.github.io/');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо отправлено, через 5 секунд вы вернетесь на страницу XXX</body>';}
else {
	header('Refresh: 5; URL=https://dustyduke.github.io/motopump.github.io/');
	echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо не отправлено, через 5 секунд вы вернетесь на страницу YYY</body>';}

?>
