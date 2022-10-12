import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

    let EventWrapper;

    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    test('render event summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render event dateTime', () => {
        expect(EventWrapper.find('.dateTime')).toHaveLength(1);
    });

    test('render event timeZone', () => {
        expect(EventWrapper.find('.timeZone')).toHaveLength(1);
    });

    test('render event location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('render details button', () => {
        expect(EventWrapper.find('.btn-details')).toHaveLength(1);
    });

    // toBe used for strict equality
    test('renders event component correctly', () => {
        expect(EventWrapper.state('isExpanded')).toBe(false);
    });

    // simulate actions with simulate
    test('click should "show-details" button expands event component', () => {
        EventWrapper.find('.btn-details').simulate('click');
        expect(EventWrapper.state('isExpanded')).toBe(true);
    });

    test('expanded event renders "About Event"', () => {
        expect(EventWrapper.find('.about')).toHaveLength(1);
    });

    test('expanded event should render htmlLink ("see details on Google Calendar")', () => {
        expect(EventWrapper.find('.link')).toHaveLength(1);
    });

    test('expanded event should render event description', () => {
        expect(EventWrapper.find('.description')).toHaveLength(1);
    });

    test('expanded event should collapse when button clicked', () => {
        EventWrapper.find('.btn-details').simulate('click');
        expect(EventWrapper.state('isExpanded')).toBe(false);
    });

    test('expanded event should be collapsed', () => {
        expect(EventWrapper.find('.Expanded-Event')).toHaveLength(0);
    });

});
