import React  from "react";
import { useState } from "react";
import P1 from './img/c6.png';
import data from "./data";

const Filter = () => {

    const [products, setProducts] = useState(data);




  return (
    <div className="h-screen w-full ">
      <div className="flex flex-row justify-around">
        <div>
          <div className="flex ">
            <div className="flex flex-col pt-2 pl-6 items-start">
              <span className="font-semibold pb-1">Categories</span>
              <button className="text-sm pb-1">Category</button>
              <button className="text-sm pb-1">Category</button>
              <button className="text-sm pb-1">Category</button>
              <button className="text-sm pb-1">Category</button>
            </div>
          </div>

          <div className="flex ">
            <div className="flex flex-col pt-2 pl-6 items-start">
              <span className="font-semibold pb-1">Brands</span>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
            </div>
          </div>

          <div className="flex ">
            <div className="flex flex-col pt-2 pl-6 items-start">
              <span className="font-semibold pb-1">Rating</span>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
              <div className="pb-1">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
            
                {products.map((product)=>{
                    <div className="flex flex-row flex-wrap  p-4">
                    <div className="">
                    <img className="w-40 h-40 object-contain " src={product.imgSrc} alt={product.name}/>
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
                })}

            




            

        </div>
      </div>
    </div>
  );
};

export default Filter;
