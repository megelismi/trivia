import {
    RECEIVE_QUESTIONS_SUCCESS,
    RECEIVE_QUESTIONS_ERROR
} from '../constants/game';

const initialState = {
    questions: [],
    error:     null
};

const game = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_QUESTIONS_ERROR:
            return {
                ...state,
                error: action.error
            };

        case RECEIVE_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.questions
            };

        default:
            return state;
    }
};

export default game;