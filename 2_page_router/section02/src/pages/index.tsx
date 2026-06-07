import SearchLayout from "@/components/SearchLayout";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>제하하하하하</h1>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
