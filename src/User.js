import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { addData } from "./utils/appSlice";
import { clickData } from "./utils/clickSlice"; 

import { json } from "react-router-dom";


const User = () => {
  const [info, setInfo] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    // dispatch(addData(json));
    setInfo(json);
  }


  function handleClick(e){
    let a = [] ;
    for(let i = 0 ; i< info.products.length ; i++){
      if(info.products[i].id == e.target.id) {
        a.push(info.products[i] );
      }
    }
    console.log(a) ;
    dispatch(addData(a)); 
    console.log(e.target.parentElement);
  }
  if (info === null) return;
  return (
    <div className="grid-container">
      {info.products.map((item) => (
        <div key={item.id} className="container">
          <img src={item.images[0]} />
          <p>Title: {item.title}</p>
          <p>Price: {item.price}</p>
          <button id={item.id} onClick={(e) => handleClick(e)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default User ;
