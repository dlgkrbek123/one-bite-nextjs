import { BookData } from "@/types/BookData";
import Link from "next/link";
import style from "@/components/book-item.module.css";
import Image from "next/image";

const BookItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <Link className={style.container} href={`/book/${id}`}>
      <Image
        src={coverImgUrl}
        alt={`도서 ${title}의 커버이미지`}
        width={80}
        height={105}
      />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
