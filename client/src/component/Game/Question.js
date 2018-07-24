import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button';

const Question = props => {
    const { category, question, difficulty }                   = props.question;
    const { onQuestionSubmit, currentQuestion } = props;

    return (
        <div className="game-question">
            <div className="questions-details">
                <div className="category">Category: { category }</div>

                <div className="difficulty" style={{ textTransform: "capitalize" }}>Difficulty: { difficulty }</div>
            </div>
            <div className="question-title">
                { currentQuestion }. { question }
            </div>

            <div className="answer-choices">

            </div>

            <Button type="primary" onClick={ onQuestionSubmit }>
                Submit
            </Button>
        </div>
    );
};

Question.propTypes = {
    number:   PropTypes.number,
    question: PropTypes.string
};

export default Question;