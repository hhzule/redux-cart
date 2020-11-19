import React from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "../global";
import { store, add } from "./store";
import "./Product.css";

const Product = () => {
  const products = useSelector((state: ProductItem[]) => state);
  console.log(products);
  return (
    <div>
      <div>
        {products.map((product: ProductItem) => (
          <div key={product.id} className="product_main">
            <br />
            <br />

            <img src={product.imageUrl} alt="product" width="300px" />
            {product.title}

            <button
              disabled={product.added}
              onClick={() => store.dispatch(add(product))}
            >
              {" "}
              click
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Product };
