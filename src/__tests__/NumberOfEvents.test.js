import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test("renders text element", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(
      NumberOfEventsWrapper.find("#numberOfEvents__input").prop("value")
    ).toBe(numberOfEvents);
  });

  test("changes state when input changes", () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find("#numberOfEvents__input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  test("shows number of events input label", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
  });
});