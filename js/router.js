import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

import { configurarFormulario } from "./form.js";

export function navegar(rota) {
    const app = document.getElementById("app");
    const rotas = {
        inicio: templateInicio,
        projetos: templateProjetos,
        cadastro: templateCadastro
    };

    const template = rotas[rota] || templateInicio;
    app.setAttribute("aria-busy", "true");
    app.innerHTML = template();

    if (rota === "cadastro") {
        configurarFormulario();
    }

    app.setAttribute("aria-busy", "false");
    app.focus({ preventScroll: true });
}
