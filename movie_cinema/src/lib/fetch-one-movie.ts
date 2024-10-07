import { MovieData } from "@/types";

export default async function fetchOneMovie(
  id: Number
): Promise<MovieData | null> {
  const url = `https://onebite-cinema-api-main-mu.vercel.app/movie/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.log(err);

    return null;
  }
}
