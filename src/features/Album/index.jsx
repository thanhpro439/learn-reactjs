import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Khóc một dòng sông",
      thumbUlr:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/b/4/2/3b42d73ec97a948d84985b97120e5eed.jpg",
    },
    {
      id: 2,
      name: "Lời nói dối ngọc ngà",
      thumbUlr:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/c/b/5/9cb58b29faecf9b759caad1c426f473c.jpg",
    },
    {
      id: 3,
      name: "Phiêu nhịp thở cùng âm nhạc",
      thumbUlr:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/9/0/e/d90e53aea9068699abe1dd5567b6e559.jpg",
    },
    {
      id: 4,
      name: "Người ôm pháo hoa",
      thumbUlr:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/4/0/d/e40db131be413e47df59237e4bd2c8ab.jpg",
    },
  ];
  return (
    <div>
      <h3>Nghệ sĩ thịnh hành </h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
