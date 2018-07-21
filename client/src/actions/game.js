import {
    RECEIVE_QUESTIONS_ERROR,
    RECEIVE_QUESTIONS_SUCCESS
} from '../constants/game';

export const receiveQuestionsSuccess = questions => {
    return {
       type: RECEIVE_QUESTIONS_SUCCESS,
       questions
    }
};

export const receiveQuestionsError = error => {
    return {
        type: RECEIVE_QUESTIONS_ERROR,
        error
    }
};

export const fetchQuestions = data => {
    return async dispatch => {
        try {
            console.log('fetch questions reached', data);

            const response = await fetch('/api/questions', {
                method: 'POST',
                body:   JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=utf-8'
                },
            });

            const questions = await response.json();

            dispatch(receiveQuestionsSuccess(questions))
        }
        catch (error) {
            dispatch(receiveQuestionsError(error))
        }
    }
};