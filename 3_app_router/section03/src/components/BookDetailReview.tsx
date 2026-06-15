"use client";

import { createReviewAction } from "@/actions/createReview.action";
import style from "@/components/book-detail-review.module.css";
import { useActionState, useEffect } from "react";

const BookDetailReview = ({ bookId }: { bookId: string }) => {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null,
  );

  useEffect(() => {
    if (state && state.error) alert(state.error);
  }, [state]);

  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input type="text" name="bookId" value={bookId} readOnly hidden />
        <textarea
          disabled={isPending}
          required
          name="content"
          placeholder="리뷰 내용"
        />
        <div className={style.submit_container}>
          <input
            disabled={isPending}
            required
            type="text"
            name="author"
            placeholder="작성자 "
          />
          <button disabled={isPending} type="submit">
            {isPending ? "작성중" : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookDetailReview;
