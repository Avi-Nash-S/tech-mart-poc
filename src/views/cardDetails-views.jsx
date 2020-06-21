import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getProducts } from "../redux/products/products.action";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import "../view-styles/cardDetails-styles.scss";
import CardDetailsHeader from "../components/cardDetails-header-component";
import CardDetailsMainContent from "../components/cardDetails-mainContent-component";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

const CardDetailsSubContent = ({ currentProduct: { shortDescription } }) => (
  <span
    className="short-description"
    dangerouslySetInnerHTML={{
      __html: shortDescription,
    }}
  />
);

const CardDetailsViews = ({ match, details, history }) => {
  const currentProduct = details.products.find(
    (product) => match.params.id === product.productId
  );
  const classes = useStyles();
  return (
    <div className="card-details-container">
      <Card className={classes.root}>
        <CardActionArea component="div">
          <CardDetailsHeader
            history={history}
            currentProduct={currentProduct}
          />
          <CardDetailsMainContent currentProduct={currentProduct} />
        </CardActionArea>
        <CardDetailsSubContent currentProduct={currentProduct} />
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
