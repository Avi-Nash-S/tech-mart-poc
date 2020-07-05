import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import enzymeSerializer from "enzyme-to-json/serializer";
import ProductForm from "../components/product-form-component";
import { products } from "../static/test-data/constant-test-data";
expect.addSnapshotSerializer(enzymeSerializer);

configure({ adapter: new Adapter() });

describe("<ProductForm/>", () => {
  it("Should match the component snapshot", () => {
    const wrapper = shallow(
      <ProductForm
        formView={true}
        onFormEdit={onFormEdit}
        productEditData={products[0]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render in DOM with correct Inputs", () => {
    const wrapper = shallow(
      <ProductForm
        formView={true}
        onFormEdit={onFormEdit}
        productEditData={products[0]}
      />
    );
    const container = wrapper.find(".form-dialog");
    expect(container.length).toEqual(1);
  });
});

const onFormEdit = () => console.log("onFormEdit");
