import style from "@/components/book-review-item.module.css";
import { ReviewData } from "@/types/ReviewData";
import BookReviewDeleteButton from "./BookReviewDeleteButton";

const BookReviewItem = ({
  id,
  content,
  author,
  createdAt,
  bookId,
}: ReviewData) => {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
        <BookReviewDeleteButton bookId={bookId} reviewId={id} />
      </div>
    </div>
  );
};

export default BookReviewItem;
