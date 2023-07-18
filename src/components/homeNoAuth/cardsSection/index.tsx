import styles from "./styles.module.scss";
import { Container } from "reactstrap";

const CardSection = function () {
  return (
    <>
      <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>FRONT-END</p>
          <p className={styles.cardDescription}>
            Você aprenderá sobre HTML, CSS e JavaScript, as três principais
            linguagens usadas para construir sites front-end. Você também
            aprenderá sobre design web, responsividade e acessibilidade.
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>BACK-END</p>
          <p className={styles.cardDescription}>
            Node.js, Sequelize e PostgreSQL. Você aprenderá sobre estas três
            tecnologias, que são as mais populares para construir aplicações web
            back-end modernas. Você também aprenderá sobre arquitetura web,
            segurança web e escalabilidade.
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>MOBILE</p>
          <p className={styles.cardDescription}>
            React Native, Flutter e Kotlin/Java. Você também aprenderá sobre
            design de aplicativos móveis, desenvolvimento de negócios e testes.
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>GIT E GITHUB</p>
          <p className={styles.cardDescription}>
            Você aprenderá sobre os fundamentos do Git, como criar repositórios,
            fazer commits, fazer branches e mergear branches. Você também
            aprenderá sobre GitHub, um serviço de hospedagem de repositório Git
            que permite colaborar com outros desenvolvedores.
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>PROJETOS</p>
          <p className={styles.cardDescription}>
            É aqui que você terá a oportunidade de colocar em prática o que
            aprendeu nas aulas e criar seus próprios projetos de desenvolvimento
            web.
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>CARREIRA</p>
          <p className={styles.cardDescription}>
            Finalmente, você aprenderá sobre as diferentes maneiras de se
            destacar da concorrência, como construir um portfólio de seus
            projetos de desenvolvimento web, participar de comunidades de
            desenvolvedores web online, e aprender novas tecnologias e técnicas.
          </p>
        </div>
      </Container>
    </>
  );
};

export default CardSection;
