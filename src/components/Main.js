import React from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import SearchForm from "./SearchForm";
import { data } from "../data";

function Main() {
  return (
    <div>
      <div>
        <Categories/>
        <SearchForm />
      </div>

      <div className="container">
        <div className="row p-4 mx-auto g-4">

          {data.map((product, id) => {
            return (
              <ProductCard {...product} key={id} />
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Main;
