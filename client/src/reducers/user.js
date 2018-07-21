import { USER_RECEIVED } from '../actions/user';

const initialState = {
    user: null
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