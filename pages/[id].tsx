import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import { Col, Row, Carousel } from "antd";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.id;
  const [resMovieDetails, resMovieCredits] = await Promise.all([fetch(`${API_URL}/movie/${slug}?api_key=${API_KEY}&language=en-US`), fetch(`${API_URL}/movie/${slug}/credits?api_key=${API_KEY}&language=en-US`)]);
  const responseDetails = await resMovieDetails.json();
  const responseCredits = await resMovieCredits.json();
  // console.log(responseMovie);
  return {
    props: {
      responseDetails,
      responseCredits,
    },
  };
};

type PropType = {
  responseDetails: any;
  responseCredits: any;
};

const UserDetail = (data: PropType) => {
  const router = useRouter();
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(data.responseCredits);
  return (
    <>
      <div className="am-movie_detail">
        <Image src={imagePath + data.responseDetails.backdrop_path} layout="fill" className="am-movie_detail-background" alt={"backdrop_path" + data.responseDetails.backdrop_path} />
        <Row wrap={false} className="am-movie_detail-content" gutter={26}>
          <Col flex="280px">
            <Image src={imagePath + data.responseDetails.poster_path} alt={"poster" + data.responseDetails.title} width="280" height="400" className="am-movie_detail-image" />
          </Col>
          <Col flex="auto">
            <div className="am-movie_detail-back" onClick={() => router.back()}>
              Back to Homepage
            </div>
            <div className="am-movie_detail-genres">
              {data.responseDetails.genres.map((item: any, key: number) => (
                <span key={key}>{item.name}</span>
              ))}
            </div>
            <h1 className="am-movie_detail-title">{data.responseDetails.title}</h1>
            <div className="am-movie_detail-date">{new Date(data.responseDetails.release_date).toDateString()}</div>
            <span className="am-movie_detail-description">
              <div>Overview</div>
              {data.responseDetails.overview}
            </span>
          </Col>
        </Row>
        <Row className="am-movie_detail-content">
          <Col span={24} className="am-cast">
            {data.responseCredits.cast.map((item: any, key: number) => (
              <div key={key} className="am-cast_card">
                <Image src={imagePath + item.profile_path} alt={item.character} width="140" height="180" />
                <p className="am-cast_card-name">{item.original_name}</p>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default UserDetail;
