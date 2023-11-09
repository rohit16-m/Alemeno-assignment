import {configureStore} from '@reduxjs/toolkit'
import apiReducer from './feature/apliSlice';
import dashboardReducer from './feature/dashboard'

export const store = configureStore({
    reducer:{
        api:apiReducer,
        dashboard:dashboardReducer
    }
})