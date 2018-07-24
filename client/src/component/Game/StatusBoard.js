import React from 'react';

import PropTypes from 'prop-types';

const StatusBoard = props => {
    return (
        <div className="status-board" style={{ display: "flex" }}>
            <div style={{ marginRight: "12px" }}>
                Correct: { props.score.correct }
            </div>

            <div style={{ marginRight: "12px" }}>
                Incorrect: { props.score.incorrect }
            </div>

            <div style={{ marginRight: "12px" }}>
                Completed: { props.completedQuestions } / {  props.totalQuestions }
            </div>
        </div>
    );
};

StatusBoard.propTypes = {

};

export default StatusBoard;