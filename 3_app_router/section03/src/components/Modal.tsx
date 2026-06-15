"use client";

import style from "@/components/modal.module.css";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();

  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!ref.current?.open) {
      ref.current?.showModal();
      ref.current?.scrollTo({ top: 0 });
    }
  }, []);

  return createPortal(
    <dialog
      className={style.modal}
      ref={ref}
      onClick={(e) => {
        if ((e.target as HTMLElement).nodeName === "DIALOG") {
          router.back();
        }
      }}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement,
  );
};

export default Modal;
