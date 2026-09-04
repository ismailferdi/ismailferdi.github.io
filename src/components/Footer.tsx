import { footerGroups } from '../data/portfolio';

export default function Footer() {
  return (
    <footer id="footer" className="mt-24 bg-surface-dark-elevated">
      <div className="layout-container py-16">
        <div className="mb-12">
          <p className="text-lg font-bold text-on-dark">Ismail Ferdi</p>
          <p className="mt-2 text-sm text-on-dark">
            AI/ML engineering — production-oriented machine learning systems.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-bold text-on-dark mb-4">{group.label}</p>
              <ul className="space-y-1">
                {group.links.map((link) => {
                  const external = link.href.startsWith('http');
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="block py-2 text-sm text-on-dark underline-offset-4 transition-colors hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="bg-surface-dark-soft">
        <div className="layout-container py-6">
          <p className="text-xs text-on-dark">
            &copy; {new Date().getFullYear()} Ismail Ferdi
          </p>
        </div>
      </div>
    </footer>
  );
}
