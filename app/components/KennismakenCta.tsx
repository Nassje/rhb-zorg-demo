import { basePath } from '../lib/basePath';

export function KennismakenCta() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="page-shell cta-band-inner">
        <div>
          <p className="eyebrow light">Kennismaken</p>
          <h2 id="cta-title">Wilt u weten wat RHB Zorg kan betekenen?</h2>
          <p>
            We bespreken de situatie, de ondersteuningsvraag en welke mogelijkheden
            passend zijn — voor u, uw kind of iemand die u begeleidt.
          </p>
        </div>
        <a className="button primary" href={`${basePath}/contact`}>Neem contact op</a>
      </div>
    </section>
  );
}
