import React from 'react';
import PropTypes from 'prop-types';

const AnswerChoice = props => {
    return (
        <div className="answer-choice">
            <input
                type="radio"
                id={"answer-choice" + props.id }
                name="answer-choice"
                value={ props.answerChoice }
                onChange={ props.onAnswerSelection }
                checked={ props.checked }
            />

            <label htmlFor={"answer-choice" + props.id }>
                { props.answerChoice }
            </label>
        </div>
    );
};

AnswerChoice.propTypes = {
    answerChoice:      PropTypes.string,
    id:                PropTypes.number || PropTypes.string,
    onAnswerSelection: PropTypes.func
};

export default AnswerChoice;