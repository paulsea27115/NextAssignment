import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode, useEffect, useState } from "react";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-movies";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import { MovieData } from "@/types";

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const router = useRouter();

  const q = router.query.q;

  const fetchSearchMovies = async () => {
    const movies = await fetchMovies(q as string);

    setMovies(movies);
  };

  useEffect(() => {
    if (q) {
      fetchSearchMovies();
    }
  }, [q]);

  return (
    <div>
      {movies ? (
        movies.map((movie, idx) => <MovieItem key={movie.id} {...movie} />)
      ) : (
        <div>검색을 잘 못하셨습니다. 다시 검색해주세요</div>
      )}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
