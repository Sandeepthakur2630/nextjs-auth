import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function SingelPage() {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${params.productId}`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log("singel item data", data);
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div>
          <h1 className="text-[#b75b5b]">
            This is the product discreption page
          </h1>
        </div>
        <h1 className="font-bold text-3xl"> {data.title}</h1>
        <div className="pt-8">
          <div>
            <div className=" ml-[28rem] w-[200px] pt-7">
              <img src={data.image} alt={data.title} />
            </div>
            <p className="text-xl">{data.description}</p>
            <p>{`The price of the item is :$ ${data.price}`}</p>

            <button className="p-[1rem] rounded-md ml-[31.5rem] bg-[#f8edf8]">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingelPage;
