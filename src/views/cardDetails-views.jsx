import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getProducts } from "../redux/products/products.action";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../view-styles/cardDetails-styles.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

const CardDetailsViews = ({ match, details, history }) => {
  const currentProduct = details.products.find(
    (product) => match.params.id === product.productId
  );
  const classes = useStyles();
  return (
    <div className="card-details-container">
      <Card className={classes.root}>
        <CardActionArea component="div">
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
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {currentProduct.productName}
              <span className="price-info">
                {" "}
                Price: {currentProduct.price}{" "}
              </span>
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
        </CardActionArea>
        <span
          className="short-description"
          dangerouslySetInnerHTML={{
            __html: currentProduct.shortDescription,
          }}
        />
      </Card>
    </div>
  );
};

const mapStateToProps = (storeState) => ({
  details: storeState.products.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (pageNo, pageSize) => dispatch(getProducts(pageNo, pageSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailsViews);
