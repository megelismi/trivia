import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../page/HomePage.js';

import {
    TRIVIA_CATEGORIES_OPTIONS,
    DIFFICULTY_OPTIONS,
    AMOUNT_OPTIONS
} from '../constants/game';

const home = shallow(<HomePage />);

it('renders correctly', () => {
    expect(home).toMatchSnapshot();
});

it ('renders the correct default values for gameFilters in the `state`', () => {
    expect(home.state().gameFilters).toEqual({
        category:   TRIVIA_CATEGORIES_OPTIONS[0].value,
        difficulty: DIFFICULTY_OPTIONS[0].value,
        amount:     AMOUNT_OPTIONS[0].label
    });
});