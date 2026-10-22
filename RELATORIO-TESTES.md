# Relatório de testes

| ID | Funcionalidade | Cenário | Resultado esperado | Resultado observado | Status |
|---|---|---|---|---|---|
| MAN-01 | Navegação | Abrir as páginas HTML | Todas carregam | Estrutura criada; validação de navegador depende de execução local | NÃO EXECUTADO |
| MAN-02 | Cardápio | Carregar JSON via servidor | Produtos e filtros aparecem | Implementado em `main.js` | NÃO EXECUTADO |
| MAN-03 | Reserva | Data passada/capacidade inválida | Solicitação rejeitada | Regras implementadas em `reservas.js` | NÃO EXECUTADO |
| MAN-04 | Formulários | E-mail inválido/campo vazio | Feedback acessível e sem envio | Validação HTML + mensagem demonstrativa implementada | NÃO EXECUTADO |
| MAN-05 | Galeria | Abrir/fechar lightbox | Imagem amplia e ESC fecha | Implementado em `main.js` | NÃO EXECUTADO |

Não foi possível afirmar aprovação sem executar um navegador e Lighthouse nesta sessão.
