# Premium Digital Store

Loja estática de landing pages e coleções digitais de prompts.

## Produtos e preços

O catálogo e as prévias estão em `js/script.js`. Quando os preços e links Gumroad estiverem disponíveis, preencha `price` e `checkoutUrl` no produto correspondente. O botão de compra permanece indisponível até existir um checkout configurado.

As miniaturas dos prompt packs, em `assets/prompt-covers/`, foram geradas a partir da primeira página de cada PDF. Os PDFs completos não são incluídos no site público nem no repositório, para que o material pago só seja entregue pelo checkout.

## Demos das landing pages

Abra `landing-preview.html?id=ai-startup`, `landing-preview.html?id=saas`, `landing-preview.html?id=marketing-agency`, `landing-preview.html?id=real-estate` ou `landing-preview.html?id=dental-clinic` para ver as cinco demos completas. O botão de personalização abre o WhatsApp com o link da demo selecionada.

Os botões “Comprar” ficam desativados até serem definidos os respetivos links de checkout.

O projeto não requer compilação. Na Netlify, use a raiz do repositório (`.`) como diretório de publicação.
