import { combineReducers } from 'redux';
import { showingComponents } from './showingComponents/reducer';
import { changeTickets } from './changeTickets/reducer';

export const rootReducer = combineReducers({
    showingComponents,
    changeTickets
});

export type RootState = ReturnType<typeof rootReducer>;
