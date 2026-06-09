import SearchLayout from "@/components/SearchLayout";
import style from "./index.module.css";
import { ReactNode } from "react";
import BookItem from "@/components/BookItem";
import { InferGetServerSidePropsType } from "next";
import * as BookRepository from "@/lib/bookRepository";
import Head from "next/head";

export default function Home({
  allBooks,
  randomBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {randomBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};

export const getServerSideProps = async () => {
  const [allBooks, randomBooks] = await Promise.all([
    BookRepository.getAllBooks(),
    BookRepository.getRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      randomBooks,
    },
  };
};
