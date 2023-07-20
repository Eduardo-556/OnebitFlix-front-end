import Head from "next/head";
import styles from "../styles/homeNoAuth.module.scss";
import HeaderNoAuth from "@/src/components/homeNoAuth/headernoAuth";
import PresetationSection from "@/src/components/homeNoAuth/presetationSection";
import CardSection from "@/src/components/homeNoAuth/cardsSection";
import SlideSection from "@/src/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import { ReactNode } from "react";
import courseService, { CourseType } from "@/src/services/courseService";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNotAuth = function ({ course }: IndexPageProps) {
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
        <CardSection />
        <SlideSection newestCourses={course} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNotAuth;
