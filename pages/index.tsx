import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss";
import HeaderNoAuth from "@/src/components/homeNoAuth/headernoAuth";
import PresetationSection from "@/src/components/homeNoAuth/presetationSection";
import CardSection from "@/src/components/homeNoAuth/cardsSection";

const HomeNotAuth = function () {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."
        />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresetationSection />
        </div>
        <CardSection></CardSection>
      </main>
    </>
  );
};

export default HomeNotAuth;
