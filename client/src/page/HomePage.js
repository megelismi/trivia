import React, { Component } from 'react';

import { connect } from 'react-redux';

import '../App.css';

import Button from '../component/Button';
import SelectField from '../component/Form/Field/SelectField';

import {
    TRIVIA_CATEGORIES_OPTIONS,
    DIFFICULTY_OPTIONS
} from '../constants/game';

import { fetchQuestions } from "../actions/game";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameFilters: {
                category:   TRIVIA_CATEGORIES_OPTIONS[0].value,
                difficulty: DIFFICULTY_OPTIONS[0].value
            }
        };

        this.handleGameFilterChange = this.handleGameFilterChange.bind(this);
        this.startGame              = this.startGame.bind(this);
    }

    handleClick() {
        this.callApi()
            .then(res => this.setState({ response: res.response }))
            .catch(err => console.log(err));
    }

    startGame() {
        const { category, difficulty } = this.state.gameFilters;

        this.props.dispatch(fetchQuestions({ category, difficulty }));
    }

    handleGameFilterChange(value, name) {
        this.setState({
            gameFilters: {
                ...this.state.gameFilters,
                [name]: value
            }
        })
    }

    callApi = async () => {
        const response = await fetch('/api/questions');
        const body     = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

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

export default connect()(HomePage);

