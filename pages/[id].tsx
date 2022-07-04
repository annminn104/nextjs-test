import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import { Col, Row } from "antd";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.id;
  const resMovie = await fetch(`${API_URL}/movie/${slug}?api_key=${API_KEY}&language=en-US`);
  const responseMovie = await resMovie.json();
  // console.log(responseMovie);
  return {
    props: {
      responseMovie,
    },
  };
};

type PropType = {
  responseMovie: any;
};

const UserDetail = (data: PropType) => {
  const router = useRouter();
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(data.responseMovie);
  return (
    <>
      <div className="am-movie_detail">
        <Image src={imagePath + data.responseMovie.backdrop_path} layout="fill" className="am-movie_detail-background" alt={"backdrop_path" + data.responseMovie.backdrop_path} />
        <Row wrap={false} className="am-movie_detail-content" gutter={26}>
          <Col flex="280px">
            <Image src={imagePath + data.responseMovie.poster_path} alt={"poster" + data.responseMovie.title} width="280" height="400" className="am-movie_detail-image" />
          </Col>
          <Col flex="auto">
            <div className="am-movie_detail-back" onClick={() => router.back()}>
              Back to Homepage
            </div>
            <div className="am-movie_detail-genres">
              {data.responseMovie.genres.map((item: any, key: number) => (
                <span key={key}>{item.name}</span>
              ))}
            </div>
            <h1 className="am-movie_detail-title">{data.responseMovie.title}</h1>
            <div className="am-movie_detail-date">{new Date(data.responseMovie.release_date).toDateString()}</div>
            <span className="am-movie_detail-description">
              <div>Overview</div>
              {data.responseMovie.overview}
            </span>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default UserDetail;
