import { TRY_AUTH } from './actionTypes';

const tryAuth = (authData) => {
    console.log(authData);
    return {
        type: TRY_AUTH,
        authData
    };
}

export { tryAuth };