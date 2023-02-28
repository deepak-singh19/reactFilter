import React from "react";
import { useState, useEffect } from "react";
import P1 from "./img/c6.png";
import data from "./data";
import { FaStar } from "react-icons/fa";
import MultiRangeSlider from "./multiRangeSlider";

const Filter = () => {
  const [products, setProduct] = useState(data);

  const [value, setValue] = useState([]);
  const [cater, setCater] = useState();
  const [rating, setRating] = useState();
  console.log(data);
  // console.log( products);

  const newProduct = () => {
    console.log(cater);
    const result = data
      .filter((currData) => {
        return currData.category == cater;
      })
      .filter((curData) => {
        return curData.brand == value;
      });
    console.log(result);
    setProduct(result);
  };

  const getUniqueData = (data, property) => {
    let newVal = data.map((item) => {
      return item[property];
    });

    return (newVal = [...new Set(newVal)]);

    // console.log(newVal);
  };

  const categoryData = getUniqueData(data, "category");
  //   console.log(categoryData);

  const brandData = getUniqueData(data, "brand");
  //   console.log(brandData);

  return (
    <div className="h-screen w-full ">
      <div className="flex flex-row justify-around">
        <div>
          <div className="flex ">
            <div className="flex flex-col pt-2  items-start">
              <span className="font-semibold pb-1">Categories</span>
              {categoryData.map((cat) => {
                return (
                  <button
                    className="text-sm pb-1"
                    onClick={() => {
                      setCater(cat);
                      console.log(cater);
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex ">
            <div className="flex flex-col pt-2  items-start">
              <span className="font-semibold pb-1">Brands</span>
              {brandData.map((i) => {
                return (
                  <div className="pb-1  ">
                    <label>
                      <input
                        type="checkbox"
                        value={i}
                        onClick={() => {
                          setValue(i);
                          console.log(i);
                        }}
                      />
                      <span className="pl-2">{i}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex ">
            <div className="flex flex-col pt-2 items-start">
              <span className="font-semibold pb-1">Rating</span>

              <div className="pb-1 flex flex-row">
                <input type="checkbox" name="rating" value={5} />
                <diV className="flex flex-row pl-2">
                  {[...Array(5)].map((star) => {
                    return <FaStar style={{color: '#F7BD16'}} />;
                  })}
                </diV>
              </div>

              <div className="pb-1 flex flex-row ">
                <input type="checkbox" name="rating" value={4} />
                <diV className="flex flex-row pl-2">
                  {[...Array(4)].map((star) => {
                    return <FaStar style={{color: '#F7BD16'}} />;
                  })}
                </diV>
              </div>

              <div className="pb-1 flex flex-row">
                <input type="checkbox" name="rating" value={3} />
                <diV className="flex flex-row pl-2">
                  {[...Array(3)].map((star) => {
                    return <FaStar style={{color: '#F7BD16'}} />;
                  })}
                </diV>
              </div>

              <div className="pb-1 flex flex-row">
                <input type="checkbox" name="rating" value={2} />
                <diV className="flex flex-row pl-2">
                  {[...Array(2)].map((star) => {
                    return <FaStar style={{color: '#F7BD16'}} />;
                  })}
                </diV>
              </div>

              <div className="pb-1 flex flex-row">
                <input type="checkbox" name="rating" value={1} />
                <diV className="flex flex-row pl-2">
                  {[...Array(1)].map((star) => {
                    return <FaStar style={{color: '#F7BD16'}} />;
                  })}
                </diV>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-2  items-start">
            <div className="font-semibold pb-1">Price</div>
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) =>{
                
              }
            }
            />
          </div>

          <div className="flex flex-row mt-10 justify-around ">
            <button className="p-2 shadow-sm bg-blue-800 rounded-xl" onClick={newProduct}>
              Apply
            </button>
            <button className="p-2 shadow-m border-2 rounded-xl">Reset</button>
          </div>
        </div>

        {/* <div className="flex flex-col">
          {products.map((product) => {
            return (
              <div className="flex flex-row flex-wrap  p-4">
                <div className="">
                  <img
                    className="w-40 h-40 object-contain "
                    src={product.imgSrc}
                    alt={product.name}
                  />
                </div>
                <div className="p-6 flex flex-col ">
                  <span>{product.name}</span>
                  <span>Des</span>
                  <span>{product.ratings}</span>
                  <p>Freshness</p>
                  <p>Farm</p>
                  <p>Delivery</p>
                  <p>Stocks</p>
                </div>

                <div className="p-6 flex flex-col ">
                  <span>{product.price}</span>
                  <span>Free Shipping</span>
                  <span>Delivery</span>
                  <button>Product Details</button>
                  <button>Wishlist</button>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
