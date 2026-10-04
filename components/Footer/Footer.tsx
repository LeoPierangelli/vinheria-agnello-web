import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <h3 className="font-headline-sm text-primary" style={{ textTransform: 'uppercase', marginBottom: '16px' }}>Vinheria Agnello</h3>
            <p className="font-body-md text-on-surface-variant" style={{ fontWeight: 300 }}>
              Uma curadoria silenciosa e refinada de rótulos raros. Vinhos selecionados pessoalmente sob a tutela e sensibilidade de Bianca.
            </p>
          </div>
          <div>
            <h4 className="font-label-caps text-primary" style={{ marginBottom: '24px' }}>Links Rápidos</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="font-button-text text-on-surface-variant">
              <a href="/">Início</a>
              <a href="/">Catálogo Privado</a>
              <a href="/">Minhas Aquisições</a>
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-primary" style={{ marginBottom: '24px' }}>Atendimento</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="font-body-md text-on-surface-variant">
              <span>Consultoria com Bianca</span>
              <span>contato@vinheriaagnello.com</span>
              <span>+55 11 3088-0000</span>
            </div>
          </div>
        </div>
        <div className={`font-label-caps text-on-surface-variant ${styles.footerBottom}`}>
          <p>© 2025 Vinheria Agnello. Todos os direitos reservados.</p>
          <p className="text-primary" style={{ letterSpacing: '0.2em' }}>Elegância • Tradição • Reserva Exclusiva</p>
        </div>
      </div>
    </footer>
  );
}
