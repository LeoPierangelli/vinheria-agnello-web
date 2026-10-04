'use client';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(localStorage.getItem('vinheria_isLogged') === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('vinheria_isLogged');
    setIsLogged(false);
    window.location.href = '/';
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <a href="/" className="font-headline-sm text-primary" style={{ letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Vinheria Agnello
        </a>
        <nav className={`font-label-caps ${styles.navLinks}`}>
          <a href="/">INÍCIO</a>
          <a href="/">CATÁLOGO</a>
          <a href="/">MEUS PEDIDOS</a>
          <a href="/">FALAR COM BIANCA</a>
        </nav>
        <div className={styles.headerIcons}>
          <button className="text-on-surface-variant"><span className="material-symbols-outlined">search</span></button>
          <button className="text-on-surface-variant"><span className="material-symbols-outlined">shopping_bag</span></button>
          
          {isLogged ? (
            <button onClick={handleLogout} className="text-primary font-label-caps" style={{ marginLeft: '8px' }}>
              SAIR
            </button>
          ) : (
            <a href="/login" className="text-on-surface-variant"><span className="material-symbols-outlined">person</span></a>
          )}
        </div>
      </div>
    </header>
  );
}
