import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../redux/products/products.action";
import "../view-styles/landingPage-styles.scss";
import CardListComponent from "../components/cardList-component";
import PaginationComponent from "../components/pagination-component";

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
    const { data, history } = this.props;
    const { products } = this.state;
    return (
      <>
        <CardListComponent
          products={products}
          isLoading={data.pending}
          history={history}
        />
        <PaginationComponent
          pageAttributes={data.products}
          pageChange={this.pageChange}
        />
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
