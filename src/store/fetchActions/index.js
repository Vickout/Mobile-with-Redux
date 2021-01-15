import api from '../../services/api';

import { login } from '../ducks/auth';

export const authLogin = user => {
    return dispatch => {
        api.post('/auth', user)
            .then(res => {
                if(res.data.token) {
                    dispatch(login())
                    console.log(res.data.token)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
}