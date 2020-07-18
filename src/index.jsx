import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './store';
import AppContainer from './containers/AppContainer';

const store = createStore(rootReducer);

window.addEventListener('load', () => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>,
        document.getElementById('root')
    );
});
