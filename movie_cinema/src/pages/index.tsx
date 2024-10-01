import React, { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-movies";
import fetchRecoMovies from "@/lib/fetch-recoMovies";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRecoMovies(),
  ]);

  return {
    props: { allMovies, recoMovies },
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommended_movies}>
          {recoMovies.map((movie, idx): ReactNode | null => {
            return <MovieItem key={`recomovie-${movie.id}`} {...movie} />;
          })}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_movies}>
          {allMovies.map((movie, idx): ReactNode => {
            return <MovieItem key={`allmovie-${movie.id}`} {...movie} />;
          })}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
