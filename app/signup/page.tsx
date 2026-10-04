'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);
  const [cpwdVisible, setCpwdVisible] = useState(false);
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Apenas números, espaços, parênteses e traços
    const val = e.target.value.replace(/[^0-9\s()\-]/g, '');
    setPhone(val);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');

    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem. Verifique e tente novamente.');
      return;
    }

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
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5JOTRtKwljmxFhNJjUh29VAFl5a5xml07C2rOPIm7FViEMOvhldC0HilFZ6iipctjRoJ4ShUC3tqaQmGp6ahhIqbE7etgCs-l9C9VeINnc63_iwCPH5eACXP1SZ-pDUf1mn3ubtceEBSHGkh7y1v97Oft8JVJ3P7ZzbYXahvxIjcadlZDgVkLAmJWUpt6Kdp2qNVyrNzPnFSCWXze6IZ1FW-UFUvUivsHJyOwvW7QHEMiZAZewwSmrg" alt="Dark wine cellar vault" />
        <div className={styles.authGradient} style={{ background: 'linear-gradient(to bottom, var(--color-surface), rgba(23, 19, 14, 0.9), var(--color-surface))' }}></div>
        <div className={styles.glowTop} style={{ width: '720px', height: '360px', top: '-128px' }}></div>
      </div>

      <div className={styles.authContainer}>
        <div className={`${styles.cardWrapper} ${styles.cardWrapperSignup}`}>
          <div className={styles.authCard} style={{ borderRadius: '12px' }}>
            <div className="text-center" style={{ marginBottom: '32px' }}>
              <div className="flex items-center justify-center gap-3" style={{ marginBottom: '12px' }}>
                <div style={{ width: '32px', height: '1px', backgroundColor: 'rgba(176, 141, 79, 0.4)' }}></div>
                <span className="font-label-caps text-primary" style={{ letterSpacing: '0.25em' }}>Confraria • Membresia Exclusiva</span>
                <div style={{ width: '32px', height: '1px', backgroundColor: 'rgba(176, 141, 79, 0.4)' }}></div>
              </div>
              <h1 className="font-headline-md text-primary text-center">Criar Conta de Membro</h1>
              <p className="font-body-md text-on-surface-variant text-center" style={{ maxWidth: '480px', margin: '12px auto 0', fontWeight: 300 }}>
                Tenha acesso ao atendimento personalizado de Bianca Agnello, convites para safras raras e uma curadoria humana moldada ao seu paladar.
              </p>
              <div style={{ width: '64px', height: '1px', backgroundColor: 'rgba(176, 141, 79, 0.4)', margin: '24px auto' }}></div>
            </div>

            <form onSubmit={handleSignup}>
              <div className={styles.formGroup}>
                <label className={`${styles.formLabel} font-label-caps`} htmlFor="fullname">Nome Completo</label>
                <div className={styles.inputWrapper}>
                  <input type="text" id="fullname" className="input-field font-body-md" style={{ paddingRight: '48px' }} placeholder="Ex.: Giulio Agnello" required />
                  <span className="material-symbols-outlined input-icon" style={{ left: 'auto', right: '16px' }}>badge</span>
                </div>
              </div>

              <div className={styles.grid2}>
                <div>
                  <label className={`${styles.formLabel} font-label-caps`} htmlFor="email">Endereço de E-mail</label>
                  <div className={styles.inputWrapper}>
                    <input type="email" id="email" className="input-field font-body-md" style={{ paddingRight: '48px' }} placeholder="seu@email.com" required />
                    <span className="material-symbols-outlined input-icon" style={{ left: 'auto', right: '16px' }}>mail</span>
                  </div>
                </div>
                <div>
                  <label className={`${styles.formLabel} font-label-caps`} htmlFor="phone">Número de Telefone Celular</label>
                  <div className={styles.inputWrapper}>
                    <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} className="input-field font-body-md" style={{ paddingRight: '48px' }} placeholder="(11) 98765-4321" />
                    <span className="material-symbols-outlined input-icon" style={{ left: 'auto', right: '16px' }}>call</span>
                  </div>
                </div>
              </div>

              <div className={styles.grid2} style={{ marginBottom: passwordError ? '8px' : '24px' }}>
                <div>
                  <label className={`${styles.formLabel} font-label-caps`} htmlFor="password">Nova Senha</label>
                  <div className={styles.inputWrapper}>
                    <input type={pwdVisible ? "text" : "password"} id="password" value={password} onChange={e => setPassword(e.target.value)} className="input-field font-body-md" style={{ paddingRight: '48px', borderColor: passwordError ? 'var(--color-secondary)' : 'transparent' }} placeholder="Ao menos 8 caracteres" required minLength={8} />
                    <button type="button" onClick={() => setPwdVisible(!pwdVisible)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-outline)' }}>
                      <span className="material-symbols-outlined">{pwdVisible ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label className={`${styles.formLabel} font-label-caps`} htmlFor="confirm_password">Confirmar Nova Senha</label>
                  <div className={styles.inputWrapper}>
                    <input type={cpwdVisible ? "text" : "password"} id="confirm_password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="input-field font-body-md" style={{ paddingRight: '48px', borderColor: passwordError ? 'var(--color-secondary)' : 'transparent' }} placeholder="Repita sua senha" required minLength={8} />
                    <button type="button" onClick={() => setCpwdVisible(!cpwdVisible)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-outline)' }}>
                      <span className="material-symbols-outlined">{cpwdVisible ? 'visibility' : 'visibility_off'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {passwordError && (
                <div style={{ color: 'var(--color-secondary)', fontSize: '13px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>error</span>
                  <span>{passwordError}</span>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <label className={styles.checkboxLabel}>
                  <div style={{ position: 'relative' }}>
                    <input type="checkbox" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} required />
                    <div className={styles.customCheckbox} style={{ borderRadius: '4px' }}>
                      <span className={`material-symbols-outlined ${styles.checkIcon}`}>check</span>
                    </div>
                  </div>
                  <span className="font-body-md text-on-surface-variant" style={{ fontSize: '13px' }}>Concordo com os <a href="#" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Termos da Confraria</a> e com a Política de Privacidade.</span>
                </label>

                <label className={styles.checkboxLabel}>
                  <div style={{ position: 'relative' }}>
                    <input type="checkbox" defaultChecked style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} />
                    <div className={styles.customCheckbox} style={{ borderRadius: '4px' }}>
                      <span className={`material-symbols-outlined ${styles.checkIcon}`}>check</span>
                    </div>
                  </div>
                  <span className="font-body-md text-on-surface-variant" style={{ fontSize: '13px' }}>Desejo receber notas de degustação assinadas pela sommelier Bianca.</span>
                </label>
              </div>

              <button type="submit" disabled={loading} className={`${styles.submitBtn} font-button-text`} style={{ borderRadius: '8px', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Preparando sua Adega...' : 'Finalizar Cadastro'}
                {!loading && <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>}
              </button>

              <div className="text-center" style={{ marginTop: '16px' }}>
                <p className="font-body-md text-on-surface-variant text-center" style={{ fontWeight: 300 }}>
                  Já possui cadastro na vinheria? <a href="/login" className="text-primary" style={{ fontWeight: 500, textDecoration: 'underline' }}>Entrar na Adega</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

