import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-movies";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;

  const movies = await fetchMovies(q as string);

  return {
    props: {
      movies,
    },
  };
};

export default function Page({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {movies ? (
        movies.map((movie, idx) => <MovieItem key={idx + 1} {...movie} />)
      ) : (
        <div>검색을 잘 못하셨습니다. 다시 검색해주세요</div>
      )}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
