const caminhoImagem = "../imagens/imgdaong.png";

export function templateInicio() {
    return `
        <section class="destaque" aria-labelledby="titulo-inicio">
            <h2 id="titulo-inicio">Bem-vindo à Bullmigos</h2>
            <p id="chamada">Amor que quebra preconceitos.</p>
            <img
                src="${caminhoImagem}"
                alt="Cachorro da ONG Bullmigos"
                width="500"
                height="333"
                loading="eager"
                decoding="async"
            >
            <p>
                Nossa missão é promover o bem-estar, a proteção e a conscientização
                sobre os cães da raça Pit Bull.
            </p>
            <a href="#projetos" data-rota="projetos" class="botao">
                Conheça nosso projeto
            </a>
        </section>
    `;
}

export function templateProjetos() {
    return `
        <section aria-labelledby="titulo-projetos">
            <h2 id="titulo-projetos">Conheça nosso projeto</h2>
            <p>
                A Bullmigos desenvolve ações voltadas à proteção, ao cuidado e à
                conscientização sobre os animais.
            </p>
            <h3>Nossos objetivos</h3>
            <ul class="lista-doacoes">
                <li>
                    <strong>Adoção responsável</strong>
                    <p>Incentivar a adoção responsável e encontrar lares para os animais.</p>
                </li>
                <li>
                    <strong>Combate ao abandono</strong>
                    <p>Promover ações de conscientização contra o abandono de animais.</p>
                </li>
                <li>
                    <strong>Conscientização</strong>
                    <p>Combater preconceitos e divulgar informações sobre a raça Pit Bull.</p>
                </li>
                <li>
                    <strong>Cuidados</strong>
                    <p>Oferecer cuidados e suporte aos animais que precisam de ajuda.</p>
                </li>
            </ul>
            <a href="#cadastro" data-rota="cadastro" class="botao">Quero participar</a>
        </section>
    `;
}

export function templateCadastro() {
    return `
        <section aria-labelledby="titulo-cadastro">
            <h2 id="titulo-cadastro">Cadastro</h2>
            <p>Cadastre seus dados para participar das ações da Bullmigos.</p>

            <form id="formCadastro" novalidate>
                <fieldset>
                    <legend>Dados para cadastro</legend>

                    <label for="nome">Nome completo</label>
                    <input type="text" id="nome" name="nome" autocomplete="name" required minlength="3" placeholder="Digite seu nome completo">

                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email" autocomplete="email" required placeholder="exemplo@email.com">

                    <label for="cpf">CPF</label>
                    <input type="text" id="cpf" name="cpf" inputmode="numeric" autocomplete="off" pattern="[0-9]{11}" maxlength="11" required placeholder="Somente números" aria-describedby="cpf-ajuda">
                    <small id="cpf-ajuda">Digite 11 números, sem pontos ou traços.</small>

                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" inputmode="tel" autocomplete="tel" pattern="[0-9]{10,11}" maxlength="11" required placeholder="Somente números">

                    <label for="endereco">Endereço</label>
                    <input type="text" id="endereco" name="endereco" autocomplete="street-address" required placeholder="Rua, número e complemento">

                    <label for="cep">CEP</label>
                    <input type="text" id="cep" name="cep" inputmode="numeric" autocomplete="postal-code" pattern="[0-9]{8}" maxlength="8" required placeholder="Somente números">

                    <button type="submit">Cadastrar</button>
                </fieldset>
            </form>

            <div id="mensagem" role="status" aria-live="polite" aria-atomic="true"></div>
        </section>
    `;
}
