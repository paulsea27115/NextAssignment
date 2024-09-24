import React, { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import MovieItem from "@/components/movie-item";
import movies from "@/mocks/movies.json";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommended_movies}>
          {movies.map((movie, idx): ReactNode | null => {
            return idx < 3 ? <MovieItem key={idx + 1} {...movie} /> : null;
          })}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_movies}>
          {movies.map((movie, idx): ReactNode => {
            return <MovieItem key={idx + 1} {...movie} />;
          })}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
