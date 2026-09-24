# Reboow Group — www.reboow.nl

Zustersite van `../demachinedokters-site` (www.demachinedokters.nl), zelfde stack en opzet (kopie met andere content). Statische Astro-site met eigen CMS, gehost op GitHub Pages, DNS bij Cloudflare (registrar: one.com; nameservers op 17-09-2026 van Wix naar Cloudflare verhuisd — mail draait op Microsoft 365, ongewijzigd).

**Voor de volledige uitleg, begin hier:**
- [HANDLEIDING.md](HANDLEIDING.md) — livegang-stappen, CMS-gebruik, dagelijks beheer
- [DNS-BACKUP.md](DNS-BACKUP.md) — alle DNS-records (oud + nieuw + later toegevoegde DKIM/DMARC), met uitleg per record

## Stack
- Astro 7, content in `src/content/*` (Zod-schema's in `src/content.config.ts`)
- Sveltia CMS op `/admin/`, zelf gehost (`public/admin/sveltia-cms.js`, bijwerken met `npm run cms:update`)
- Deploy: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`), repo `mdb668/reboow-site` (publiek — GitHub Pages op privé-repo vereist Pro)
- Formulieren: FormSubmit.co (contact/sollicitatie)
- `scripts/postbuild.mjs` maakt na elke build alle interne URL's consistent **mét afsluitende slash** (canonical, links, JSON-LD, llms.txt) — GitHub Pages serveert mappen zo, dit voorkomt onnodige 301's. Niet verwijderen.

## Belangrijke eigenaardigheden
- Componenten (Header, Footer, ContactForm, Mail, enz.) zijn **niet gedeeld** met demachinedokters-site — een wijziging moet in beide repo's apart doorgevoerd worden.
- E-mailadres staat *niet* als platte tekst in de HTML (`src/components/Mail.astro` bouwt het in de browser op) — tegen recruitment-harvesters. Optioneel CMS-veld `formEndpoint` (Instellingen) voor de hashed FormSubmit-code, verbergt het adres ook uit formulier-URL's.
- Geen blog, geen downloadpagina, geen NEN-pagina (had de oude reboow.nl ook niet).
- Oude Wix-URL's blijven werken via doorverwijzingen (`src/components/Redirect.astro`): `/home`, `/behandelplan`, `/blank` (→ `/contactgegevens`).
- Adres: Looiersweg **3B** (niet 3C3, dat stond er even fout in), 5131 BE Alphen.

## Merkstrategie (sinds 21-09-2026)
De gebruiker faseert de naam "Reboow" uit ten gunste van De Machinedokters. Deze site blijft voorlopig online zoals hij is; op termijn komt hier een doorverwijzing naar demachinedokters.nl per pagina. Nog niet uitgevoerd — pas doen als de gebruiker daarom vraagt.

## Development
```
npm install
npm run dev        # http://localhost:4322 (of 4321 als los gestart), CMS lokaal: /admin/ → "Work with Local Repository"
npm run build       # bouwt naar dist/ (inclusief postbuild-stap)
```

## Documentatie Astro
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Routing](https://docs.astro.build/en/guides/routing/)
