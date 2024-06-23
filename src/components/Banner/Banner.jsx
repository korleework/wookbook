import React, { useState } from "react";
import beamin from "../../assets/burger/beamin.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import OrderPage from "../Order/OrderPage";

const Banner = () => {
  const [showOrder, setShowOrder] = useState(false);

  const handleOrderClick = () => {
    setShowOrder(!showOrder);
  };

  return (
    <div className="min-h-[700px] flex flex-col justify-center items-center" style={{ backgroundColor: "#48D1CC" }}>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image section */}
          <div data-aos="flip-up">
            <img
              src={beamin}
              alt="biryani img"
              className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
            />
          </div>
          {/* text content section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold"
            >
              배민을 더 빠르게!
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              배민이 직접 배달을 챙기니까 더 좋아졌어요!
              <br />
              <br />
              저렴해서 좋은 알뜰배달, 빨라서 좋은 한집배달
              상황에 맞게 원하는 대로 골라 주문해보세요!
            </p>
            <div className="flex gap-6">
              <div data-aos="fade-up">
                <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100" />
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100" />
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100" />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <button
                onClick={handleOrderClick}
                className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md inline-block"
              >
                지금 바로 주문
              </button>
            </div>
          </div>
        </div>
        {showOrder && (
          <div data-aos="fade-up" data-aos-delay="600">
            <OrderPage />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
