import { combineReducers } from 'redux';

import user from './user';
import game from './game';

const combinedReducers = combineReducers({
    user,
    game
});

export default combinedReducers;

