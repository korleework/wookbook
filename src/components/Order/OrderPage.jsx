// src/components/Order/OrderPage.js
import React, { useState } from 'react';

const OrderPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: 1, name: "치킨" },
    { id: 2, name: "피자" },
    { id: 3, name: "햄버거" },
    { id: 4, name: "김치찌개" },
    { id: 5, name: "떡볶이" },
  ];

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderedItems = items.filter(item => selectedItems.includes(item.id));
    console.log("주문한 항목:", orderedItems);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">주문하기</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            주소
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="주소를 입력하세요"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            요청사항
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="요청사항을 입력하세요"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            주문 항목
          </label>
          {items.map(item => (
            <div key={item.id} className="flex items-center mb-2">
              <input
                id={`item-${item.id}`}
                type="checkbox"
                className="mr-2"
                onChange={() => handleCheckboxChange(item.id)}
              />
              <label htmlFor={`item-${item.id}`} className="text-gray-700">{item.name}</label>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            주문하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
