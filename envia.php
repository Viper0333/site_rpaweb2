<?php

    $nome = addcslashes($_POST['NumeroA']);
    $email = addcslashes($_POST['NumeroB']);

    $para = "alexlexandre727gmail.com";
    $assunto = "Validação com JavaScript";

    $corpo = "NumeroA: ".$NumeroA."\n"."NumeroB: ".$NumeroB."\n"

    $cabeca = "From: alex.alexandre@mdgeo.com.br"."\n"."Reply-to: "$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email");
    }
?>

<diretoriopasta>c:pastax/imagens/foto/principal</diretoriopasta>