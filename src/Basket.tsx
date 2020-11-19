import React from "react";
import { useSelector } from "react-redux";

import { ProductItem } from "../global";
import { store, remove } from "./store";

const Basket = () => {
  const products = useSelector((state: ProductItem[]) => state);

  return (
    <>
      <h1> Shopping Basket</h1>
      <p>
        You have {products.filter((product) => product.added).length} items in
        your basket
      </p>
      {products
        .filter((product) => product.added)
        .map((product: ProductItem) => {
          return (
            <div key={product.id}>
              <img alt="Product" src={product.imageUrl} />
              <p>{product.title}</p>
              &pound;{(product.price / 100).toFixed(2)}
              {` — ${product.description}`}
              <button
                onClick={() => store.dispatch(remove({ id: product.id }))}
              />
            </div>
          );
        })}
      &pound;
      {(
        products
          .filter((product) => product.added)
          .reduce((acc, current) => (acc += current.price), 0) / 100
      ).toFixed(2)}
    </>
  );
};

export { Basket };
