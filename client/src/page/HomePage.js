import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import '../App.css';

import Button from '../component/Button';
import SelectField from '../component/Form/Field/SelectField';

import {
    TRIVIA_CATEGORIES_OPTIONS,
    DIFFICULTY_OPTIONS,
    AMOUNT_OPTIONS
} from '../constants/game';

import { fetchQuestions } from "../actions/game";

export class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameFilters: {
                category:   TRIVIA_CATEGORIES_OPTIONS[0].value,
                difficulty: DIFFICULTY_OPTIONS[0].value,
                amount:     AMOUNT_OPTIONS[0].label
            }
        };

        this.handleGameFilterChange = this.handleGameFilterChange.bind(this);
        this.startGame              = this.startGame.bind(this);
    }

    startGame() {
        const {
            category,
            difficulty,
            amount
        } = this.state.gameFilters;

        this.props.history.push('/game');

        this.props.dispatch(fetchQuestions({ category, difficulty, amount }));
    }

    handleGameFilterChange(value, name) {
        this.setState({
            gameFilters: {
                ...this.state.gameFilters,
                [name]: value
            }
        })
    }

    render() {
        return (
            <div className="page" style={{ padding: "20px" }}>
               <h2 style={{ margin: "0" }}>Trivia!</h2>

                <SelectField
                    name="category"
                    label="Category"
                    onChange={ this.handleGameFilterChange }
                    options={ TRIVIA_CATEGORIES_OPTIONS }
                />

                <SelectField
                    name="difficult"
                    label="Difficulty"
                    onChange={ this.handleGameFilterChange }
                    options={ DIFFICULTY_OPTIONS }
                />

                <SelectField
                    name="amoutn"
                    label="Amount of Questions"
                    onChange={ this.handleGameFilterChange }
                    options={ AMOUNT_OPTIONS }
                />

                <Button
                    type="primary"
                    onClick={ this.startGame }
                >
                    Let's Play
                </Button>
            </div>
        );
    }
}

export default withRouter(connect()(HomePage));

