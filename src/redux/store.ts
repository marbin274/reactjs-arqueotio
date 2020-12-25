import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from 'redux-app/reducer';

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getMiddleware = () => {
    const middlewares = [thunk];
    if (process.env.NODE_ENV !== "production") {
        middlewares.push(createLogger() as any);
    }
    return applyMiddleware(...middlewares);
}

const store = createStore(rootReducer, {}, composeEnhancer(getMiddleware()));

export default store;