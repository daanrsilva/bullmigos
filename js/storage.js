const CHAVE_CADASTRO = "cadastroBullmigos";

export function salvarCadastro(dados) {
    localStorage.setItem(CHAVE_CADASTRO, JSON.stringify(dados));
}

export function obterCadastro() {
    const dados = localStorage.getItem(CHAVE_CADASTRO);

    if (!dados) return null;

    try {
        return JSON.parse(dados);
    } catch {
        return null;
    }
}
