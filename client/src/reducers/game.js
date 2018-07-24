import {
    LOADING_QUESTIONS,
    RECEIVE_QUESTIONS_SUCCESS,
    RECEIVE_QUESTIONS_ERROR
} from '../constants/game';

const initialState = {
    questions:       [],
    loading:         false,
    error:           null,
    gameInProgress:  false,
    currentQuestion: 0
};

const game = (state = initialState, action) => {
    switch(action.type) {
        case LOADING_QUESTIONS:
            return {
                ...state,
                loading: true
            };

        case RECEIVE_QUESTIONS_ERROR:
            return {
                ...state,
                error:   action.error,
                loading: false
            };

        case RECEIVE_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions:      action.questions,
                loading:        false,
                gameInProgress: true
            };

        default:
            return state;
    }
};

export default game;