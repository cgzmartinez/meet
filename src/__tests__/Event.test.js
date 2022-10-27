import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    test('renders event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('render event summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render event dateTime', () => {
        expect(EventWrapper.find('.dateTime')).toHaveLength(1);
    });

    test('render event location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('render details button', () => {
        expect(EventWrapper.find('.btn-toggle')).toHaveLength(1);
    });

    test('renders event component correctly', () => {
        expect(EventWrapper.state('isExpanded')).toBe(undefined);
    });

    test('click should "show-details" button expands event component', () => {
        EventWrapper.find('.btn-toggle').simulate('click');
        expect(EventWrapper.state('isExpanded')).toBe(undefined);
    });

    test('expanded event should render htmlLink ("see details on Google Calendar")', () => {
        expect(EventWrapper.find('.link')).toHaveLength(1);
    });

    test('expanded event should render event description', () => {
        expect(EventWrapper.find('.event-details')).toHaveLength(1);
    });

    test('expanded event should collapse when button clicked', () => {
        EventWrapper.setState({
            show: true
        });
        EventWrapper.find('.btn-toggle').simulate('click');
        expect(EventWrapper.state('show')).toBe(true);
    });

    test('expanded event should be collapsed', () => {
        expect(EventWrapper.find('.event-details')).toHaveLength(0);
    });

});
