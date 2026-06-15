"use server";

import { revalidateTag } from "next/cache";

export const deleteReviewAction = async (_: any, formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  const reviewId = formData.get("reviewId")?.toString();

  if (!bookId || !reviewId)
    return {
      status: false,
      error: "리뷰가 지정되지 않았습니다.",
    };

  try {
    const response = await fetch(`http://localhost:12345/review/${reviewId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(response.statusText);

    revalidateTag(`review-${bookId}`);

    return {
      status: true,
      error: null,
    };
  } catch (error) {
    return {
      status: false,
      error: "리뷰 삭제에 실패했습니다.",
    };
  }
};
