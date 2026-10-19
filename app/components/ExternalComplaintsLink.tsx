import { externalComplaintsUrl } from '../lib/complaints';

export function ExternalComplaintsLink({ id = 'external-complaints-status' }: { id?: string }) {
  return (
    <div className="external-complaints">
      {externalComplaintsUrl ? (
        <a className="button secondary" href={externalComplaintsUrl}>
          Externe klachtenvoorziening <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <>
          <button className="button secondary" type="button" disabled aria-describedby={id}>
            Externe klachtenvoorziening
          </button>
          <p className="availability-note" id={id}>
            De link komt beschikbaar zodra de aansluiting definitief is.
          </p>
        </>
      )}
    </div>
  );
}
