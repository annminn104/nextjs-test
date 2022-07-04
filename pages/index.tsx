import ListMovies from "@components/movie";
import Seo from "@components/seo";

import type { GetServerSideProps } from "next";
const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

export const getServerSideProps: GetServerSideProps = async () => {
  const resMovie = await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`);
  const responseMovie = await resMovie.json();
  return {
    props: {
      responseMovie,
    },
  };
};

type PropType = {
  responseMovie: any;
};

const Home = (data: PropType) => {
  // console.log(data.responseMovie);
  return (
    <>
      <Seo title="HomePage - Amitgroup - TRANSFORM DIGI TOGETHER" keywords="amit, amitgroup, it, ai, service, web, design, code, logistic, ios, android, development, website, ux, ui, game, embedded, software, java, python, ..." url="https://amitgroup.vn/" />
      <ListMovies data={data.responseMovie} />
    </>
  );
};

export default Home;
