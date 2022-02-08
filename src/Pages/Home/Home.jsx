import React from "react";
import Navbar from "./Navbar";
import Carousel from "./../Carousel/Carousel";
import Product from "./../Product/Product";
import { products } from "../../ProductData";
const Home = () => {
  return (
    <section>
      <article>
        <Navbar />
        <Carousel />
        <div className="flex justify-evenly mx-[20px] mt-3">
          {products.slice(0, 4).map(item => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Home;
