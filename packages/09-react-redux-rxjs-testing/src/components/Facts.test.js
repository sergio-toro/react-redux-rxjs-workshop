import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Facts from "./Facts";

describe("Facts Component", () => {
  let mockOnFetchFacts;

  beforeEach(() => {
    mockOnFetchFacts = jest.fn();
  });

  it("renders without crashing", () => {
    shallow(<Facts facts={[]} onFetchFacts={mockOnFetchFacts} />);
  });

  it("calls onFetchFacts on mount", () => {
    shallow(<Facts facts={[]} onFetchFacts={mockOnFetchFacts} />);
    expect(mockOnFetchFacts).toHaveBeenCalled();
  });

  it("it renders empty list of facts", () => {
    const output = renderer.create(<Facts facts={[]} onFetchFacts={mockOnFetchFacts} />).toJSON();
    expect(output).toMatchSnapshot();
  });

  it("it renders loading facts", () => {
    const output = renderer.create(<Facts facts={[]} isLoading={true} onFetchFacts={mockOnFetchFacts} />).toJSON();
    expect(output).toMatchSnapshot();
  });

  it("it renders a list of facts", () => {
    const list = [
      {
        _id: "the-id",
        text: "a cat is funny",
        type: "cat"
      }
    ];
    const output = renderer.create(<Facts facts={list} onFetchFacts={mockOnFetchFacts} />).toJSON();
    expect(output).toMatchSnapshot();
  });

  it("calls onFetchFacts on 'Refresh Facts' clicked", () => {
    const wrapper = shallow(<Facts facts={[]} onFetchFacts={mockOnFetchFacts} />);
    wrapper.find("RefreshButton").simulate("click");
    expect(mockOnFetchFacts).toHaveBeenCalledTimes(2);
  });
});
