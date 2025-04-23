# Esercizio: Deploy API con Netlify o Vercel

## Obiettivo
Prendere una logica API fornita e renderla funzionante su **Vercel** o **Netlify** a tua scelta.

## Struttura
- `app/page.tsx` → Una singola pagina React
- `api-logic/api.ts` → Contiene la logica da usare per tutte le operazioni API
- `api-logic/netlify_base.ts` → file dove creare la struttura per netlify
- `api-logic/vercel_base.ts` → file dove creare la struttura per vercel.

## Cosa fare
1. Scegli **Vercel** oppure **Netlify**
2. Crea un progetto Next.JS in locale
3. usa la logica da `api-logic/api.ts` 
4. Completa i file `netlify_base.ts` e `vercel_base.ts` (Puoi importare api.ts senza doverti ricopiare tutto il file, c'è un indizio in entrambi i file :D )
5. Crea e nomina i file nelle cartelle giuste (`netlify/functions/....` o `api/....`) nei rispettivi progetti 
6. Modifica `API_URL` nel frontend (`app/page.tsx`)
7. Fai il deploy

### API attese
- `GET`    → restituisce tutti gli items
- `POST`   → aggiunge un item
- `PUT`    → aggiorna un item
- `DELETE` → elimina un item
- `OPTIONS` → per supporto CORS

## Buon deploy! 🚀
