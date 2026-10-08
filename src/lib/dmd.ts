/** Overeenkomende pagina op www.demachinedokters.nl voor elke reboow-URL.
 *  Reboow wordt uitgefaseerd; dit wordt later ook de basis voor de doorverwijzingen. */
const DMD = 'https://www.demachinedokters.nl';
const map: Record<string, string> = {
  '/diensten/robotisering-automatisering/': '/diensten/robotisering/',
  '/diensten/systeem-integratie/': '/diensten/software-integratie/',
  '/case-automotive/': '/case-toeleverancier-unilever/',
  '/case-wvs/': '/cases/',
  '/blank/': '/contactgegevens/',
  '/behandelplan/': '/cases/',
  '/home/': '/',
};
const same = new Set([
  '/', '/diensten/', '/diensten/retrofit/', '/diensten/speciaalmachines/', '/cases/', '/contact/', '/contactgegevens/',
  '/over-ons/', '/werken-bij/', '/veelgestelde-vragen/', '/service-onderhoud/', '/algemene-voorwaarden/',
  '/privacyverklaring/', '/cookiebeleid/', '/solliciteer-technisch-engineer/',
]);

export function dmdUrl(pathname: string): string {
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (map[p]) return DMD + map[p];
  if (same.has(p) || /^\/case-[a-z0-9-]+\/$/.test(p)) return DMD + p;
  return DMD + '/';
}
