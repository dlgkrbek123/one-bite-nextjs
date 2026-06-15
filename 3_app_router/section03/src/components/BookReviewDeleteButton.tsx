"use client";

import { deleteReviewAction } from "@/actions/deleteReview.action";
import { useActionState, useEffect, useRef } from "react";

const BookReviewDeleteButton = ({
  bookId,
  reviewId,
}: {
  bookId: number;
  reviewId: number;
}) => {
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null,
  );

  const ref = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={ref} action={formAction}>
      <input name="bookId" value={bookId} hidden readOnly />
      <input name="reviewId" value={reviewId} hidden readOnly />
      {isPending ? (
        <div>...</div>
      ) : (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            ref.current?.requestSubmit();
          }}
        >
          삭제하기
        </div>
      )}
    </form>
  );
};

export default BookReviewDeleteButton;
