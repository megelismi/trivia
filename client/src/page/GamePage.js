import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import StatusBoard from '../component/Game/StatusBoard';
import Question from '../component/Game/Question';

class GamePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: {
                correct:   0,
                incorrect: 0
            },
            currentQuestion:    0,
            completedQuestions: 0
        };

        this.getNextQuestion = this.getNextQuestion.bind(this);
    }

    checkAnswer() {

    }

    getNextQuestion() {
        console.log('hello');

        this.setState({ currentQuestion: this.state.currentQuestion+1 })
    }

    render() {
        if (this.props.loading && !this.props.questions.length) {
            return <div>loading...</div>;
        }
console.log(this.props.questions[this.state.currentQuestion] );
        return (
            <div className="page game-page">
                <StatusBoard
                    totalQuestions={ this.props.questions.length }
                    { ...this.state }
                />

                { this.props.questions[this.state.currentQuestion] ?
                    <Question
                        lastQuestion={ this.state.currentQuestion === this.props.questions.length-1 }
                        currentQuestion={ this.state.currentQuestion + 1}
                        question={ this.props.questions[this.state.currentQuestion] }
                        onQuestionSubmit={ this.getNextQuestion }
                    />
                : null }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        questions: state.game.questions,
        loading:   state.game.loading
    }
};

export default withRouter(connect(mapStateToProps)(GamePage));