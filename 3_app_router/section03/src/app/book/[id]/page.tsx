import style from "./page.module.css";
import * as BookRepository from "@/lib/bookRepository";
import BookReviewList from "@/components/BookReviewList";
import BookDetailReview from "@/components/BookDetailReview";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2 " }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const bookId = (await params).id?.toString() ?? "";

  return (
    <div className={style.container}>
      <BookDetail bookId={bookId} />
      <BookDetailReview bookId={bookId} />
      <BookReviewList bookId={bookId} />
    </div>
  );
}

const BookDetail = async ({ bookId }: { bookId: string }) => {
  const book = await BookRepository.getBookData(Number(bookId));

  if (book === null) return <div>에러가 발생하였습니다.</div>;

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
};
