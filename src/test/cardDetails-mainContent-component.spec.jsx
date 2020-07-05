import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import enzymeSerializer from "enzyme-to-json/serializer";
import CardDetailsMainContent from "../components/cardDetails-mainContent-component";
import { products } from "../static/test-data/constant-test-data";
expect.addSnapshotSerializer(enzymeSerializer);

configure({ adapter: new Adapter() });

describe("<CardDetailsMainContent/>", () => {
  it("Should match the component snapshot", () => {
    const wrapper = shallow(
      <CardDetailsMainContent currentProduct={products[0]} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render in DOM with correct Inputs", () => {
    const wrapper = mount(
      <CardDetailsMainContent currentProduct={products[0]} />
    );
    const container = wrapper.find(".card-details-main-container");
    expect(container.length).toEqual(1);
    const productPrice = wrapper.find(".price-info");
    expect(productPrice.length).toEqual(1);
  });
});
