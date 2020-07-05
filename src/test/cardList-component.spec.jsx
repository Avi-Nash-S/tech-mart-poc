import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import enzymeSerializer from "enzyme-to-json/serializer";
import CardListComponent from "../components/cardList-component";
import { products } from "../static/test-data/constant-test-data";
expect.addSnapshotSerializer(enzymeSerializer);

configure({ adapter: new Adapter() });

describe("<CardListComponent/>", () => {
  it("Should match the component snapshot", () => {
    const wrapper = shallow(
      <CardListComponent
        products={products}
        isLoading={false}
        history={[]}
        formView={false}
        onFormEdit={onFormEdit}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render in DOM with correct Inputs", () => {
    const wrapper = shallow(
      <CardListComponent
        products={products}
        isLoading={false}
        history={[]}
        formView={false}
        onFormEdit={onFormEdit}
      />
    );
    const container = wrapper.find(".lp-container");
    expect(container.length).toEqual(1);
    const cardComponents = wrapper.find("CardComponent");
    expect(cardComponents.length).toEqual(8);
    const cardComponentsPropCheck = wrapper.find("CardComponent").at(7);
    expect(cardComponentsPropCheck.props().history).toEqual([]);
  });
});

const onFormEdit = () => console.log("onFormEdit");
