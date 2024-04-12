
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector('.formcontato__form');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita o envio do formulário padrão

            // Capturando os valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const assunto = document.getElementById('assunto').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação dos campos
            if (nome === '' || email === '' || assunto === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos.');
                return; // Para a execução do script se houver campos vazios
            }

            // Validar formato do email utilizando expressão regular simples
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return; // Para a execução do script se o formato do email for inválido
            }

            // Envio do formulário (simulação)
            alert('Formulário enviado com sucesso!\n\nNome: ' + nome + '\nEmail: ' + email + '\nAssunto: ' + assunto + '\nMensagem: ' + mensagem);

            // Limpar os campos do formulário após o envio (opcional)
            form.reset();
        });
    });
