# Canto Nordestino

Site estático demonstrativo para uma marca gastronômica nordestina na Avenida Paulista.

## Executar

Abra `index.html` com Live Server no VS Code ou rode `npx serve .` na pasta do projeto. O cardápio e a agenda usam `fetch`, então devem ser executados via servidor HTTP, não por `file://`.

## Estrutura

- Páginas HTML na raiz: início, história, cardápio, reservas, eventos, corporativo, galeria, contato e privacidade.
- `assets/css/style.css`: tokens visuais e componentes responsivos.
- `assets/js/main.js`: shell compartilhado, cardápio, agenda, formulários e galeria.
- `assets/js/reservas.js`: regras do fluxo demonstrativo de reserva.
- `assets/data/`: JSON editável de produtos e eventos.
- `assets/img/marca/`: logomarca e favicon vetoriais.

## Editar conteúdo

Edite `assets/data/cardapio.json` para produtos, preços ilustrativos, categorias e imagens. Edite `assets/data/eventos.json` para a agenda. Para trocar cores, altere as variáveis no topo de `assets/css/style.css`. Substitua os URLs remotos por arquivos locais em `assets/img/` quando as imagens oficiais forem fornecidas.

## Limitações da demonstração

Não há backend, pagamentos, agenda real, WhatsApp/Instagram oficiais, autenticação ou envio de formulários. A reserva valida capacidade localmente e exibe um resumo sem confirmar disponibilidade. Textos, preços, horários, endereço e depoimentos são demonstrativos.

## Produção

Configurar backend, banco de dados, serviço de mensagens, proteção anti-spam, LGPD, domínio, HTTPS, URLs oficiais, imagens licenciadas e revisão jurídica. Depois, incluir testes de integração e rodar Lighthouse em ambiente publicado.
