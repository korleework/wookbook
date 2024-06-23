import React from "react";
import Slider from "react-slick";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import img1 from "../../assets/yogiyo.png";
import img2 from "../../assets/coupangeats.png";
import beamin from "../../assets/burger/beamin.jpg";

const settings = {
  dots: false,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
};
const TestimonialData = [
  {
    id: 1,
    name: "배민 댓글 알바",
    testimonial:
      "와 역시 배달의 민족이야, 할인 쿠폰도 많이 뿌리고 정말 좋아요!! 몇번이고 사용할 거 같아요!",
    img: beamin,
  },
  {
    id: 1,
    name: "요기요",
    testimonial:
      "배민 왜 씀? 나라면 요기요 쓴다 ㄹㅇㅋㅋ",
    img: img1,
  },
  {
    id: 1,
    name: "쿠팡 이츠",
    testimonial:
      "배민 왜 씀? 나라면 요기요 쓴다 ㄹㅇㅋㅋ <-- 뭔 근기요야 나라면 쿠팡 이츠씀",
    img: img2,
  },
];
const Testimonial = () => {
  return (
    <>
      <div className="py-10" style={{backgroundColor: "#48D1CC"}}>
        <div className="container">
          {/* Header  */}
          <HeaderTitle
            title="앱 사용 후기"
            subtitle=""
            description={
              "절대 좋은 평만 가져온 것은 아닙니다... 아마도?"
            }
          />
          {/* testimonial */}
          <div className="max-w-[600px] mx-auto">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div data-aos="fade-up" key={data.id}>
                  <div className="text-center shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5">
                    <img
                      className="rounded-full block mx-auto w-30 h-20"
                      src={data.img}
                      alt=""
                    />
                    <p className="text-gray-500 text-sm">{data.testimonial}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
