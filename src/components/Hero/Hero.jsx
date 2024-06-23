import React, { useState } from "react";
import BiryaniImg1 from "../../assets/burger/chicken.png";
import BiryaniImg2 from "../../assets/burger/mara.png";
import BiryaniImg3 from "../../assets/burger/kimchi.jpg";
import Vector from "../../assets/vector.png";
import OrderPage from "../Order/OrderPage";

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(BiryaniImg1);
  const [showOrder, setShowOrder] = useState(false);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const handleOrderClick = () => {
    setShowOrder(!showOrder);
  };

  return (
    <>
      <div className="min-h-[650px] bg-gray-100 " style={bgImage}>
        <div className="min-h-[650px] backdrop-blur-md flex justify-center items-center">
          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                <h1
                  data-aos="zoom-out"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  style={{ color: "#ffffff" }}
                >
                  {" "}
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)] "
                    style={{
                      filter: "drop-shadow(4px 4px 0 rgba(255, 255, 255,1))",
                    }}
                  >
                  </span>{" "}
                 배달의 민족
                </h1>
                <p data-aos="fade-up" className="text-sm ">
                배민이 직접 배달을 챙기니까 더 좋아졌어요!
                <br />
                저렴해서 좋은 알뜰배달, 빨라서 좋은 한집배달
                <br />
                상황에 맞게 원하는 대로 골라 주문해보세요!
                </p>
                <div data-aos="fade-up" data-aos-delay="300">
                  <button 
                    className="bg-gradient-to-r from-primary to-white hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full border-2 border-white"
                    onClick={handleOrderClick}
                  >
                    지금 바로 주문
                  </button>
                </div>
              </div>
              {/* Image section */}
              <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
                <div data-aos="fade-left" data-aos-delay="300">
                  <img
                    src={imageId}
                    alt="biryani img"
                    className="max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"
                  />
                </div>
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[-30px] lg:-right-10 bg-white/30 rounded-full">
                  {ImageList.map((item) => (
                    <div data-aos="zoom-in" data-aos-offset="0" key={item.id}>
                      <img
                        src={item.img}
                        onClick={() => {
                          setImageId(
                            item.id === 1
                              ? BiryaniImg1
                              : item.id === 2
                              ? BiryaniImg2
                              : BiryaniImg3
                          );
                        }}
                        alt="biryani img"
                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Conditionally render the OrderPage component */}
            {showOrder && <OrderPage />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
