import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/painel.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Painel de atendimento - Correios</title>
      </Head>

      <main className={`${inter.className} ${styles.main}`}>
        <div className={styles.sections}>
          <section className={styles.leftSection}>
            <div className={styles.carrossel}>
              <img
                src="https://images.unsplash.com/photo-1659353741638-9bbe25cd8715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Imagem Ilustrativa"
              />
            </div>
            <div className={styles.preferencial}>
              <h2 className={styles.preferencialTitle}>
                ATENDIMENTO PREFERENCIAL NAS AGÊNCIAS DE CORREIOS
              </h2>
              <h2 className={styles.preferencialSubTitle}>QUEM PODE USAR</h2>
              <ul>
                <li>
                  <Image src="/oldman.svg" alt="" height={64} width={64} />
                  <p>
                    <span>IDOSOS: </span>Clientes com 60 anos ou mais têm
                    prioridade no atendimento preferencial. Ao solicitar esse
                    serviço, eles serão atendidos com a máxima atenção e
                    agilidade.
                  </p>
                </li>
                <li>
                  <Image src="/pregnant.svg" alt="" height={64} width={64} />
                  <p>
                    <span>GESTANTES: </span> Futuras mamães também têm direito
                    ao atendimento preferencial. Entendemos que a gravidez traz
                    desafios adicionais, e estamos aqui para tornar o processo
                    de envio e recebimento de encomendas o mais tranquilo
                    possível.
                  </p>
                </li>
                <li>
                  <Image src="/wheelchair.svg" alt="" height={64} width={64} />
                  <p>
                    <span>DEFICIENTES: </span>Se você ou alguém que está
                    acompanhando precisa de assistência devido a mobilidade
                    reduzida, nosso atendimento preferencial está disponível
                    para garantir que sua visita à agência seja o mais suave
                    possível. Basta informar nossa equipe no local.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.rightSection}>
            <div className={styles.actualPassword}>
              <h2>SENHA ATUAL</h2>
              <h1>3560</h1>
              <h3>Últimas: 3560 3560 3560</h3>
            </div>
            <div className={styles.lastPasswords}>
              <h2>Próximas Senhas</h2>
              <ul>
                <li>3560</li>
                <li>3560</li>
                <li>3560</li>
                <li>3560</li>
              </ul>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Image src="/Logo.png" alt="me" width="170" height="35" />
          <div className={styles.hourDate}>
            <h4>14:58</h4>
            <h4>16/09/2023</h4>
          </div>
        </footer>
      </main>
    </>
  );
}
