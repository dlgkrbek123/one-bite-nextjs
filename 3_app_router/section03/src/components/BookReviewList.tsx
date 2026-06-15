import * as BookRepository from "@/lib/bookRepository";
import BookReviewItem from "./BookReviewItem";

const BookReviewList = async ({ bookId }: { bookId: string }) => {
  const reviews = await BookRepository.getBookReviews(Number(bookId));

  if (reviews === null) throw new Error("BookReview fetch failed");

  return (
    <section>
      {reviews.map((review) => (
        <BookReviewItem key={review.id} {...review} />
      ))}
    </section>
  );
};

export default BookReviewList;
