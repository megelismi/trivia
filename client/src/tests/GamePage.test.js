import React from 'react';
import { shallow } from 'enzyme';
import { GamePage } from '../page/GamePage.js';

const game = shallow(<GamePage />);

it('renders correctly', () => {
    expect(game).toMatchSnapshot();
});

it('initializes score object in the `state` with the correct values', () => {
    expect(game.state().score).toEqual({ correct: 0, incorrect: 0 });
});

it('initializes completedQuestions property in the `state` with the correct value', () => {
    expect(game.state().completedQuestions).toEqual(0);
});

it('initializes currentQuestion property in the `state` with the correct value', () => {
    expect(game.state().currentQuestion).toEqual(0);
});