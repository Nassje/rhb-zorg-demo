import { basePath } from '../lib/basePath';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Wat wij doen', href: '/wat-wij-doen' },
  { label: 'Over RHB Zorg', href: '/over-rhb-zorg' },
  { label: 'Contact', href: '/contact' },
];

export function SiteHeader({ active }: { active: string }) {
  return (
    <header className="site-header">
      <a className="brand" href={`${basePath}/`} aria-label="RHB Zorg, naar home">
        <span className="brand-logo" aria-hidden="true">
          <img src={`${basePath}/rhb-logo-hq.png`} alt="" />
        </span>
        <span className="brand-copy">
          <strong>RHB <em>ZORG</em></strong>
          <small>Met aandacht. <span>Vooruit door verbinding.</span></small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Hoofdnavigatie">
        {navigation.map((item) => (
          <a className={active === item.href ? 'active' : ''} href={`${basePath}${item.href}`} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={`${basePath}/contact`}>Kennismaken</a>

      <details className="mobile-menu">
        <summary aria-label="Menu openen"><span /><span /><span /></summary>
        <nav aria-label="Mobiele navigatie">
          {navigation.map((item) => (
            <a className={active === item.href ? 'active' : ''} href={`${basePath}${item.href}`} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}
