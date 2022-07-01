import { Row } from "antd";
import PropTypes from "prop-types";
import { MovieCard } from "./card";
import React from "react";

const ListMovies = (props: any) => {
  const data = props.data;
  const lazyRoot = React.useRef(null);
  return (
    <>
      <Row gutter={16} ref={lazyRoot}>
        {data.items.map((item: any, key: number) => (
          <MovieCard key={key} name={item.name} slug={item.slug} />
        ))}
      </Row>
    </>
  );
};

ListMovies.propTypes = {
  data: PropTypes.object,
};
export default ListMovies;
