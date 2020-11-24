import {combineReducers} from 'redux';
import { uiReducer } from './uiReducer';
import { calendarReducer } from './CalendarReducer';
import { authReducer } from './authReducer';


export const rootReducer = combineReducers({
    ui:uiReducer,
        calendar: calendarReducer,
        auth:authReducer

})