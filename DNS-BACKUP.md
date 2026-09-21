# DNS-back-up reboow.nl – stand vóór livegang, 17-09-2026

Registrar: one.com. DNS: sinds 17-09-2026 Cloudflare (gabe.ns.cloudflare.com / nucum.ns.cloudflare.com); daarvoor Wix (ns6/ns7.wixdns.net).

## Site-records die vervangen zijn (oude Wix-koppeling)

| Type | Naam | Inhoud |
|---|---|---|
| A | reboow.nl | 185.230.63.107 |
| A | reboow.nl | 185.230.63.171 |
| A | reboow.nl | 185.230.63.186 |
| CNAME | www | cdn3.wixdns.net |

Terugdraaien naar Wix = deze vier records terugzetten en de GitHub-records verwijderen. Werkt alleen zolang het Wix-abonnement loopt.

## Nieuwe site-records (GitHub Pages)

| Type | Naam | Inhoud | Proxy |
|---|---|---|---|
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| CNAME | www | mdb668.github.io | DNS only |

## Records die ongewijzigd blijven (mail en verificatie)

- MX @ → reboow-nl.mail.protection.outlook.com (0) → Microsoft 365
- TXT @: v=spf1 include:spf.protection.outlook.com include:_spf.linfosysmail.nl include:_spf.mijnwefact.nl -all
- TXT @: MS=ms26746983
- TXT @: mscid=M6cVqK5JdLkcuzt0NqogRLTHLf5D4eD8s7JCuD1ut7flU8xmAL5fthFHUwdYeMadyTKN5fU2aDBRXtPEsbbWgg==
- TXT @: google-site-verification=Gb5uE0ijdhYFyF7m0EbVZFPVYJddk_fHjJIw3HfS_Yg

Aanbeveling voor later: DKIM (selector1/selector2) en DMARC voor Microsoft 365 toevoegen; die ontbraken ook al bij Wix.

## Aanvulling 21-09-2026: door de Cloudflare-scan gemiste records (uit de Wix-zone gehaald)

- TXT `wf7565._domainkey` → DKIM-sleutel van WeFact (facturatiemail vanaf @reboow.nl):
  `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjU1573UQ7s0TcuIQUIM14+BK3V2k9Xd2sYH6G/KsiYItZqSuXCpMgnSNbCR9FuvlLnjO1erpo7paUrUUAhh0HNK4ebOmV7nq0SVtmLXc03aEKGE42Sc3nxTsNmgJvYuNI8mloLkeRhPa18bskXJ36UCl1VbFpjcnIueQ45w1MewIDAQAB`
- Nieuw toegevoegd: TXT `_dmarc` → `v=DMARC1; p=none; rua=mailto:info@reboow.nl; fo=1`
- Gecontroleerd en niet aanwezig in de Wix-zone: selector1/selector2._domainkey (Microsoft DKIM), autodiscover, linfosys-DKIM.

## Aanvulling 21-09-2026: DKIM Microsoft 365 (nieuw)

- CNAME `selector1._domainkey` → `selector1-reboow-nl._domainkey.Reboow.onmicrosoft.com`
- CNAME `selector2._domainkey` → `selector2-reboow-nl._domainkey.Reboow.onmicrosoft.com`
- Daarna in security.microsoft.com → DKIM → reboow.nl de handtekeningen inschakelen.
