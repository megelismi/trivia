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

const prepareQuestions = questions => {
    return questions.map(question => {
        return addAnswerChoices(question);
    });
};

const addAnswerChoices = question => {
    let randomIndex     = Math.round(Math.random());
    const answerChoices = [...question.incorrect_answers];

    if (question.type === 'multiple') {
        randomIndex = Math.round(Math.random() * 2);

        const temp = answerChoices[randomIndex];

        answerChoices[randomIndex] = question.correct_answer;

        answerChoices.push(temp);
    }
    else {
        if (randomIndex === 1) {
            answerChoices.push(question.correct_answer);
        }
        else {
            answerChoices.unshift(question.correct_answer);
        }
    }

    question.answer_choices = answerChoices;

    return question;
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
            const preparedQuestions = prepareQuestions(action.questions);

            return {
                ...state,
                questions:      preparedQuestions,
                loading:        false,
                gameInProgress: true
            };

        default:
            return state;
    }
};

export default game;