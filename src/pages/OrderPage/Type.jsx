import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";

//Type.test.jsx에서 보낸 props인 orderType
export default function Type({ orderType }) {
  const [items, setItems] = useState([]);

  //useEffect를 이용해서 백엔드 서버에 요청을 보냄
  //orderType 바뀔때 마다 loadItems를 다시 call 해줌
  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost/4000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const ItemComponent = orderType === "products" ? Products : null;
  //items에는 resonse.data가 들어있음
  const optionItems = items.map((item) => {
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />;
  });

  return <div>{optionItems}</div>;
}
