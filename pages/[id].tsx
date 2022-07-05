import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import { Col, Row, Carousel } from "antd";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.id;
  const language = "language=en-US";
  const [resMovieDetails, resMovieCredits, resMovieVideos] = await Promise.all([fetch(`${API_URL}/movie/${slug}?api_key=${API_KEY}&${language}`), fetch(`${API_URL}/movie/${slug}/credits?api_key=${API_KEY}&${language}`), fetch(`${API_URL}/movie/${slug}/videos?api_key=${API_KEY}&${language}`)]);
  const responseDetails = await resMovieDetails.json();
  const responseCredits = await resMovieCredits.json();
  const responseVideos = await resMovieVideos.json();
  if ((responseDetails.status_code || responseCredits.status_code || responseVideos.status_code) == 34) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      responseDetails,
      responseCredits,
      responseVideos,
    },
  };
};

type PropType = {
  responseDetails: any;
  responseCredits: any;
  responseVideos: any;
};

const UserDetail = (data: PropType) => {
  const router = useRouter();
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(data.responseVideos);
  return (
    <>
      <div className="am-movie_detail">
        <Image src={imagePath + data.responseDetails.backdrop_path} layout="fill" className="am-movie_detail-background" alt={"backdrop_path" + data.responseDetails.backdrop_path} />
        <div className="am-movie_detail-content">
          <Row wrap={false} gutter={26}>
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
          <Row>
            {data.responseCredits.cast.slice(0, 4).map((item: any, key: number) => (
              <Col span={6} className="am-cast" key={key}>
                <div className="am-cast_card">
                  <Image src={imagePath + item.profile_path} alt={item.character} width="140" height="180" />
                  <p className="am-cast_card-name">{item.original_name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};
export default UserDetail;
