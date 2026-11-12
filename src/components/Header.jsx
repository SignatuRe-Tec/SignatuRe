import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Tone from '../ambient/Tone.jsx';
import InteractiveWordmark from './InteractiveWordmark.jsx';

/** Header mínimo. Na landing, o brand só aparece depois do Hero (que já tem o wordmark grande). */
export default function Header({ variant = 'landing' }) {
  const [reveal, setReveal] = useState(false);
  const [open, setOpen] = useState(false);
  const openRef = useRef(open);
  openRef.current = open;
  const { pathname, hash } = useLocation();
  const landing = variant === 'landing';
  const close = () => setOpen(false);

  /* Menu mobile: fecha ao navegar e com Esc (devolve o foco ao botão). */
  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        document.getElementById('header-menu-btn')?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  /* Auto-hid
  e: some ao rolar para baixo e volta ao rolar para cima.
     Sempre visível no topo, com o menu aberto ou com foco dentro do header. */
  useEffect(() => {
    const el = document.getElementById('site-header');
    if (!el) return undefined;
    const TOP = 80; // zona do topo em que o header é sempre visível
    const DELTA = 8; // histerese: ignora micro-movimentos (sem tremor)
    let lastY = window.scrollY;
    let anchor = lastY; // onde a direção atual começou
    let hidden = false;
    let raf = 0;
    const set = (v) => {
      if (v === hidden) return;
      hidden = v;
      el.dataset.hidden = v ? 'true' : 'false';
    };
    const update = () => {
      raf = 0;
      const y = Math.max(0, window.scrollY);
      const dir = Math.sign(y - lastY);
      if (dir === 0) return;
      if (Math.sign(lastY - anchor) !== dir) anchor = lastY;
      lastY = y;
      const focused = document.activeElement !== document.body && el.contains(document.activeElement);
      if (y <= TOP || openRef.current || focused) {
        set(false);
        anchor = y;
        return;
      }
      if (Math.abs(y - anchor) < DELTA) return;
      set(dir > 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onFocusIn = () => set(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('focusin', onFocusIn);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      el.removeEventListener('focusin', onFocusIn);
    };
  }, []);

  return (
    <Tone
      as="header"
      id="site-header"
      className="header"
      data-variant={variant}
      data-menu={open ? 'open' : 'closed'}
      data-hidden="false"
    >
      <Link
        to="/"
        className="header__brand"
        aria-label="SignatuRe — início"
        onPointerEnter={(e) => e.pointerType === 'mouse' && setReveal(true)}
        onPointerLeave={() => setReveal(false)}
        onFocus={(e) => e.target.matches(':focus-visible') && setReveal(true)}
        onBlur={() => setReveal(false)}
      >
        <InteractiveWordmark as="span" size="header" revealed={reveal} />
      </Link>
      <button
        id="header-menu-btn"
        type="button"
        className="header__toggle"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls="header-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="header__bars" aria-hidden="true" />
      </button>
      <nav id="header-nav" aria-label="Principal" className="header__nav" onClick={(e) => e.target.closest('a') && close()}>
        {landing ? (
          <>
            <Link to="/#o-que-fazemos">O que fazemos</Link>
            <Link to="/#assinatura">Nosso trabalho</Link>
            <Link to="/contratar">Escolha sua presença</Link>
            <Link to="/#contato">Contato</Link>
          </>
        ) : (
          <Link to="/">Início</Link>
        )}
      </nav>
    </Tone>
  );
}
