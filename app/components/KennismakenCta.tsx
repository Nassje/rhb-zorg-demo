import { basePath } from '../lib/basePath';

export function KennismakenCta() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="page-shell cta-band-inner">
        <div>
          <p className="eyebrow light">Kennismaken.</p>
          <h2 id="cta-title">Wilt u weten wat RHB Zorg voor u kan betekenen?</h2>
          <p>
            We bespreken uw ondersteuningsvraag en bekijken samen of onze ambulante
            begeleiding aansluit bij uw persoonlijke situatie.
          </p>
        </div>
        <a className="button primary" href={`${basePath}/contact`}>Neem contact op</a>
      </div>
    </section>
  );
}
