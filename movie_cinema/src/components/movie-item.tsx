import Link from "next/link";
import style from "./movie-item.module.css";
import { MovieData } from "@/types";

export default function MovieItem({
  id,
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
}: MovieData) {
  return (
    <div className={style.img_container}>
      <Link href={`/movie/${id}`}>
        <img src={posterImgUrl} alt="영화_이미지" />
      </Link>
    </div>
  );
}
