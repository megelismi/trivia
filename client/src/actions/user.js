export const USER_RECEIVED = 'USER_RECEIVED';

export const userReceived = user => {
    return {
        type: USER_RECEIVED,
        user
    }
};