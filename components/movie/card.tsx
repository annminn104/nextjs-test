import { Col } from "antd";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (props: any) => {
  return (
    <Col className="gutter-row" span={4}>
      <Link href="/[id]" as={`/${encodeURIComponent(props.id)}`}>
        <a className="am-card">
          <Image src={props.poster_path} alt={props.original_title} width={300} height={400} />
          <h3>{props.original_title}</h3>
        </a>
      </Link>
    </Col>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
};

export { MovieCard };
