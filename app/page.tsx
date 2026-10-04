import type { Metadata } from 'next';
import Hero from '../components/Hero/Hero';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: "Vinheria Agnello | Vinhos Exclusivos e Curadoria Particular",
  description: "A tradição de uma família, o sabor de uma paixão. Descubra rótulos raros e participe de nossa confraria exclusiva sob a tutela da sommelier Bianca Agnello.",
  keywords: ["vinhos", "confraria", "adega", "sommelier", "vinhos raros", "comprar vinho", "Vinheria Agnello"],
};

export default function Home() {
  const wines = [
    { id: "wine-1", name: "Tinto Reserva 2018", price: "R$ 145,00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDneFPqZAM144ZACWuUySlv3UKRtdkEodrGXyFrV-gSMSZZBPXb9Hy6U6o7GHN5s3RbLA0D36CbnUZADuYVL1Pv2A4r-Ddlt0iibwjTl2rnDMlyxH9wy4YxL8rSJCtL4wABlCLc6BMlq-86XNmC_OCjlsOdoPX0yINzISIxqRH38VCYX55I3Ooat09ZAInRF6jcNzDyVKFuZZHliUgOqItaHU16PU1M8P9J_iYVVnSV8RYsuASuABH6KA" },
    { id: "wine-2", name: "Branco Chardonnay", price: "R$ 120,00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS8vi8FtMlQc06ulYC3PsZbATDfNLm3QPZN_fsoMIfR45NaOv_Y8bcqPTEx5Llw0CMm82BocsvIGUP6g-1lWIFaokIn1L8O5xZ2WPt0CIuDX9YLt8g2TXUIC5s6_vD200rNVDQ69PoVvd04x3nqXndzTAWHDK3jlwLNcpVpt0QgyTzGlA3JyCYeupUtdNDEobX9SzYTNxeMJ2Wu9R7m0z-WZVO9iKun7oPKZfHFY9Y-z2jcV_VxZKn-Q" },
    { id: "wine-3", name: "Rosé Suave 2021", price: "R$ 98,00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYbLTV0oeNawB4nqJgK2x0KT4WoUWc4_SGXxFT6K8Hljo2kCIviD6c9KkFynPJjNOxgl2Y2Gxkj5AvDMKinDbVBsNF6uzzET23ZF_Sn_PX5h_GTpOaUmZGAOPqV7Z-RNun3UnOBSRnsUtmfdIHkuc4RL9xAsJDO4bgBSH3z_1jonnVySFoxM8o02vgG5rs84yv2u1ExZ1qra-KhsZmdEOxTMA9LNuYHmZF6eEzOd90UHocFlfG2fjV0A" },
    { id: "wine-4", name: "Espumante Brut", price: "R$ 160,00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnZtPibrb85HFURXg2K0N-Kk1gu0EkkRrswgc7N-D6Irql59FCxN7JhtOjjnUQoMoV-Mbo35_x7sbTYVXCX5j06SU4Tlaq1Umc_vgeTgulXKA2fBdag6DL5nWGt_uz80kkUrgfts-xGu4LnusPeVWS9p71AFMe7RXcjZfsdVQDa2iKvgS1PG-shPnGw5N7Su94fa3RG8LRVNmhGPXlGPQ_snvMcINT9W0dkoXl6V8g2MPnP-0ttxrG3Q" }
  ];

  return (
    <>
      <Hero />

      <section id="quiz-section" className={styles.section} style={{ backgroundColor: 'var(--color-surface-container-low)', borderTop: '1px solid var(--color-surface-variant)', borderBottom: '1px solid var(--color-surface-variant)' }}>
        <div className="container text-center">
          <h2 className="font-headline-md text-on-surface" style={{ marginBottom: '1.5rem' }}>Não sabe qual vinho escolher?</h2>
          <p className="font-body-lg text-on-surface-variant" style={{ maxWidth: '42rem', margin: '0 auto 2rem' }}>
            Nós ajudamos você a encontrar o vinho perfeito para o seu paladar e para a sua ocasião especial. Faça nosso quiz rápido e descubra as melhores recomendações.
          </p>
          <button id="btn-start-quiz" className="btn-primary font-button-text" style={{ borderRadius: '9999px' }}>FAZER O QUIZ</button>
        </div>
      </section>

      <section id="featured-wines-section" className={styles.section}>
        <div className="container text-center">
          <h2 className="font-headline-md text-primary" style={{ marginBottom: '1rem' }}>Vinhos em Destaque</h2>
          <p className="font-body-lg text-on-surface-variant" style={{ maxWidth: '42rem', margin: '0 auto 3rem' }}>
            Seleção especial dos nossos rótulos mais aclamados, criados com dedicação e paixão.
          </p>
          
          <div className={styles.grid}>
            {wines.map((wine) => (
              <article key={wine.id} className={styles.card} aria-labelledby={`${wine.id}-title`}>
                <div className={styles.cardImageWrapper}>
                  <img src={wine.img} alt={`Garrafa de vinho ${wine.name}`} loading="lazy" />
                </div>
                <div className={styles.cardContent}>
                  <div style={{ textAlign: 'left' }}>
                    <h3 id={`${wine.id}-title`} className="font-headline-sm text-on-surface" style={{ marginBottom: '0.25rem' }}>{wine.name}</h3>
                    <p className="font-body-md text-primary" aria-label={`Preço: ${wine.price}`}>{wine.price}</p>
                  </div>
                  <button id={`btn-add-${wine.id}`} className={`${styles.cardBtn} font-button-text`} aria-label={`Adicionar ${wine.name} ao carrinho`}>Adicionar</button>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <button id="btn-view-all" className="btn-outline font-button-text" style={{ borderRadius: '9999px' }}>Ver todos os vinhos</button>
          </div>
        </div>
      </section>
    </>
  );
}
