import React from "react";
import CardComponent from "../components/card-component";

export default function CardListComponent({ products, isLoading, history }) {
  return (
    <div>
      <div className="lp-container">
        {products.map((product, index) => (
          <span
            className="card-container"
            key={index}
            onClick={() => history.push(`/${product.productId}`)}
          >
            <CardComponent product={product} isLoading={isLoading} />
          </span>
        ))}
      </div>
    </div>
  );
}
