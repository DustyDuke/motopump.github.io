<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['surname'])) {$surname = $_POST['surname'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['message'])) {$mesage = $_POST['message'];}
 
 
$address = 'kotenevaelena@rambler.ru';
$sub = "Обратная связь";
$mes = "Имя: $name \nФамилия: $surname \nНомер телефона: $phone \nЕмейл: $email \nСообщение: $message";
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8 \r\nFrom:$email");
if ($verify == 'true')
{
echo "<p>Сообщение отправлено";
}
else 
{
echo "<p>Сообщение не отправлено";
}
?>
