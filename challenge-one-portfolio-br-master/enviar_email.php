<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Capturar os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    // Destinatário do email
    $destinatario = "contato.kelvincs@gmail.com";

    // Montar o corpo do email
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Assunto: $assunto\n";
    $corpo_email .= "Mensagem:\n$mensagem\n";

    // Enviar o email
    if (mail($destinatario, $assunto, $corpo_email)) {
        http_response_code(200); // Resposta de sucesso
    } else {
        http_response_code(500); // Erro no servidor ao enviar o email
    }
} else {
    http_response_code(405); // Método não permitido
}
?>
