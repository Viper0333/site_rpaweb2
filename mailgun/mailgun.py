import requests

def enviar_email(nome, email, mensagem):
    return requests.post(
        "https://api.mailgun.net/v3/seu-dominio.com/messages",
        auth=("api", "sua-chave-api-mailgun"),
        data={"from": "Seu Nome <seuemail@dominio.com>",
            "to": ["destinatario@dominio.com"],
            "subject": "Novo envio de formulário",
            "text": f"Nome: {nome}\nEmail: {email}\nMensagem: {mensagem}"})
