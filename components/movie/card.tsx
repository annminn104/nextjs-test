import { Col } from "antd";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (props: any) => {
  return (
    <Col className="gutter-row" span={4}>
      <Link href="/[id]" as={`/${encodeURIComponent(props.id)}`}>
        <a className="am-card">
          <Image
            src={props.poster_path}
            alt={"poster movie " + props.original_title}
            width={300}
            height={400}
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3e%3crect x='2' y='2' width='296' height='396' style='fill:%23dedede%3bstroke:%23555555%3bstroke-width:2'/%3e%3ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' alignment-baseline='middle' font-family='monospace%2c sans-serif' fill='%23555555'%3eworkshop team 3%3c/text%3e%3c/svg%3e"
          />
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
