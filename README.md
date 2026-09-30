# Bullmigos

Projeto web da ONG fictícia Bullmigos, desenvolvido como experiência prática de Engenharia de Software. A aplicação apresenta uma SPA em HTML5, CSS3 e JavaScript modular, com navegação dinâmica, formulário validado e armazenamento local.

## Tecnologias
- HTML5 semântico
- CSS3 responsivo
- JavaScript ES Modules
- Git e GitHub
- LocalStorage

## Estrutura
```text
Bullmigos/
├── html/
│   └── index.html
├── css/
│   └── style.css
├── imagens/
│   └── imgdaong.png
├── js/
│   ├── app.js
│   ├── form.js
│   ├── router.js
│   ├── storage.js
│   └── templates.js
├── .gitignore
└── README.md
```

## Funcionalidades
- Navegação SPA sem recarregamento da página.
- Rotas Início, Projetos e Cadastro.
- Templates separados da lógica de navegação.
- Validação nativa e personalizada do formulário.
- Armazenamento do cadastro com LocalStorage.
- Navegação por teclado e foco visível.
- Layout responsivo para diferentes tamanhos de tela.

## Acessibilidade - WCAG 2.1 AA
Foram aplicadas práticas relacionadas às diretrizes WCAG 2.1, incluindo HTML semântico, idioma da página, textos alternativos, labels associados aos campos, navegação por teclado, foco visível, mensagens de status acessíveis, contraste adequado, hierarquia de títulos e suporte a `prefers-reduced-motion`.

## Performance e produção
- Imagem com dimensões declaradas para reduzir mudanças de layout.
- `decoding="async"` na imagem.
- CSS e JavaScript organizados e sem regras duplicadas desnecessárias.
- JavaScript carregado como módulo.
- Layout responsivo com media queries.
- Código sem dependências externas.

## Execução local
Como o projeto utiliza JavaScript Modules, recomenda-se executar por um servidor local. No VS Code, pode-se utilizar o Live Server ou outro servidor HTTP local e abrir `html/index.html`.

## Versionamento
O projeto deve ser versionado com Git e publicado em um repositório GitHub. Recomenda-se utilizar commits descritivos, por exemplo:

```text
feat: criar estrutura inicial do projeto
feat: implementar navegacao da SPA
feat: adicionar validacao do formulario
feat: adicionar acessibilidade WCAG
perf: otimizar arquivos para producao
docs: adicionar documentacao do projeto
```

## Deploy
O projeto pode ser publicado no GitHub Pages, Netlify ou Vercel. Se for utilizado GitHub Pages, a página principal está em `html/index.html`.
