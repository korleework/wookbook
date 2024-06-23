import React from "react";
import Img2 from "../../assets/burger/chicken.png";
import Img3 from "../../assets/burger/mara.png";
import Img4 from "../../assets/burger/kimchi.jpg";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "치킨",
    description:
      "한 입 물면 바삭함이 한 가득, 한 입... 한입만 먹으면 생각이 달라 지실걸요?",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "마라탕",
    description:
      "마라탕의 매콤한 맛, 씹히는 콩나물과 숙주, 자기가 왕이라며 나오는 고기, 은은하게 퍼지는 버섯의 향",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img4,
    name: "김치찌개",
    description:
      "뜨겁다.. 김치와 고기를 밥과 함께 한 입에, 두부 먹을때는 입 천장 득히 조심!",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          <HeaderTitle
            title="오늘의 추천"
            subtitle="추천 메뉴"
            description={
              "그냥 지금 생각나는 음식 넣음, 그런데 뭔가 있는 것처럼 작성하기"
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-16
                   group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
