<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];

// Формирование самого письма
$title = "Заявка на подписку";
$body = "
<h2>Новый подписчик</h2>
<b>Почта:</b> $email<br><br>
";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth = false;
  $mail->SMTPAutoTLS = false;
  // $mail->SMTPDebug = 2;
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
  };

  // Настройки вашей почты
  $mail->Host       = 'mail.roman-baukin.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'admin@roman-baukin.ru'; // Логин на почте
  $mail->Password   = 'gggHHH70970588GGGhhh'; // Пароль на почте
  $mail->Port       = 25;
  $mail->setFrom('admin@roman-baukin.ru', 'admin@roman-baukin.ru'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('rbaukin@mail.ru');


  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {
    $result = "success";
  } else {
    $result = "error";
  }
} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankssubscr.html');



// Отображение багов
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
