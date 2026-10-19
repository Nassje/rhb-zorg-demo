'use client';

import { useEffect, useRef, useState } from 'react';

type SectionLink = { id: string; title: string };

export function SectionIndex({
  items,
  title = 'Op deze pagina',
  label = 'Inhoudsopgave',
}: {
  items: SectionLink[];
  title?: string;
  label?: string;
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = items.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [{ id, element }] : [];
    });
    if (!sections.length) return;

    const header = document.querySelector<HTMLElement>('.site-header');
    let frame = 0;

    function updateActiveSection() {
      frame = 0;
      const headerBottom = header && getComputedStyle(header).position === 'fixed'
        ? header.getBoundingClientRect().bottom
        : 0;
      const readingLine = headerBottom + 32;
      let current = sections[0].id;

      for (const section of sections) {
        if (section.element.getBoundingClientRect().top > readingLine) break;
        current = section.id;
      }

      // A short final section may never reach the reading line above the footer.
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }
      setActiveId((previous) => previous === current ? previous : current);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(document.body);
    if (header) resizeObserver.observe(header);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
    };
  }, [items]);

  useEffect(() => {
    const nav = navigation.current;
    const link = nav?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!nav || !link) return;

    // Scroll only the index, keeping the reader's page position undisturbed.
    const navBounds = nav.getBoundingClientRect();
    if (!navBounds.height) return;
    const linkBounds = link.getBoundingClientRect();
    if (linkBounds.top < navBounds.top + 6) {
      nav.scrollTop -= navBounds.top + 6 - linkBounds.top;
    } else if (linkBounds.bottom > navBounds.bottom - 6) {
      nav.scrollTop += linkBounds.bottom - navBounds.bottom + 6;
    }
  }, [activeId]);

  return (
    <aside className="policy-index">
      <details open>
        <summary>{title}</summary>
        <nav ref={navigation} aria-label={label}>
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>
              {item.title}
            </a>
          ))}
        </nav>
      </details>
    </aside>
  );
}
