<?php
// captura de variables
$nombre=$_POST['nombre'];
$email=$_POST['email'];
$tel=$_POST['tel'];
$consulta=$_POST['consulta'];

// cuerpo del mail
$mensaje="
<strong>Nombre:</strong> $nombre<br/>
<strong>email:</strong> $email<br/>
<strong>tel:</strong> $tel <br/> 
<strong>consulta:</strong> $consulta<br/>
";

// envio del mail
mail("micorreo@midominio.com",/* correo */ "Consulta Web" /* nombre del mail */, $mensaje, "From: $nombre <$email> \nReply-To:$email\nContent-Type: text/html; charset=utf-8\n") /* de qué emisor, a donde se contesta, tipo de codificacion del mensaje */;

//Redireccionamiento a pagina Web
header ("Location: http://www.misitio.com/mipagina.html");
?>