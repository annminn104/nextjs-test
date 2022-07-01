import ListMovies from "@components/movie";
import { ENDPOINT_USER } from "@enums/movie";
import { Movie } from "@models/movie";
import type { GetServerSideProps } from "next";
const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(API_URL + ENDPOINT_USER.LIST + "?page=1");
  const response = await res.json();

  return {
    props: {
      response,
    },
  };
};

type PropType = {
  response: Movie[];
};

const Home = (data: PropType) => {
  return (
    <>
      <ListMovies data={data.response} />
    </>
  );
};

export default Home;
