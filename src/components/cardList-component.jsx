import React from "react";
import CardComponent from "../components/card-component";

export default function CardListComponent({
  products,
  isLoading,
  history,
  onFormEdit,
}) {
  return (
    <div>
      <div className="lp-container">
        {products &&
          products.map((product, index) => (
            <CardComponent
              product={product}
              isLoading={isLoading}
              key={index}
              history={history}
              onFormEdit={onFormEdit}
            />
          ))}
      </div>
    </div>
  );
}
