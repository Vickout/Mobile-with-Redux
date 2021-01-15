import { configureStore } from '@reduxjs/toolkit'

import rootAuth from './ducks/auth';

export default configureStore({
    reducer: {
        auth: rootAuth
    }
});