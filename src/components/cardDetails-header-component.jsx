import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function CardDetailsHeader({ history, currentProduct }) {
  return (
    <>
      <Fab
        className="fab-back-button"
        onClick={() => history.replace("/")}
        size="small"
        aria-label="scroll back to top"
      >
        <ArrowBackIcon />
      </Fab>
      <div className="card-image">
        <CardMedia
          className="card-image-container"
          image={`https://mobile-tha-server-8ba57.firebaseapp.com${currentProduct.productImage}`}
          title={currentProduct.productName}
        />
      </div>
    </>
  );
}
