import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import enzymeSerializer from "enzyme-to-json/serializer";
import CardComponent from "../components/card-component";
import { products } from "../static/test-data/constant-test-data";
expect.addSnapshotSerializer(enzymeSerializer);

configure({ adapter: new Adapter() });

describe("<CardComponent/>", () => {
  it("Should match the component snapshot", () => {
    const wrapper = shallow(
      <CardComponent
        product={products[0]}
        isLoading={false}
        key={0}
        history={[]}
        onFormEdit={onFormEdit}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render in DOM with correct Inputs", () => {
    const wrapper = shallow(
      <CardComponent
        product={products[0]}
        isLoading={false}
        key={0}
        history={[]}
        onFormEdit={onFormEdit}
      />
    );
    const container = wrapper.find(".card-container");
    expect(container.length).toEqual(1);
    const image = wrapper.find("img");
    expect(image.length).toEqual(1);
    expect(image.props().src).toEqual(
      `https://mobile-tha-server-8ba57.firebaseapp.com${products[0].productImage}`
    );
  });
});

const onFormEdit = () => console.log("onFormEdit");
