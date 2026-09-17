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
