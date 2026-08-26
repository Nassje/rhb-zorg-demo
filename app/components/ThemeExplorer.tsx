'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect } from 'react';
import { themes } from '../lib/content';
import { BrandIcon } from './BrandIcons';

export function ThemeExplorer() {
  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace('#', '');
      if (!themes.some((item) => item.slug === slug)) return;

      for (const item of themes) {
        const el = document.getElementById(item.slug);
        if (el instanceof HTMLDetailsElement) el.open = item.slug === slug;
      }
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  return (
    <div className="theme-accordion" id="themas">
      {themes.map((theme) => (
        <details key={theme.slug} id={theme.slug} name="themas">
          <summary>
            <span className="theme-icon" aria-hidden="true">
              <BrandIcon name={theme.icon} />
            </span>
            <span className="theme-accordion-title">{theme.title}</span>
            <ChevronDown className="theme-accordion-chevron" strokeWidth={1.75} aria-hidden="true" />
          </summary>
          <div className="theme-accordion-body">
            <p>{theme.lead}</p>
            <p className="theme-accordion-label">In de praktijk</p>
            <ul>
              {theme.practice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
