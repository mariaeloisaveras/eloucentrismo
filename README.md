# Eloucentrismo Media Kit

Landing page em Angular para media kit do @eloucentrismo.

## Rodar localmente

```bash
npm install
npm start
```

Acesse: http://localhost:4200

## Build de produção

```bash
npm run build
```

Os arquivos finais ficam em `dist/eloucentrismo-media-kit/browser`.

## Onde trocar as fotos

No arquivo `src/app/app.component.ts`, substitua os links do array `gallery` por fotos suas.

Para fotos locais, coloque as imagens em `src/assets` e use caminhos como:

```ts
'/assets/minha-foto.jpg'
```

## Deploy rápido na Vercel

```bash
npm i -g vercel
vercel
```

Configurações:
- Framework: Angular
- Build command: `npm run build`
- Output directory: `dist/eloucentrismo-media-kit/browser`
