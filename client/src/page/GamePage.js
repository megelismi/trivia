import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import AnswerChoice from '../component/Game/AnswerChoice';
import Button from '../component/Button';
import Question from '../component/Game/Question';
import StatusBoard from '../component/Game/StatusBoard';

export class GamePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: {
                correct:   0,
                incorrect: 0
            },
            currentQuestion:    0,
            completedQuestions: 0,
            selectedAnswer:     "",
            answerChoices:      []
        };

        this.getNextQuestion       = this.getNextQuestion.bind(this);
        this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
        this.checkAnswer           = this.checkAnswer.bind(this);
    }

    handleAnswerSelection(e) {
        this.setState({ selectedAnswer: e.target.value });
    }

    checkAnswer() {
        const correctAnswer = this.props.questions[this.state.currentQuestion].correct_answer;
        const correct       = correctAnswer === this.state.selectedAnswer;

        if (correct) {
            alert('correct woo!')
        }
        else {
            alert(`incorrect! the correct answer is ${correctAnswer}`);
        }

        this.getNextQuestion();
    }

    getNextQuestion () {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            selectedAnswer:  ""
        })
    }

    render() {
        if (this.props.loading) {
            return <div>loading...</div>; //TODO: insert a spinner
        }

        if (this.props.questions) {
            const question = this.props.questions && this.props.questions[this.state.currentQuestion];

            return (
                <div className="page game-page">
                    <StatusBoard
                        totalQuestions={this.props.questions.length}
                        {...this.state}
                    />

                    { question ?
                        <React.Fragment>
                            <Question
                                lastQuestion={this.state.currentQuestion === this.props.questions.length - 1}
                                currentQuestion={this.state.currentQuestion + 1}
                                question={this.props.questions[this.state.currentQuestion]}
                                onQuestionSubmit={this.getNextQuestion}
                            />

                            { question.answer_choices.map((answerChoice, i) => {
                                return (
                                    <AnswerChoice
                                        key={"answer-choice-" + i}
                                        answerChoice={answerChoice}
                                        id={i}
                                        multipleChoice={question.type === 'multiple'}
                                        onAnswerSelection={this.handleAnswerSelection}
                                        checked={ this.state.selectedAnswer === answerChoice }
                                    />
                                );
                            })}

                            <Button type="primary" onClick={this.checkAnswer}>
                                Submit
                            </Button>
                        </React.Fragment>
                    : null }
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        questions: state.game.questions,
        loading:   state.game.loading
    }
};

export default withRouter(connect(mapStateToProps)(GamePage));
