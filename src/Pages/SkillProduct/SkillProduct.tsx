import React, { useState } from "react";

import CardDetail from "../../Components/Card/Card";
import "swiper/css/swiper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import portfolio1 from "../../image/portfolio1.png";
import comingsoon from "../../image/comingsoon.png";


const productLists = [
  {
    img: portfolio1,
    title: "ポートフォリオサイト",
    message:
      "ポートフォリオサイトを作成しました！学んだ知識を生かしていろんなサービスを作っていきたいと思います！",
  },
  {
    img: comingsoon,
    title: "随時更新",
    message: "現在作成中です。今しばらくお待ちください！",
  },
  {
    img: comingsoon,
    title: "随時更新",
    message: "現在作成中です。今しばらくお待ちください！",
  },
  {
    img: comingsoon,
    title: "随時更新",
    message: "現在作成中です。今しばらくお待ちください！",
  },
];

const SkillProduct: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {productLists.map((productList, index) => (
          <div>
            <CardDetail
              key={index}
              img={productList.img}
              title={productList.title}
              message={productList.message}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillProduct;
