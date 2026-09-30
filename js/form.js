import { salvarCadastro } from "./storage.js";

export function configurarFormulario() {
    const formulario = document.getElementById("formCadastro");
    const mensagem = document.getElementById("mensagem");

    if (!formulario || !mensagem) return;

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        mensagem.className = "";
        mensagem.textContent = "";

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            mostrarErro(mensagem, "Revise os campos destacados e tente novamente.");
            return;
        }

        const dados = {
            nome: formulario.nome.value.trim(),
            email: formulario.email.value.trim(),
            cpf: formulario.cpf.value.trim(),
            telefone: formulario.telefone.value.trim(),
            endereco: formulario.endereco.value.trim(),
            cep: formulario.cep.value.trim()
        };

        try {
            salvarCadastro(dados);
            mensagem.textContent = "Cadastro realizado com sucesso! Seus dados foram armazenados neste navegador.";
            mensagem.className = "sucesso";
            formulario.reset();
        } catch (erro) {
            mostrarErro(mensagem, "Não foi possível salvar o cadastro neste navegador.");
        }
    });
}

function mostrarErro(elemento, texto) {
    elemento.textContent = texto;
    elemento.className = "erro";
}
