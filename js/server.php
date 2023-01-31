<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';


    $mail = new PHPMailer(true);
    $mail->charset = 'UTF-8";
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);  




    $mail->addAddress('maritsydik@gmail.com'); 
    $mail->Subject = 'Запись на консультацию;

    $body = '<h1>Запись</h1>';

    if(trim(!empty($_POST['name']))){
        $body .='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['from']))){
        $body .='<p><strong>Откуда вы:</strong> '.$_POST['from'].'</p>';
    }
    if(trim(!empty($_POST['contacts']))){
        $body .='<p><strong>Контакты:</strong> '.$_POST['contacts'].'</p>';
    }
    if(trim(!empty($_POST['user_profile']))){
        $body .='<p><strong>Время:</strong> '.$_POST['user_profile'].'</p>';
    }
    if(trim(!empty($_POST['request']))){
        $body .='<p><strong>Запрос:</strong> '.$_POST['request'].'</p>';
    }

    $mail->Body = $body;
  











