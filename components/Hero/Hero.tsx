'use client';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(localStorage.getItem('vinheria_isLogged') === 'true');
  }, []);

  return (
    <section className={styles.hero} id="home-hero">
      <div className={styles.heroBg}>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfhMiE1SldxeNm74fo0EGpaDUhtrde6xKiqu3zw68NWlm57sfv4YmeFjkvKHIjHR81sk1umQTP6l73DhA7wfzV-Aik7MPxoT272eRf-H7nLUfCLkw9eLqmRx7iVms-Jle-KgdN34nOMZFNWjH5eZscc3EPYi3HjJciSw2emS9vjuE9kVTMdgGYgFTrtfHE7fnYgyFJd6ElYaEVxuTHojMPkE3WaY-rksnjFsi6SiRo29BwZNf6x80tpA" alt="Adega de vinhos em tons quentes" />
        <div className={styles.heroGradient}></div>
      </div>
      
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroImage}>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP7KhRYzXd9JAXewYMDhSN6TKq0t6Agah-n9egVvExeREkQeUTzSOgi4xnl0PmFWghyK_JcJasZxPoZdSwDYNsbgbqw9AiOqFr0jXVWBejWimjVKmRUVCaQnaMilSvYUnukqAfr75eatECiqnaTh-mZzIOoXXzKiO5cnCsiC3oBJu0bb3PZtnoXBXjiU_EFkuN_dr2ziCg4Oo0VAPAtk8MK1LsaMAbqMzxWrnF8ow7G_nOZ0LLV-vcEg" alt="Sommelier Bianca Agnello" />
        </div>
        <div className={styles.heroText}>
          {isLogged ? (
            <>
              <h1 className="font-display-lg text-primary" style={{ maxWidth: '600px' }}>Sua adega particular aguarda.</h1>
              <p className="font-body-lg text-on-surface-variant">Confira as novas recomendações da Bianca para o seu paladar.</p>
              <button id="btn-hero-logged" className="btn-outline font-button-text">VER RECOMENDAÇÕES</button>
            </>
          ) : (
            <>
              <h1 className="font-display-lg text-primary" style={{ maxWidth: '600px' }}>A tradição de uma família, o sabor de uma paixão.</h1>
              <p className="font-body-lg text-on-surface-variant">Junte-se à nossa confraria exclusiva.</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="/signup" id="btn-hero-signup" className="btn-primary font-button-text">CRIAR CONTA</a>
                <button id="btn-hero-schedule" className="btn-outline font-button-text">AGENDAR CONSULTA</button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
