import Link from "next/link";
import { PropsWithChildren } from "react";
import style from "@/components/global-layout.module.css";

const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href="/">📚 ONEBITE BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @dlgkrbek123</footer>
    </div>
  );
};

export default GlobalLayout;
