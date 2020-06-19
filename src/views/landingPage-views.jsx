import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../redux/products/products.action";
import CardComponent from "../components/card-component";
import Pagination from "@material-ui/lab/Pagination";
import "../view-styles/landingPage-styles.scss";

class landingPageViews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    const { data, getProducts } = this.props;
    if (data.products) {
      this.setState({
        products: data.products.products,
      });
    } else {
      getProducts();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        products: this.props.data.products.products,
      });
    }
  }

  pageChange = (event, page) => {
    this.props.getProducts(page);
  };

  render() {
    const { history, data } = this.props;
    const { products } = this.state;
    const isLoading = data.pending;
    const pageAttributes = data.products;
    console.log(data);
    return (
      <>
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
        <div className="footer-pagination">
          <Pagination
            count={Math.round(
              parseInt(pageAttributes.totalProducts || 60) /
                pageAttributes.pageSize
            )}
            variant="outlined"
            shape="rounded"
            onChange={this.pageChange}
            page={pageAttributes.pageNumber}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (storeState) => ({
  data: storeState.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (pageNo, pageSize) => dispatch(getProducts(pageNo, pageSize)),
});

export default connect(mapStateToProps, mapDispatchToProps)(landingPageViews);
