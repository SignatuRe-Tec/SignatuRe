import Tone from '../ambient/Tone.jsx';

const PORTFOLIO_URL = 'https://reginacupa.website';

/** Chamada editorial → PORTFOLIO pessoal. Entra logo após o CASE 01. */
export default function Beyond() {
  return (
    <div className="beyond" aria-labelledby="beyond-title">
      <Tone reveal className="case__index beyond__eyebrow">
        Além da SignatuRe
      </Tone>
      <Tone as="h3" id="beyond-title" reveal className="case__title beyond__title">
        Por trás de cada projeto, existe um olhar.
      </Tone>
      <Tone reveal className="beyond__body">
        <p className="beyond__text">
          Conheça os trabalhos autorais da profissional por trás da SignatuRe. Uma trajetória que
          une design, desenvolvimento e identidade própria.
        </p>
        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="beyond__link"
        >
          <span className="beyond__link-t">Explorar portfolio ↗</span>
          <span className="beyond__rule" aria-hidden="true" />
        </a>
      </Tone>
    </div>
  );
}

