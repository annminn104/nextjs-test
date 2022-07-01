import { Col } from "antd";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (props: any) => {
  return (
    <Col className="gutter-row" span={6}>
      <Link href="/[slug]" as={`/${encodeURIComponent(props.slug)}`}>
        <a className="am-card">
          {/* <Image src={props.avatar} alt={props.avatar} width={300} height={300} /> */}
          <h3>{props.name}</h3>
        </a>
      </Link>
    </Col>
  );
};

MovieCard.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
};

export { MovieCard };
