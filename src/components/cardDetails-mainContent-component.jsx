import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

export default function CardDetailsMainContent({ currentProduct }) {
  return (
    <div className="card-details-main-container">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {currentProduct.productName}
          <span className="price-info"> Price: {currentProduct.price} </span>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h5">
          <div className="review-container">
            <Box
              component="fieldset"
              borderColor="transparent"
              className="review-box"
            >
              <Rating
                name="read-only"
                value={currentProduct.reviewRating}
                readOnly
              />
            </Box>
            <div className="review-count">
              {`Reviews:${currentProduct.reviewCount}`}
            </div>
          </div>
          <div className="long-description">
            <span
              dangerouslySetInnerHTML={{
                __html: currentProduct.longDescription,
              }}
            />
          </div>
        </Typography>
      </CardContent>
    </div>
  );
}
