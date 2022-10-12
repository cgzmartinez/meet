import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('renders text input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('should change state when text input changes', () => {
    const eventObject = { target: { value: 31 } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numEvents')).toBe(31);
  });
});