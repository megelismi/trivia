import { USER_RECEIVED } from '../actions/user';

const initialState = {
    user:         null,
    currentScore: { correct: 0, incorrect: 0 }
};

const user = (state = initialState, action) => {
    switch(action.type) {
        case USER_RECEIVED:
            return {
                ...state,
                user: action.user
            };

        default:
            return state;
    }
};

export default user;