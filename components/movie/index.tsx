import { Row } from "antd";
import PropTypes from "prop-types";
import { MovieCard } from "./card";
import React from "react";

const ListMovies = (props: any) => {
  const data = props.data;
  const lazyRoot = React.useRef(null);
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <Row gutter={16} ref={lazyRoot} className="am-movie">
        {data.results.map((item: any, key: number) => (
          <MovieCard key={key} original_title={item.original_title || item.original_name} id={item.id} poster_path={imagePath + item.poster_path} />
        ))}
      </Row>
    </>
  );
};

ListMovies.propTypes = {
  data: PropTypes.object,
};
export default ListMovies;
