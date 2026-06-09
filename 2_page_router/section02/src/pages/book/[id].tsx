import style from "@/pages/book/[id].module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import * as BookRepository from "@/lib/bookRepository";
import Head from "next/head";

export default function Book({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return "존재하지 않는 도서입니다.";

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{
            backgroundImage: `url('${coverImgUrl}')`,
          }}
        >
          <img src={coverImgUrl} alt="" />
        </div>

        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = context.params?.id?.toString() ?? "";
  const book = await BookRepository.getBookData(Number(id));

  return {
    props: {
      book,
    },
  };
};
