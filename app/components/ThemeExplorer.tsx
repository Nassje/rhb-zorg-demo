'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { themes } from '../lib/content';
import { BrandIcon } from './BrandIcons';

export function ThemeExplorer() {
  const [openSlug, setOpenSlug] = useState<(typeof themes)[number]['slug'] | null>(null);

  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace('#', '');
      const theme = themes.find((item) => item.slug === slug);
      if (theme) setOpenSlug(theme.slug);
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  return (
    <div className="theme-accordion" id="themas">
      {themes.map((theme) => {
        const isOpen = openSlug === theme.slug;
        const panelId = `${theme.slug}-panel`;

        return (
          <div className={`theme-accordion-item ${isOpen ? 'is-open' : ''}`} key={theme.slug} id={theme.slug}>
            <button
              className="theme-accordion-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenSlug((current) => current === theme.slug ? null : theme.slug)}
            >
              <span className="theme-icon" aria-hidden="true">
                <BrandIcon name={theme.icon} />
              </span>
              <span className="theme-accordion-title">{theme.title}</span>
              <ChevronDown className="theme-accordion-chevron" strokeWidth={1.75} aria-hidden="true" />
            </button>
            <div className="theme-accordion-panel" id={panelId} aria-hidden={!isOpen}>
              <div className="theme-accordion-panel-inner">
                <div className="theme-accordion-body">
                  <p>{theme.lead}</p>
                  <p className="theme-accordion-label">In de praktijk</p>
                  <ul>
                    {theme.practice.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
