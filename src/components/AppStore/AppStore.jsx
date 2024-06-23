import React from "react";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 py-14">
        <div className="container">
          <div className="grid items-center">
            <div className="space-y-6 max-w-xl mx-auto">
              <h1
                data-aos="zoom-in"
                className="text-xl sm:text-4xl font-semibold text-center text-gray-700"
              >
                배달의 민족을 다운로드하고 많은 혜택 받아가세요!
              </h1>
              <div className="flex flex-wrap justify-center items-center">
                <a href="#">
                  <img
                    data-aos="fade-up"
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[100px] sm:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="200"
                    src={AppStoreImg}
                    alt="App store"
                    className="max-w-[100px] sm:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
