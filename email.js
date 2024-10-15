class formSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action"); // Corrigido: getAttribute
        }
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    handleSubmit(event) {
        event.preventDefault(); // Impede o envio do formulário e o recarregamento da página
        // Aqui, você pode adicionar lógica para validar o envio do formulário
        this.displaySuccess();  // Exibe a mensagem de sucesso ao enviar
    }

    init() {
        if (this.form) {
            this.formButton.addEventListener("click", (event) => this.handleSubmit(event)); // Corrigido: addEventListener
        }
        return this;
    }
}

// Instância da classe
const formHandler = new formSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});

formHandler.init();
