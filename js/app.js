import { navegar } from "./router.js";

const links = document.querySelectorAll("[data-rota]");

function atualizarLinkAtivo(rota) {
    links.forEach((link) => {
        const ativo = link.dataset.rota === rota;
        if (ativo) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const rota = link.dataset.rota;
        navegar(rota);
        atualizarLinkAtivo(rota);
        window.history.pushState({ rota }, "", `#${rota}`);
    });
});

window.addEventListener("popstate", () => {
    const rota = window.location.hash.replace("#", "") || "inicio";
    navegar(rota);
    atualizarLinkAtivo(rota);
});

const rotaInicial = window.location.hash.replace("#", "") || "inicio";
navegar(rotaInicial);
atualizarLinkAtivo(rotaInicial);
