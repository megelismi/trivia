import React from 'react';

import PropTypes from 'prop-types';

const Question = props => {
    const { category, question, difficulty } = props.question;
    const { currentQuestion }                = props;

    return (
        <div className="game-question">
            <div className="questions-details">
                <div className="category">
                    Category: { category }
                </div>

                <div className="difficulty" style={{ textTransform: "capitalize" }}>
                    Difficulty: { difficulty }
                </div>
            </div>
            <div className="question-title">
                { currentQuestion }. { question }
            </div>
        </div>
    );
};

Question.propTypes = {
    number:   PropTypes.number,
    question: PropTypes.object
};

export default Question;