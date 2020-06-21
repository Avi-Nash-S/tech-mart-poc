import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../redux/products/products.action";
import "../view-styles/landingPage-styles.scss";
import CardListComponent from "../components/cardList-component";
import LandingPageLayout from "../components/landingPage-layout-component";
import ProductForm from "../components/product-form-component";

class landingPageViews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      formView: false,
      productEditData: null,
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

  onFormEdit = (event, productEditData) => {
    event.persist();
    this.setState((prevState) => ({
      formView: !prevState.formView,
      productEditData: productEditData,
    }));
  };

  render() {
    const { data, history } = this.props;
    const { products, formView, productEditData } = this.state;
    return (
      <LandingPageLayout history={history}>
        <CardListComponent
          products={products}
          isLoading={data.pending}
          history={history}
          formView={formView}
          onFormEdit={this.onFormEdit}
        />
        {productEditData && (
          <ProductForm
            formView={formView}
            onFormEdit={this.onFormEdit}
            productEditData={productEditData}
          />
        )}
      </LandingPageLayout>
    );
  }
}

const mapStateToProps = (storeState) => ({
  data: storeState.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (pageNo, pageSize, query) =>
    dispatch(getProducts(pageNo, pageSize, query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(landingPageViews);
