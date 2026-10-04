'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('vinheria_isLogged', 'true');
      router.push('/');
    }, 1500);
  };

  return (
    <div className={styles.authLayout}>
      <div className={styles.authBg}>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbur62VuB2BP52nFBlByYvR8sKn3naOwQKW7RvdmpQCR2R2qa5e6VXDAhoMb5rV_eQFi2twNt3UUu2E8GGrzKOZahNBPlGmd4dfATA0kGfBd77Awq5N7WgoxsXfq2qGS7uNhUEqEXutAN2U9g5E7KhL6r7zUWAhCFhWyVlCI2dz3yxKxAScpB21TRaDgIKWQ7tKEuEwwsjUlwe2maalvdMhQqQM7c5tsRLCpF1ME9xco2lKPsJrezaaA" alt="Wine cellar bg" />
        <div className={styles.authGradient}></div>
        <div className={styles.glowTop}></div>
        <div className={styles.glowBottom}></div>
      </div>

      <div className={styles.authContainer}>
        <div className={styles.cardWrapper}>
          <div className={styles.topAccent}>
            <div className={styles.accentLine}></div>
            <span className="font-label-caps text-primary" style={{ letterSpacing: '0.3em' }}>Acesso Restrito • Confraria</span>
            <div className={styles.accentLine}></div>
          </div>

          <div className={styles.authCard}>
            <div className={`${styles.cornerHighlight} ${styles.tl}`}></div>
            <div className={`${styles.cornerHighlight} ${styles.tr}`}></div>
            <div className={`${styles.cornerHighlight} ${styles.bl}`}></div>
            <div className={`${styles.cornerHighlight} ${styles.br}`}></div>

            <div className="text-center" style={{ marginBottom: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-surface-container)', marginBottom: '16px' }}>
                <span className="material-symbols-outlined text-primary">key</span>
              </div>
              <h1 className="font-headline-md text-on-surface text-center">Acesse sua Adega Particular</h1>
              <p className="font-body-md text-on-surface-variant text-center" style={{ maxWidth: '400px', margin: '12px auto 0', fontWeight: 300 }}>
                Entre para revisitar seus rótulos guardados, o histórico de recomendações exclusivas e sua curadoria direta com a Bianca.
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className={styles.formGroup}>
                <label className={`${styles.formLabel} font-label-caps`} htmlFor="email">E-mail Pessoal</label>
                <div className={styles.inputWrapper}>
                  <span className="material-symbols-outlined input-icon" style={{ left: '16px' }}>mail</span>
                  <input type="email" id="email" className="input-field font-body-md" style={{ paddingLeft: '48px' }} placeholder="nome@exemplo.com.br" required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label className={`${styles.formLabel} font-label-caps`} style={{ margin: 0 }} htmlFor="password">Chave de Acesso</label>
                  <a href="#" className="font-button-text text-primary" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Esqueceu a senha?</a>
                </div>
                <div className={styles.inputWrapper}>
                  <span className="material-symbols-outlined input-icon" style={{ left: '16px' }}>lock</span>
                  <input type={passwordVisible ? "text" : "password"} id="password" className="input-field font-body-md" style={{ paddingLeft: '48px', paddingRight: '48px' }} placeholder="••••••••••••" required />
                  <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-outline)' }}>
                    <span className="material-symbols-outlined">{passwordVisible ? "visibility" : "visibility_off"}</span>
                  </button>
                </div>
              </div>

              <div className={styles.checkboxWrapper}>
                <label className={styles.checkboxLabel}>
                  <div style={{ position: 'relative' }}>
                    <input type="checkbox" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} />
                    <div className={styles.customCheckbox}>
                      <span className={`material-symbols-outlined ${styles.checkIcon}`}>check</span>
                    </div>
                  </div>
                  <span className="font-body-md text-on-surface-variant" style={{ fontSize: '14px' }}>Manter este dispositivo memorizado</span>
                </label>
              </div>

              <button type="submit" disabled={loading} className={`${styles.submitBtn} font-button-text`} style={{ opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Autenticando...' : 'Entrar na Adega'}
                {!loading && <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>}
              </button>
            </form>

            <div className={styles.divider}>
              <div className={styles.dividerLine}></div>
              <span className={`${styles.dividerText} font-label-caps`} style={{ fontSize: '11px' }}>Ou acesse com</span>
            </div>

            <div className={styles.socialGrid}>
              <button className={styles.socialBtn}>
                <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12.24 10.285V13.4h6.887C18.2 16.333 15.645 18 12.24 18c-3.315 0-6-2.685-6-6s2.685-6 6-6c1.62 0 3.08.62 4.18 1.635l2.405-2.405C17.27 3.73 14.92 3 12.24 3 7.27 3 3.24 7.03 3.24 12s4.03 9 9 9c5.2 0 8.655-3.655 8.655-8.81 0-.6-.05-1.12-.14-1.905H12.24z"></path></svg>
                <span className="font-button-text" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Google</span>
              </button>
              <button className={styles.socialBtn}>
                <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.65-.79 1.1-1.89.98-2.99-1 .04-2.14.67-2.82 1.46-.59.68-1.12 1.77-.98 2.85 1.12.09 2.19-.57 2.82-1.32z"></path></svg>
                <span className="font-button-text" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Apple ID</span>
              </button>
            </div>

            <div className={styles.footerNote}>
              <p className="font-body-md text-on-surface-variant text-center" style={{ fontSize: '14px' }}>
                Ainda não possui uma conta?
                <a href="/signup" className="text-primary" style={{ marginLeft: '4px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>Criar conta de membro</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

